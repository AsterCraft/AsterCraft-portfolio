import { useState, useRef, useEffect, type RefObject } from "react";

/**
 * Tracks the lifecycle of an element during mount/unmount with CSS transitions.
 * - open: element is visible and interactive
 * - closing: exit animation is running
 * - closed: element getting unmounted
 */
type AnimationState = "open" | "closing" | "closed";

/**
 * Return value from useUnmountAnimation hook.
 * @template T - The HTML element type being animated
 */
interface UseUnmountAnimationReturn<T extends HTMLElement = HTMLElement> {
  /** Current animation state. Use this to apply CSS classes for transitions. */
  animationState: AnimationState;
  /** Manually trigger the close animation. */
  handleClose: () => void;
  /** Ref to attach to the animated element. Required for transition tracking. */
  elementRef: RefObject<T | null>;
}

/**
 * Manages unmount animations by keeping elements mounted until CSS transitions finish.
 *
 * @template T - The HTML element type (defaults to HTMLElement)
 * @param isOpen - Controls whether the element should be visible
 * @param onClose - Called when animations complete. Use this to update parent state.
 * @param onAfterClose - Optional cleanup callback after close
 * @returns Object with animationState, handleClose function, and elementRef
 *
 * @example
 * function Modal({ isOpen, onClose }) {
 *   const { animationState, handleClose, elementRef } = useUnmountAnimation(
 *     isOpen,
 *     onClose
 *   );
 *
 *   if (animationState === "closed") return null;
 *
 *   return (
 *    {(animationState !== "closed" || isOpen) && (
 *       <div
 *         ref={elementRef}
 *         className={animationState === "open" ? "modal-enter" : "modal-exit"}
 *      >
 *       <button onClick={handleClose}>Close</button>
 *     </div>
 *    )}
 *    )
 *   );
 * }
 */
const useUnmountAnimation = <T extends HTMLElement = HTMLElement>(
  isOpen: boolean,
  onClose: () => void,
  onAfterClose?: () => void
): UseUnmountAnimationReturn<T> => {
  const [animationState, setAnimationState] =
    useState<AnimationState>("closed");

  const elementRef = useRef<T>(null);
  /** Tracks properties currently transitioning to handle multiple concurrent transitions */
  const pendingTransitionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen && animationState === "closed") {
      // requestAnimationFrame ensures DOM is ready before applying enter styles
      requestAnimationFrame(() => {
        setAnimationState("open");
      });
    } else if (!isOpen && animationState === "open") {
      setAnimationState("closing");
    }
  }, [isOpen, animationState]);

  const handleClose = () => {
    if (animationState === "open") {
      setAnimationState("closing");
    }
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const onTransitionStart = (e: TransitionEvent) => {
      if (!el.contains(e.target as Node)) return;

      pendingTransitionsRef.current.add(e.propertyName);
    };

    const onTransitionEnd = (e: TransitionEvent) => {
      if (!el.contains(e.target as Node)) return;

      pendingTransitionsRef.current.delete(e.propertyName);

      // Wait until all transitions finish before calling onClose
      if (
        pendingTransitionsRef.current.size === 0 &&
        animationState === "closing"
      ) {
        setAnimationState("closed");
        onClose();
        onAfterClose?.();
      }
    };

    el.addEventListener("transitionstart", onTransitionStart);
    el.addEventListener("transitionend", onTransitionEnd);

    return () => {
      el.removeEventListener("transitionstart", onTransitionStart);
      el.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [animationState, onClose, onAfterClose]);

  return {
    animationState,
    handleClose,
    elementRef,
  };
};

export default useUnmountAnimation;
