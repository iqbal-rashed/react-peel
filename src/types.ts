import { MutableRefObject, ReactNode } from "react";
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
  corner?: (typeof PeelCorners)[keyof typeof PeelCorners];
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
}

export type TCoords = { x: number; y: number };

export type HtmlDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type Props = {
  ref?: MutableRefObject<any>;
  className?: string;
  height?: string | number;
  width?: string | number;
  children?: ReactNode;
  options?: PeelOptions;
  peelPosition?: TCoords;
  corner?: TCoords | keyof typeof PeelCorners;
  constraints?: Array<TCoords | (typeof PeelCorners)[keyof typeof PeelCorners]>;
  timeAlongPath?: number;
  drag?: boolean;
  handleDrag?: (event: MouseEvent, x: number, y: number) => any;
  mode?: "book" | "calendar";
  fadeThreshold?: number;
  peelPath?: number[];
  containerProps?: Omit<HtmlDivProps, "ref" | "className">;
};
