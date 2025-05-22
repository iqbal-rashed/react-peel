import React, { forwardRef, useEffect, useRef } from "react";
import PeelLib, { PeelCorners } from "./peel";
import { HtmlDivProps, PeelOptions, Props, TCoords } from "./types";

export const PeelWrapper = forwardRef(Peel);

function Peel(
  { children, options = {}, containerProps, ...props }: Props,
  refer: any
) {
  const ref = useRef<HTMLDivElement>(null);
  const peelRef = useRef<any>(null);

  useInitializeCss();

  useEffect(() => {
    function initialize() {
      if (!ref.current) return;
      const PeelJs = PeelLib();
      const p = new PeelJs(ref.current, normalizeOptions(options));
      peelRef.current = p;

      if (refer) {
        refer.current = p;
      }

      if (props.peelPosition) {
        peelRef.current.setPeelPosition(
          props.peelPosition.x,
          props.peelPosition.y
        );
      }

      if (props.corner) {
        if (
          Object.prototype.hasOwnProperty.call(props.corner, "x") &&
          Object.prototype.hasOwnProperty.call(props.corner, "y")
        ) {
          const { x, y } = props.corner as TCoords;
          peelRef.current.setCorner(x, y);
        } else if (isPeelCorners(props.corner)) {
          peelRef.current.setCorner(peelCornersValue(props.corner));
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

      if (props.mode) {
        peelRef.current.setMode(props.mode);
      }

      if (props.fadeThreshold) {
        peelRef.current.setFadeThreshold(props.fadeThreshold);
      }

      if (props.peelPath && Array.isArray(props.peelPath)) {
        peelRef.current.setPeelPath(...props.peelPath);
      }

      if (props.drag) {
        peelRef.current?.handleDrag(function (
          _evt: MouseEvent,
          x: number,
          y: number
        ) {
          peelRef.current.setPeelPosition(x, y);
        });
      }
      if (props.handleDrag) {
        peelRef.current?.handleDrag((evt: MouseEvent, x: number, y: number) =>
          props.handleDrag?.(evt, x, y, peelRef.current)
        );
      }
      if (props.handlePress) {
        peelRef.current?.handlePress((evt: MouseEvent) =>
          props.handlePress?.(evt, peelRef.current)
        );
      }
    }

    initialize();
    return () => {
      if (peelRef.current) {
        peelRef.current.clear();
      }
    };
  }, [options]);

  useEffect(() => {
    if (props.timeAlongPath) {
      peelRef.current?.setTimeAlongPath(props.timeAlongPath);
    }
  }, [props.timeAlongPath]);

  useEffect(() => {
    if (props.peelPosition) {
      peelRef.current.setPeelPosition(
        props.peelPosition.x,
        props.peelPosition.y
      );
    }
  }, [props.peelPosition]);

  useEffect(() => {
    if (props.corner) {
      if (
        Object.prototype.hasOwnProperty.call(props.corner, "x") &&
        Object.prototype.hasOwnProperty.call(props.corner, "y")
      ) {
        const { x, y } = props.corner as TCoords;
        peelRef.current.setCorner(x, y);
      } else if (isPeelCorners(props.corner)) {
        peelRef.current.setCorner(peelCornersValue(props.corner));
      }
    }
  }, [props.corner]);

  useEffect(() => {
    if (props.peelPath && Array.isArray(props.peelPath)) {
      peelRef.current.setPeelPath(...props.peelPath);
    }
  }, [props.peelPath]);

  useEffect(() => {
    if (props.mode) {
      peelRef.current.setMode(props.mode);
    }
  }, [props.mode]);

  useEffect(() => {
    if (props.fadeThreshold) {
      peelRef.current.setFadeThreshold(props.fadeThreshold);
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
      peelRef.current.addPeelConstraint(peelCornersValue(cons));
    } else if (
      Object.prototype.hasOwnProperty.call(cons, "x") &&
      Object.prototype.hasOwnProperty.call(cons, "y")
    ) {
      const t = cons as TCoords;
      peelRef.current.addPeelConstraint(t.x, t.y);
    }
  }

  return (
    <div
      ref={ref}
      className={"peel " + props?.className}
      {...containerProps}
      style={{
        height: props.height || "100%",
        width: props.width || "100%",
        ...containerProps?.style,
      }}
    >
      {children}
    </div>
  );
}

function normalizeOptions(options: PeelOptions) {
  if (options.corner) {
    options.corner = isPeelCorners(options.corner)
      ? peelCornersValue(options.corner)
      : undefined;
  }

  return options;
}

function isPeelCorners(value: any) {
  return Object.keys(PeelCorners).includes(value);
}

function peelCornersValue(value: any) {
  const pValue = PeelCorners[value as keyof typeof PeelCorners];
  return pValue as any;
}

PeelWrapper.displayName = "PeelWrapper";

const useInitializeCss = () => {
  useEffect(() => {
    const styleDoc = document.createElement("style");
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
      document.head.removeChild(styleDoc);
    };
  }, []);
};

export const PeelTop = forwardRef(function (
  { className, ...props }: HtmlDivProps,
  ref: React.Ref<HTMLDivElement>
) {
  return <div ref={ref} className={"peel-top " + className} {...props}></div>;
});

PeelTop.displayName = "PeelTop";

export const PeelBack = forwardRef(function (
  { className, ...props }: HtmlDivProps,
  ref: React.Ref<HTMLDivElement>
) {
  return <div ref={ref} className={"peel-back " + className} {...props}></div>;
});

PeelBack.displayName = "PeelBack";

export const PeelBottom = forwardRef(function (
  { className, ...props }: HtmlDivProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={"peel-bottom " + className} {...props}></div>
  );
});

PeelBottom.displayName = "PeelBottom";
