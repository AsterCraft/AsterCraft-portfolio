import { useState, useEffect, type RefObject } from "react";
/**
 * useInViewAnimation
 * 
 * Automatically applies CSS animation to an element when it scrolls into view.
 * Animation is applied when element enters viewport and removed when it exits.
 * 
 * @param ref - React ref attached to the element you want to animate
 * @param animation - CSS animation shorthand string 
 *                    (e.g., "fadeIn 1s ease-out", "slideUp 0.5s forwards")
 * @param threshold - Percentage of element that must be visible to trigger (0-1)
 *                    Default: 0.4 (40% visible)
 *                    Examples: 0 = any pixel, 0.5 = half visible, 1 = fully visible
 * 
 * @returns boolean - true when element is in viewport, false when out of view
 * 
 * @example
 * const boxRef = useRef(null);
 * const isVisible = useInViewAnimation(boxRef, "fadeIn 1s ease-out", 0.5);
 * 
 * return <div ref={boxRef}>This will fade in on scroll</div>;
 * 
 * @example
 * // With infinite animation
 * const ref = useRef(null);
 * useInViewAnimation(ref, "bounce 2s ease-in-out infinite", 0.3);
 */
export default function useInViewAnimation(
    ref: RefObject<HTMLElement>, 
    animation: string,
    threshold: number = 0.4
) {
    const [seen, setSeen] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        element.style.animation = animation;
                        setSeen(true);
                    } else {
                        element.style.animation = '';
                        setSeen(false);
                    }
                });
            },
            {
                root: null,
                threshold: threshold
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [ref, animation, threshold]);

    return seen;
}