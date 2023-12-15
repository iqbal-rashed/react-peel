import { MutableRefObject, ReactNode, SVGProps } from "react";
import { PeelCorners } from "./peel";

export interface PeelOptions {
  topShadow?: boolean;
  topShadowBlur?: number;
  topShadowAlpha?: number;
  topShadowOffsetX?: number;
  topShadowOffsetY?: number;
  topShadowCreatesShape?: boolean;

  backReflection?: boolean;
  backReflectionSize?: number;
  backReflectionOffset?: number;
  backReflectionAlpha?: number;
  backReflectionDistribute?: boolean;

  backShadow?: boolean;
  backShadowSize?: number;
  backShadowOffset?: number;
  backShadowAlpha?: number;
  backShadowDistribute?: boolean;
  corner?: keyof typeof PeelCorners;
  bottomShadow?: boolean;
  bottomShadowSize?: number;
  bottomShadowOffset?: number;
  bottomShadowDarkAlpha?: number;
  bottomShadowLightAlpha?: number;
  bottomShadowDistribute?: boolean;
  mode?: "book" | "calendar";
  setPeelOnInit?: boolean;
  clippingBoxScale?: number;
  flipConstraintOffset?: number;
  dragPreventsDefault?: boolean;
  shape?: SvgElementProps;
}

export type TCoords = { x: number; y: number };

export type HtmlDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type CircleProps = {
  cx: number;
  cy: number;
  r: number;
} & {
  [key: string]: any;
};
type PathProps = {
  d: string;
} & {
  [key: string]: any;
};

type RectProps = {
  x: number;
  y: number;
  width: number;
  height: number;
} & {
  [key: string]: any;
};

type PolygonProps = {
  points: string;
} & {
  [key: string]: any;
};

type SvgElementProps = {
  circle?: CircleProps;
  path?: PathProps;
  rect?: RectProps;
  polygon?: PolygonProps;
};

export type Props = {
  ref?: MutableRefObject<any>;
  className?: string;
  height?: string | number;
  width?: string | number;
  children?: ReactNode;
  options?: PeelOptions;
  peelPosition?: TCoords;
  corner?: TCoords | keyof typeof PeelCorners;
  constraints?:
    | TCoords
    | keyof typeof PeelCorners
    | Array<TCoords | keyof typeof PeelCorners>;
  timeAlongPath?: number;
  drag?: boolean;
  handleDrag?: (event: MouseEvent, x: number, y: number, peel: any) => any;
  handlePress?: (event: MouseEvent, peel: any) => any;
  mode?: "book" | "calendar";
  fadeThreshold?: number;
  peelPath?: number[];
  containerProps?: Omit<HtmlDivProps, "ref" | "className">;
};
