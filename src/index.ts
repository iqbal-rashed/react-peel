// Main components
export { PeelWrapper, PeelTop, PeelBack, PeelBottom } from "./ReactPeel";

// Hooks
export { usePeel } from "./usePeel";
export type { UsePeelReturn, AnimatePeelOptions } from "./usePeel";

// Presets
export {
    presets,
    getPreset,
    getPresetOptions,
    stickyNote,
    pageFlip,
    revealCard,
    calendar,
    envelope,
    giftCard,
    photoAlbum,
    scratchCard,
} from "./presets";
export type { PeelPreset, PresetName } from "./presets";

// Animations
export {
    easings,
    animate,
    animatePeelPosition,
    loopPeel,
    peelHint,
} from "./animations";
export type {
    EasingFunction,
    EasingName,
    AnimateOptions,
    AnimationController,
    AnimatePeelPositionOptions,
    LoopPeelOptions,
} from "./animations";

// Types
export type {
    PeelOptions,
    Props as PeelWrapperProps,
    TCoords,
    CornerName,
    CornerValue,
    ConstraintValue,
    PeelRef,
    PeelLayerProps,
    HtmlDivProps,
    SvgElementProps,
    CircleProps,
    PathProps,
    RectProps,
    PolygonProps,
    TopShadowOptions,
    BackReflectionOptions,
    BackShadowOptions,
    BottomShadowOptions,
    PeelPositionCallback,
    PeelProgressCallback,
} from "./types";

// Re-export PeelCorners for convenience
export { PeelCorners } from "./peel";
