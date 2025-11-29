import { useState, useEffect, type RefObject } from "react";

interface IActionsParam {
    onSeen: () => void;
    onAfterSeen: () => void;
}
/**
 * useInViewAction
 * 
 * Watches an element and detects when it enters/exits the viewport.
 * Triggers callback functions when visibility changes.
 * 
 * @param ref - React ref attached to the element to observe
 * @param actions - Object with callback functions:
 *                  onSeen: () => void - Called when element enters viewport
 *                  onAfterSeen: () => void - Called when element exits viewport
 * @param threshold - How much of element must be visible (0-1). Default: 0.4
 *                    0 = any pixel visible, 1 = fully visible, 0.5 = 50% visible
 * 
 * @returns boolean - true when element is visible, false when hidden
 * 
 * @example
 * const ref = useRef(null);
 * const isVisible = useInViewAction(ref, {
 *   onSeen: () => console.log("Element is visible!"),
 *   onAfterSeen: () => console.log("Element is hidden!")
 * }, 0.5);
 * 
 * return <div ref={ref}>Content here</div>;
 */
export default function useInViewAction(
    ref: RefObject<HTMLElement>, 
    actions: IActionsParam, 
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
                        setSeen(true);
                        actions.onSeen();
                    } else {
                        setSeen(false);
                        actions.onAfterSeen();
                    }
                });
            },
            {
                root: null,
                threshold: threshold
            }
        );

        observer.observe(element);

        // Cleanup function
        return () => {
            observer.disconnect();
        };
    }, [ref, actions, threshold]);

    return seen;
}