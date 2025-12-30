import { PeelOptions } from './types';

/**
 * Preset configuration for common peel effects
 */
export interface PeelPreset {
    /** Display name of the preset */
    name: string;
    /** Description of the effect */
    description: string;
    /** Peel options to apply */
    options: Partial<PeelOptions>;
    /** Default corner position */
    corner?: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';
    /** Constraints for the peel effect */
    constraints?: Array<'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT'>;
    /** Preset mode */
    mode?: 'book' | 'calendar';
}

/**
 * Sticky note effect - small corner curl from bottom-right
 * Perfect for: Post-it notes, reminders, notification hints
 */
export const stickyNote: PeelPreset = {
    name: 'Sticky Note',
    description: 'Small corner curl effect like a sticky note',
    options: {
        topShadow: true,
        topShadowBlur: 3,
        topShadowAlpha: 0.3,
        backShadow: true,
        backShadowSize: 0.08,
        backShadowAlpha: 0.15,
        bottomShadow: true,
        bottomShadowSize: 0.8,
        bottomShadowDarkAlpha: 0.4,
        bottomShadowLightAlpha: 0.1,
    },
    corner: 'BOTTOM_RIGHT',
};

/**
 * Page flip effect - book-like page turning
 * Perfect for: E-books, magazines, catalogs
 */
export const pageFlip: PeelPreset = {
    name: 'Page Flip',
    description: 'Book-like page turn with spine constraint',
    options: {
        topShadow: true,
        topShadowAlpha: 0.4,
        backReflection: false,
        backShadow: true,
        backShadowSize: 0.06,
        backShadowDistribute: false,
        bottomShadow: true,
        bottomShadowDistribute: false,
    },
    corner: 'BOTTOM_RIGHT',
    mode: 'book',
};

/**
 * Reveal card effect - scratch-off style reveal
 * Perfect for: Lottery tickets, hidden discounts, mystery reveals
 */
export const revealCard: PeelPreset = {
    name: 'Reveal Card',
    description: 'Scratch-off style reveal animation',
    options: {
        topShadow: true,
        topShadowBlur: 8,
        topShadowAlpha: 0.6,
        backReflection: true,
        backReflectionAlpha: 0.2,
        backShadow: true,
        backShadowSize: 0.1,
        bottomShadow: true,
        bottomShadowDarkAlpha: 0.8,
    },
    corner: 'BOTTOM_RIGHT',
};

/**
 * Calendar flip effect - top-edge constrained flip
 * Perfect for: Calendar widgets, date pickers, flip clocks
 */
export const calendar: PeelPreset = {
    name: 'Calendar',
    description: 'Top-edge constrained calendar flip',
    options: {
        topShadow: true,
        topShadowAlpha: 0.5,
        backShadow: true,
        backShadowSize: 0.05,
        bottomShadow: true,
        bottomShadowDistribute: true,
    },
    corner: 'BOTTOM_RIGHT',
    mode: 'calendar',
};

/**
 * Envelope effect - triangle flap peel
 * Perfect for: Email interfaces, invitation cards, letter reveals
 */
export const envelope: PeelPreset = {
    name: 'Envelope',
    description: 'Envelope flap opening animation',
    options: {
        topShadow: true,
        topShadowBlur: 4,
        topShadowAlpha: 0.35,
        backReflection: false,
        backShadow: true,
        backShadowSize: 0.04,
        bottomShadow: true,
        bottomShadowDarkAlpha: 0.3,
    },
    corner: 'TOP_RIGHT',
    constraints: ['TOP_LEFT'],
};

/**
 * Gift card effect - dramatic reveal with reflection
 * Perfect for: Gift cards, promo codes, special offers
 */
export const giftCard: PeelPreset = {
    name: 'Gift Card',
    description: 'Dramatic reveal with shiny reflection',
    options: {
        topShadow: true,
        topShadowBlur: 6,
        topShadowAlpha: 0.5,
        backReflection: true,
        backReflectionAlpha: 0.35,
        backReflectionSize: 0.04,
        backShadow: true,
        backShadowSize: 0.08,
        bottomShadow: true,
        bottomShadowDarkAlpha: 0.7,
        bottomShadowLightAlpha: 0.15,
    },
    corner: 'BOTTOM_RIGHT',
};

/**
 * Photo album effect - smooth page turn for images
 * Perfect for: Photo galleries, portfolios, lookbooks
 */
export const photoAlbum: PeelPreset = {
    name: 'Photo Album',
    description: 'Smooth page turn for photo galleries',
    options: {
        topShadow: true,
        topShadowBlur: 5,
        topShadowAlpha: 0.45,
        backReflection: true,
        backReflectionAlpha: 0.1,
        backShadow: true,
        backShadowSize: 0.05,
        backShadowDistribute: false,
        bottomShadow: true,
        bottomShadowDistribute: false,
    },
    corner: 'BOTTOM_RIGHT',
    mode: 'book',
};

/**
 * Scratch card effect - lottery ticket style
 * Perfect for: Games, contests, interactive promotions
 */
export const scratchCard: PeelPreset = {
    name: 'Scratch Card',
    description: 'Lottery ticket scratch-off effect',
    options: {
        topShadow: true,
        topShadowBlur: 2,
        topShadowAlpha: 0.4,
        backReflection: true,
        backReflectionAlpha: 0.25,
        backReflectionSize: 0.03,
        backShadow: true,
        backShadowSize: 0.06,
        bottomShadow: true,
        bottomShadowDarkAlpha: 0.6,
    },
    corner: 'BOTTOM_RIGHT',
};

/**
 * All available presets
 */
export const presets = {
    stickyNote,
    pageFlip,
    revealCard,
    calendar,
    envelope,
    giftCard,
    photoAlbum,
    scratchCard,
} as const;

export type PresetName = keyof typeof presets;

/**
 * Get a preset by name
 * @param name - The name of the preset
 * @returns The preset configuration
 */
export function getPreset(name: PresetName): PeelPreset {
    return presets[name];
}

/**
 * Get preset options merged with custom options
 * @param name - The name of the preset
 * @param customOptions - Custom options to merge
 * @returns Merged options
 */
export function getPresetOptions(
    name: PresetName,
    customOptions?: Partial<PeelOptions>
): Partial<PeelOptions> {
    const preset = getPreset(name);
    return { ...preset.options, ...customOptions };
}

export default presets;
