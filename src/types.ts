import { RefObject, ReactNode } from "react";
import { PeelCorners } from "./peel";
import { PresetName } from "./presets";

/**
 * Shadow options for the top layer
 */
export interface TopShadowOptions {
  topShadow?: boolean;
  topShadowBlur?: number;
  topShadowAlpha?: number;
  topShadowOffsetX?: number;
  topShadowOffsetY?: number;
  topShadowCreatesShape?: boolean;
}

/**
 * Reflection options for the back layer
 */
export interface BackReflectionOptions {
  backReflection?: boolean;
  backReflectionSize?: number;
  backReflectionOffset?: number;
  backReflectionAlpha?: number;
  backReflectionDistribute?: boolean;
}

/**
 * Shadow options for the back layer
 */
export interface BackShadowOptions {
  backShadow?: boolean;
  backShadowSize?: number;
  backShadowOffset?: number;
  backShadowAlpha?: number;
  backShadowDistribute?: boolean;
}

/**
 * Shadow options for the bottom layer
 */
export interface BottomShadowOptions {
  bottomShadow?: boolean;
  bottomShadowSize?: number;
  bottomShadowOffset?: number;
  bottomShadowDarkAlpha?: number;
  bottomShadowLightAlpha?: number;
  bottomShadowDistribute?: boolean;
}

/**
 * Circle shape properties for SVG clipping
 */
export interface CircleProps {
  cx: number;
  cy: number;
  r: number;
  [key: string]: any;
}

/**
 * Path shape properties for SVG clipping
 */
export interface PathProps {
  d: string;
  [key: string]: any;
}

/**
 * Rectangle shape properties for SVG clipping
 */
export interface RectProps {
  x: number;
  y: number;
  width: number;
  height: number;
  [key: string]: any;
}

/**
 * Polygon shape properties for SVG clipping
 */
export interface PolygonProps {
  points: string;
  [key: string]: any;
}

/**
 * SVG element properties for custom shapes
 */
export interface SvgElementProps {
  circle?: CircleProps;
  path?: PathProps;
  rect?: RectProps;
  polygon?: PolygonProps;
}

/**
 * Options passed to the underlying peel.js constructor
 */
export interface PeelOptions
  extends TopShadowOptions,
  BackReflectionOptions,
  BackShadowOptions,
  BottomShadowOptions {
  /** Initial corner for the peel effect */
  corner?: keyof typeof PeelCorners;
  /** Predefined peel mode */
  mode?: "book" | "calendar";
  /** Whether to set peel position on initialization */
  setPeelOnInit?: boolean;
  /** Scale of the clipping box */
  clippingBoxScale?: number;
  /** Offset for flip constraint */
  flipConstraintOffset?: number;
  /** Whether dragging prevents default browser behavior */
  dragPreventsDefault?: boolean;
  /** Custom SVG shape for clipping */
  shape?: SvgElementProps;
}

/**
 * Coordinate type for x,y positions
 */
export type TCoords = { x: number; y: number };

/**
 * Corner name type
 */
export type CornerName = keyof typeof PeelCorners;

/**
 * Corner value - either coordinates or corner name
 */
export type CornerValue = TCoords | CornerName;

/**
 * Constraint value - coordinates, corner name, or array of both
 */
export type ConstraintValue = CornerValue | Array<CornerValue>;

/**
 * HTML div element props
 */
export type HtmlDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

/**
 * Peel event callback with position
 */
export type PeelPositionCallback = (x: number, y: number, peel: PeelRef) => void;

/**
 * Peel progress callback
 */
export type PeelProgressCallback = (progress: number, peel: PeelRef) => void;

/**
 * Reference to the peel instance with exposed methods
 */
export interface PeelRef {
  /** Set the peel position */
  setPeelPosition: (x: number, y: number) => void;
  /** Set the corner for the peel effect */
  setCorner: (...args: any[]) => void;
  /** Add a constraint */
  addPeelConstraint: (...args: any[]) => void;
  /** Set the peel mode */
  setMode: (mode: "book" | "calendar") => void;
  /** Set the fade threshold */
  setFadeThreshold: (n: number) => void;
  /** Set the peel path */
  setPeelPath: (...args: number[]) => void;
  /** Set time along the path */
  setTimeAlongPath: (t: number) => void;
  /** Get the amount clipped (0-1) */
  getAmountClipped: () => number;
  /** Handle drag events */
  handleDrag: (fn: (evt: MouseEvent, x: number, y: number) => void) => void;
  /** Handle press events */
  handlePress: (fn: (evt: MouseEvent) => void) => void;
  /** Remove all event handlers */
  removeEvents: () => void;
  /** Clear and cleanup */
  clear: () => void;
  /** Width of the peel element */
  width: number;
  /** Height of the peel element */
  height: number;
  /** Current corner position */
  corner: TCoords;
  /** The peel path if set */
  path?: any;
  /** Time along path if set */
  timeAlongPath?: number;
}

/**
 * Props for the PeelWrapper component
 */
export interface Props {
  /** Reference to the Peel instance */
  ref?: RefObject<PeelRef>;
  /** CSS class name for the container */
  className?: string;
  /** Height of the peel container */
  height?: string | number;
  /** Width of the peel container */
  width?: string | number;
  /** Child elements */
  children?: ReactNode;
  /** Peel.js options */
  options?: PeelOptions;
  /** Current peel position */
  peelPosition?: TCoords;
  /** Corner to peel from */
  corner?: CornerValue;
  /** Constraints for the peel effect */
  constraints?: ConstraintValue;
  /** Time along the peel path (0-1) */
  timeAlongPath?: number;
  /** Enable drag interaction */
  drag?: boolean;
  /** Custom drag handler */
  handleDrag?: (event: MouseEvent, x: number, y: number, peel: PeelRef) => void;
  /** Press/click handler */
  handlePress?: (event: MouseEvent, peel: PeelRef) => void;
  /** Peel mode preset */
  mode?: "book" | "calendar";
  /** Threshold for fade out effect (0-1) */
  fadeThreshold?: number;
  /** Path for the peel animation */
  peelPath?: number[];
  /** Additional props for the container div */
  containerProps?: Omit<HtmlDivProps, "ref" | "className">;

  // New props

  /** Preset configuration name */
  preset?: PresetName;
  /** Disable all interactions */
  disabled?: boolean;
  /** Callback when peel starts */
  onPeelStart?: (peel: PeelRef) => void;
  /** Callback when peel ends (reaches constraint or edge) */
  onPeelEnd?: (peel: PeelRef) => void;
  /** Callback during peel with progress (0-1) */
  onPeelProgress?: PeelProgressCallback;
}

/**
 * Props for PeelTop, PeelBack, PeelBottom components
 */
export interface PeelLayerProps extends HtmlDivProps {
  /** Additional CSS class */
  className?: string;
}
