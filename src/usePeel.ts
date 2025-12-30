import { useRef, useCallback, MutableRefObject } from 'react';

/**
 * Animation options for the peel effect
 */
export interface AnimatePeelOptions {
    /** Duration of the animation in milliseconds */
    duration?: number;
    /** Easing function to use */
    easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'spring';
    /** Target peel position */
    to: { x: number; y: number };
    /** Starting peel position (defaults to current position) */
    from?: { x: number; y: number };
    /** Callback when animation starts */
    onStart?: () => void;
    /** Callback when animation ends */
    onEnd?: () => void;
    /** Callback during animation with progress (0-1) */
    onProgress?: (progress: number) => void;
}

/**
 * Return type for the usePeel hook
 */
export interface UsePeelReturn {
    /** Reference to attach to PeelWrapper */
    peelRef: MutableRefObject<any>;
    /** Animate the peel effect */
    animate: (options: AnimatePeelOptions) => Promise<void>;
    /** Reset peel to initial corner position */
    reset: () => void;
    /** Set peel position immediately */
    setPosition: (x: number, y: number) => void;
    /** Get current peel progress (0-1 based on clipped area) */
    getProgress: () => number;
    /** Stop current animation */
    stop: () => void;
    /** Check if peel is currently animating */
    isAnimating: () => boolean;
}

// Easing functions
const easingFunctions = {
    linear: (t: number) => t,
    easeIn: (t: number) => t * t * t,
    easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
    easeInOut: (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    spring: (t: number) => {
        const c4 = (2 * Math.PI) / 3;
        return t === 0
            ? 0
            : t === 1
                ? 1
                : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    },
};

/**
 * Hook for programmatic control of peel effects.
 * Provides methods to animate, reset, and query peel state.
 *
 * @example
 * ```tsx
 * import { PeelWrapper, PeelTop, PeelBack, PeelBottom, usePeel } from 'react-peel';
 *
 * function MyComponent() {
 *   const { peelRef, animate, reset } = usePeel();
 *
 *   const handleReveal = async () => {
 *     await animate({
 *       to: { x: -100, y: -100 },
 *       duration: 800,
 *       easing: 'easeOut'
 *     });
 *   };
 *
 *   return (
 *     <>
 *       <button onClick={handleReveal}>Reveal</button>
 *       <button onClick={reset}>Reset</button>
 *       <PeelWrapper ref={peelRef} height={200} width={200}>
 *         <PeelTop style={{ backgroundColor: '#81afcb' }} />
 *         <PeelBack style={{ backgroundColor: '#a0c7df' }} />
 *         <PeelBottom style={{ backgroundColor: '#688394' }} />
 *       </PeelWrapper>
 *     </>
 *   );
 * }
 * ```
 */
export function usePeel(): UsePeelReturn {
    const peelRef = useRef<any>(null);
    const animationRef = useRef<number | null>(null);
    const isAnimatingRef = useRef(false);

    const stop = useCallback(() => {
        if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
        isAnimatingRef.current = false;
    }, []);

    const animate = useCallback(
        (options: AnimatePeelOptions): Promise<void> => {
            return new Promise((resolve) => {
                const peel = peelRef.current;
                if (!peel) {
                    resolve();
                    return;
                }

                stop();

                const {
                    duration = 500,
                    easing = 'easeOut',
                    to,
                    from,
                    onStart,
                    onEnd,
                    onProgress,
                } = options;

                const startPos = from || {
                    x: peel.corner?.x ?? peel.width,
                    y: peel.corner?.y ?? peel.height,
                };
                const easingFn = easingFunctions[easing] || easingFunctions.linear;
                const startTime = performance.now();

                isAnimatingRef.current = true;
                onStart?.();

                const step = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const rawProgress = Math.min(elapsed / duration, 1);
                    const progress = easingFn(rawProgress);

                    const x = startPos.x + (to.x - startPos.x) * progress;
                    const y = startPos.y + (to.y - startPos.y) * progress;

                    peel.setPeelPosition(x, y);
                    onProgress?.(rawProgress);

                    if (rawProgress < 1) {
                        animationRef.current = requestAnimationFrame(step);
                    } else {
                        isAnimatingRef.current = false;
                        animationRef.current = null;
                        onEnd?.();
                        resolve();
                    }
                };

                animationRef.current = requestAnimationFrame(step);
            });
        },
        [stop]
    );

    const reset = useCallback(() => {
        const peel = peelRef.current;
        if (!peel) return;
        stop();
        const corner = peel.corner;
        if (corner) {
            peel.setPeelPosition(corner.x, corner.y);
        }
    }, [stop]);

    const setPosition = useCallback(
        (x: number, y: number) => {
            const peel = peelRef.current;
            if (!peel) return;
            stop();
            peel.setPeelPosition(x, y);
        },
        [stop]
    );

    const getProgress = useCallback(() => {
        const peel = peelRef.current;
        if (!peel) return 0;
        return peel.getAmountClipped?.() ?? 0;
    }, []);

    const isAnimating = useCallback(() => {
        return isAnimatingRef.current;
    }, []);

    return {
        peelRef,
        animate,
        reset,
        setPosition,
        getProgress,
        stop,
        isAnimating,
    };
}

export default usePeel;
