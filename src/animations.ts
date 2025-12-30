/**
 * Animation utilities for peel effects
 */

/**
 * Easing function type
 */
export type EasingFunction = (t: number) => number;

/**
 * Built-in easing functions
 */
export const easings = {
    /** Linear interpolation - no easing */
    linear: (t: number): number => t,

    /** Ease in - slow start */
    easeIn: (t: number): number => t * t * t,

    /** Ease out - slow end */
    easeOut: (t: number): number => 1 - Math.pow(1 - t, 3),

    /** Ease in and out - slow start and end */
    easeInOut: (t: number): number =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,

    /** Quadratic ease in */
    easeInQuad: (t: number): number => t * t,

    /** Quadratic ease out */
    easeOutQuad: (t: number): number => t * (2 - t),

    /** Quadratic ease in and out */
    easeInOutQuad: (t: number): number =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,

    /** Exponential ease in */
    easeInExpo: (t: number): number =>
        t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),

    /** Exponential ease out */
    easeOutExpo: (t: number): number =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t),

    /** Elastic ease out - spring-like bounce */
    spring: (t: number): number => {
        const c4 = (2 * Math.PI) / 3;
        return t === 0
            ? 0
            : t === 1
                ? 1
                : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    },

    /** Bounce ease out */
    bounce: (t: number): number => {
        const n1 = 7.5625;
        const d1 = 2.75;
        if (t < 1 / d1) {
            return n1 * t * t;
        } else if (t < 2 / d1) {
            return n1 * (t -= 1.5 / d1) * t + 0.75;
        } else if (t < 2.5 / d1) {
            return n1 * (t -= 2.25 / d1) * t + 0.9375;
        } else {
            return n1 * (t -= 2.625 / d1) * t + 0.984375;
        }
    },

    /** Back ease out - slight overshoot */
    backOut: (t: number): number => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    },
} as const;

export type EasingName = keyof typeof easings;

/**
 * Options for the animate function
 */
export interface AnimateOptions {
    /** Starting value */
    from: number;
    /** Ending value */
    to: number;
    /** Duration in milliseconds */
    duration: number;
    /** Easing function or name */
    easing?: EasingName | EasingFunction;
    /** Callback for each frame with current value */
    onUpdate: (value: number) => void;
    /** Callback when animation completes */
    onComplete?: () => void;
}

/**
 * Animation controller returned by animate()
 */
export interface AnimationController {
    /** Stop the animation */
    stop: () => void;
    /** Check if animation is running */
    isRunning: () => boolean;
    /** Promise that resolves when animation completes */
    finished: Promise<void>;
}

/**
 * Animate a value from start to end with easing
 *
 * @param options - Animation options
 * @returns Animation controller
 *
 * @example
 * ```ts
 * const { stop, finished } = animate({
 *   from: 0,
 *   to: 100,
 *   duration: 500,
 *   easing: 'easeOut',
 *   onUpdate: (value) => console.log(value)
 * });
 *
 * // Stop early if needed
 * stop();
 *
 * // Wait for completion
 * await finished;
 * ```
 */
export function animate(options: AnimateOptions): AnimationController {
    const { from, to, duration, easing = 'easeOut', onUpdate, onComplete } = options;

    const easingFn = typeof easing === 'function' ? easing : easings[easing];
    let animationId: number | null = null;
    let running = true;
    const startTime = performance.now();

    let resolvePromise: () => void;
    const finished = new Promise<void>((resolve) => {
        resolvePromise = resolve;
    });

    const step = (currentTime: number) => {
        if (!running) return;

        const elapsed = currentTime - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFn(rawProgress);
        const value = from + (to - from) * easedProgress;

        onUpdate(value);

        if (rawProgress < 1) {
            animationId = requestAnimationFrame(step);
        } else {
            running = false;
            onComplete?.();
            resolvePromise();
        }
    };

    animationId = requestAnimationFrame(step);

    return {
        stop: () => {
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            running = false;
            resolvePromise();
        },
        isRunning: () => running,
        finished,
    };
}

/**
 * Options for peel position animation
 */
export interface AnimatePeelPositionOptions {
    /** Peel instance */
    peel: any;
    /** Starting position */
    from: { x: number; y: number };
    /** Ending position */
    to: { x: number; y: number };
    /** Duration in milliseconds */
    duration?: number;
    /** Easing function or name */
    easing?: EasingName | EasingFunction;
    /** Callback when animation completes */
    onComplete?: () => void;
    /** Callback for progress updates (0-1) */
    onProgress?: (progress: number) => void;
}

/**
 * Animate peel position from one point to another
 *
 * @param options - Animation options
 * @returns Animation controller
 */
export function animatePeelPosition(
    options: AnimatePeelPositionOptions
): AnimationController {
    const {
        peel,
        from,
        to,
        duration = 500,
        easing = 'easeOut',
        onComplete,
        onProgress,
    } = options;

    const easingFn = typeof easing === 'function' ? easing : easings[easing];
    let animationId: number | null = null;
    let running = true;
    const startTime = performance.now();

    let resolvePromise: () => void;
    const finished = new Promise<void>((resolve) => {
        resolvePromise = resolve;
    });

    const step = (currentTime: number) => {
        if (!running) return;

        const elapsed = currentTime - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFn(rawProgress);

        const x = from.x + (to.x - from.x) * easedProgress;
        const y = from.y + (to.y - from.y) * easedProgress;

        peel.setPeelPosition(x, y);
        onProgress?.(rawProgress);

        if (rawProgress < 1) {
            animationId = requestAnimationFrame(step);
        } else {
            running = false;
            onComplete?.();
            resolvePromise();
        }
    };

    animationId = requestAnimationFrame(step);

    return {
        stop: () => {
            if (animationId !== null) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            running = false;
            resolvePromise();
        },
        isRunning: () => running,
        finished,
    };
}

/**
 * Options for looping peel animation
 */
export interface LoopPeelOptions {
    /** Peel instance */
    peel: any;
    /** Path points to animate along [x1, y1, x2, y2] or bezier [x1, y1, cx1, cy1, cx2, cy2, x2, y2] */
    path: number[];
    /** Duration of one loop in milliseconds */
    duration?: number;
    /** Easing function or name */
    easing?: EasingName | EasingFunction;
    /** Whether to reverse on each iteration (ping-pong) */
    pingPong?: boolean;
    /** Delay between loops in milliseconds */
    delay?: number;
}

/**
 * Create a looping peel animation along a path
 *
 * @param options - Loop options
 * @returns Stop function to cancel the loop
 */
export function loopPeel(options: LoopPeelOptions): () => void {
    const {
        peel,
        path,
        duration = 1000,
        easing = 'easeInOut',
        pingPong = true,
        delay = 0,
    } = options;

    // Set up the path on the peel instance
    peel.setPeelPath(...path);

    let running = true;
    let direction = 1;
    let currentController: AnimationController | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const runLoop = () => {
        if (!running) return;

        const from = direction === 1 ? 0 : 1;
        const to = direction === 1 ? 1 : 0;

        currentController = animate({
            from,
            to,
            duration,
            easing,
            onUpdate: (t) => {
                peel.setTimeAlongPath(t);
            },
            onComplete: () => {
                if (!running) return;
                if (pingPong) {
                    direction *= -1;
                }
                if (delay > 0) {
                    timeoutId = setTimeout(runLoop, delay);
                } else {
                    runLoop();
                }
            },
        });
    };

    runLoop();

    return () => {
        running = false;
        currentController?.stop();
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
    };
}

/**
 * Create a hint animation to draw attention to the peel corner
 *
 * @param peel - Peel instance
 * @param options - Optional configuration
 * @returns Promise that resolves when animation completes
 */
export async function peelHint(
    peel: any,
    options: {
        /** Size of the hint peek in pixels */
        peekSize?: number;
        /** Duration of the animation in milliseconds */
        duration?: number;
        /** Number of times to repeat */
        repeat?: number;
    } = {}
): Promise<void> {
    const { peekSize = 30, duration = 300, repeat = 2 } = options;

    const corner = peel.corner;
    if (!corner) return;

    // Calculate peek position
    const peekX = corner.x > peel.width / 2 ? corner.x - peekSize : corner.x + peekSize;
    const peekY = corner.y > peel.height / 2 ? corner.y - peekSize : corner.y + peekSize;

    for (let i = 0; i < repeat; i++) {
        // Peek out
        await animatePeelPosition({
            peel,
            from: corner,
            to: { x: peekX, y: peekY },
            duration: duration / 2,
            easing: 'easeOut',
        }).finished;

        // Return to corner
        await animatePeelPosition({
            peel,
            from: { x: peekX, y: peekY },
            to: corner,
            duration: duration / 2,
            easing: 'easeIn',
        }).finished;

        // Small delay between repeats
        if (i < repeat - 1) {
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }
}

export default {
    easings,
    animate,
    animatePeelPosition,
    loopPeel,
    peelHint,
};
