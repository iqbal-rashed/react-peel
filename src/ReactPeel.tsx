import React, { forwardRef, useEffect, useRef, useCallback } from "react";
import PeelLib, { PeelCorners } from "./peel";
import { HtmlDivProps, PeelOptions, Props, TCoords, PeelRef } from "./types";
import { getPreset } from "./presets";

export const PeelWrapper = forwardRef(Peel);

function Peel(
  { children, options = {}, containerProps, ...props }: Props,
  refer: React.Ref<PeelRef>
) {
  const ref = useRef<HTMLDivElement>(null);
  const peelRef = useRef<PeelRef | null>(null);
  const lastProgressRef = useRef<number>(0);
  const isPeelingRef = useRef<boolean>(false);

  useInitializeCss();

  // Merge preset options with provided options
  const mergedOptions = React.useMemo(() => {
    if (props.preset) {
      const preset = getPreset(props.preset);
      return { ...preset.options, ...options };
    }
    return options;
  }, [props.preset, options]);

  // Get preset corner and mode if not explicitly provided
  const effectiveCorner = React.useMemo(() => {
    if (props.corner) return props.corner;
    if (props.preset) {
      const preset = getPreset(props.preset);
      return preset.corner;
    }
    return undefined;
  }, [props.corner, props.preset]);

  const effectiveMode = React.useMemo(() => {
    if (props.mode) return props.mode;
    if (props.preset) {
      const preset = getPreset(props.preset);
      return preset.mode;
    }
    return undefined;
  }, [props.mode, props.preset]);

  // Track peel progress for callbacks
  const trackProgress = useCallback(() => {
    if (!peelRef.current || !props.onPeelProgress) return;

    const progress = peelRef.current.getAmountClipped();
    if (progress !== lastProgressRef.current) {
      props.onPeelProgress(progress, peelRef.current);
      lastProgressRef.current = progress;
    }
  }, [props.onPeelProgress]);

  // Handle peel start
  const handlePeelStart = useCallback(() => {
    if (!isPeelingRef.current && peelRef.current) {
      isPeelingRef.current = true;
      props.onPeelStart?.(peelRef.current);
    }
  }, [props.onPeelStart]);

  // Handle peel end
  const handlePeelEnd = useCallback(() => {
    if (isPeelingRef.current && peelRef.current) {
      const progress = peelRef.current.getAmountClipped();
      // Consider peel ended if fully open or at constraint
      if (progress >= 0.99 || progress <= 0.01) {
        isPeelingRef.current = false;
        props.onPeelEnd?.(peelRef.current);
      }
    }
  }, [props.onPeelEnd]);

  useEffect(() => {
    function initialize() {
      if (!ref.current) return;
      const PeelJs = PeelLib();
      const p = new PeelJs(ref.current, normalizeOptions(mergedOptions));
      peelRef.current = p;

      if (refer) {
        if (typeof refer === "function") {
          refer(p);
        } else {
          (refer as React.MutableRefObject<PeelRef>).current = p;
        }
      }

      if (props.peelPosition && peelRef.current) {
        peelRef.current.setPeelPosition(
          props.peelPosition.x,
          props.peelPosition.y
        );
      }

      if (effectiveCorner && peelRef.current) {
        if (
          Object.prototype.hasOwnProperty.call(effectiveCorner, "x") &&
          Object.prototype.hasOwnProperty.call(effectiveCorner, "y")
        ) {
          const { x, y } = effectiveCorner as TCoords;
          peelRef.current.setCorner(x, y);
        } else if (isPeelCorners(effectiveCorner)) {
          peelRef.current.setCorner(peelCornersValue(effectiveCorner));
        }
      }

      // Apply preset constraints
      if (props.preset) {
        const preset = getPreset(props.preset);
        if (preset.constraints) {
          preset.constraints.forEach((constraint) => {
            peelRef.current?.addPeelConstraint(peelCornersValue(constraint));
          });
        }
      }

      if (props.constraints) {
        if (Array.isArray(props.constraints)) {
          props.constraints.forEach((constraint) => {
            addPeelConstraint(constraint);
          });
        } else {
          addPeelConstraint(props.constraints);
        }
      }

      if (effectiveMode && peelRef.current) {
        peelRef.current.setMode(effectiveMode);
      }

      if (props.fadeThreshold && peelRef.current) {
        peelRef.current.setFadeThreshold(props.fadeThreshold);
      }

      if (props.peelPath && Array.isArray(props.peelPath) && peelRef.current) {
        peelRef.current.setPeelPath(...props.peelPath);
      }

      // Setup drag handling (unless disabled)
      if (!props.disabled) {
        if (props.drag) {
          peelRef.current?.handleDrag(function (
            _evt: MouseEvent,
            x: number,
            y: number
          ) {
            if (props.disabled) return;
            handlePeelStart();
            peelRef.current?.setPeelPosition(x, y);
            trackProgress();
            handlePeelEnd();
          });
        }
        if (props.handleDrag) {
          peelRef.current?.handleDrag(
            (evt: MouseEvent, x: number, y: number) => {
              if (props.disabled) return;
              handlePeelStart();
              props.handleDrag?.(evt, x, y, peelRef.current as PeelRef);
              trackProgress();
              handlePeelEnd();
            }
          );
        }
        if (props.handlePress) {
          peelRef.current?.handlePress((evt: MouseEvent) => {
            if (props.disabled) return;
            props.handlePress?.(evt, peelRef.current as PeelRef);
          });
        }
      }
    }

    initialize();
    return () => {
      if (peelRef.current) {
        peelRef.current.clear();
      }
    };
  }, [mergedOptions, props.disabled]);

  useEffect(() => {
    if (props.timeAlongPath) {
      peelRef.current?.setTimeAlongPath(props.timeAlongPath);
      trackProgress();
    }
  }, [props.timeAlongPath, trackProgress]);

  useEffect(() => {
    if (props.peelPosition) {
      peelRef.current?.setPeelPosition(
        props.peelPosition.x,
        props.peelPosition.y
      );
      trackProgress();
    }
  }, [props.peelPosition, trackProgress]);

  useEffect(() => {
    if (effectiveCorner) {
      if (
        Object.prototype.hasOwnProperty.call(effectiveCorner, "x") &&
        Object.prototype.hasOwnProperty.call(effectiveCorner, "y")
      ) {
        const { x, y } = effectiveCorner as TCoords;
        peelRef.current?.setCorner(x, y);
      } else if (isPeelCorners(effectiveCorner)) {
        peelRef.current?.setCorner(peelCornersValue(effectiveCorner));
      }
    }
  }, [effectiveCorner]);

  useEffect(() => {
    if (props.peelPath && Array.isArray(props.peelPath)) {
      peelRef.current?.setPeelPath(...props.peelPath);
    }
  }, [props.peelPath]);

  useEffect(() => {
    if (effectiveMode) {
      peelRef.current?.setMode(effectiveMode);
    }
  }, [effectiveMode]);

  useEffect(() => {
    if (props.fadeThreshold) {
      peelRef.current?.setFadeThreshold(props.fadeThreshold);
    }
  }, [props.fadeThreshold]);

  useEffect(() => {
    if (props.constraints) {
      if (Array.isArray(props.constraints)) {
        props.constraints.forEach((constraint) => {
          addPeelConstraint(constraint);
        });
      } else {
        addPeelConstraint(props.constraints);
      }
    }
  }, [props.constraints]);

  function addPeelConstraint(cons: Props["constraints"]) {
    if (isPeelCorners(cons)) {
      peelRef.current?.addPeelConstraint(peelCornersValue(cons));
    } else if (
      Object.prototype.hasOwnProperty.call(cons, "x") &&
      Object.prototype.hasOwnProperty.call(cons, "y")
    ) {
      const t = cons as TCoords;
      peelRef.current?.addPeelConstraint(t.x, t.y);
    }
  }

  return (
    <div
      ref={ref}
      className={"peel " + (props?.className || "")}
      {...containerProps}
      style={{
        height: props.height || "100%",
        width: props.width || "100%",
        pointerEvents: props.disabled ? "none" : undefined,
        ...containerProps?.style,
      }}
      aria-disabled={props.disabled}
    >
      {children}
    </div>
  );
}

function normalizeOptions(options: PeelOptions): PeelOptions {
  const result = { ...options };
  // Remove corner from options as it's handled separately
  // This prevents type conflicts with the peel.js constructor
  delete result.corner;
  return result;
}

function isPeelCorners(value: unknown): value is keyof typeof PeelCorners {
  return typeof value === "string" && Object.keys(PeelCorners).includes(value);
}

function peelCornersValue(value: keyof typeof PeelCorners) {
  return PeelCorners[value];
}

PeelWrapper.displayName = "PeelWrapper";

const useInitializeCss = () => {
  useEffect(() => {
    // Check if styles are already added
    if (document.getElementById("react-peel-styles")) return;

    const styleDoc = document.createElement("style");
    styleDoc.id = "react-peel-styles";
    styleDoc.innerHTML = `
    .peel {
      position: relative;
      opacity: 0;
    }
    
    .peel-ready {
      opacity: 1;
    }
    
    .peel-svg-clip-element {
      position: absolute;
      top: -10000px;
      left: -10000px;
      width: 1px;
      height: 1px;
      opacity: 0;
    }
    
    .peel-layer {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      -webkit-transform-origin: top left;
      -moz-transform-origin: top left;
      transform-origin: top left;
    }
    `;

    document.head.appendChild(styleDoc);
    return () => {
      const existingStyle = document.getElementById("react-peel-styles");
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);
};

/**
 * Top layer of the peel effect (the page being peeled)
 */
export const PeelTop = forwardRef<HTMLDivElement, HtmlDivProps>(function PeelTop(
  { className = "", ...props },
  ref
) {
  return <div ref={ref} className={"peel-top " + className} {...props}></div>;
});

PeelTop.displayName = "PeelTop";

/**
 * Back layer of the peel effect (backside of the page)
 */
export const PeelBack = forwardRef<HTMLDivElement, HtmlDivProps>(function PeelBack(
  { className = "", ...props },
  ref
) {
  return <div ref={ref} className={"peel-back " + className} {...props}></div>;
});

PeelBack.displayName = "PeelBack";

/**
 * Bottom layer of the peel effect (content revealed underneath)
 */
export const PeelBottom = forwardRef<HTMLDivElement, HtmlDivProps>(
  function PeelBottom({ className = "", ...props }, ref) {
    return (
      <div ref={ref} className={"peel-bottom " + className} {...props}></div>
    );
  }
);

PeelBottom.displayName = "PeelBottom";
