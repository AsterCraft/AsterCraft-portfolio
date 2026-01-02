import { useState, useRef, useEffect, type RefObject } from "react";

type AnimationState = "open" | "closing" | "closed";

interface UseUnmountAnimationReturn {
  animationState: AnimationState;
  handleClose: () => void;
  elementRef: RefObject<HTMLElement | null>;
}

const useUnmountAnimation = (
  isOpen: boolean,
  onClose: () => void,
  onAfterClose?: () => void
): UseUnmountAnimationReturn => {
  const [animationState, setAnimationState] = useState<AnimationState>(() =>
    isOpen ? "open" : "closed"
  );

  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen && animationState === "closed") {
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

    const onTransitionEnd = (e: TransitionEvent) => {
      // might need better logic to track all of  the transitions on the element
      // and close after all are finished (if element will have multiple transitions)
      if (e.target !== el) return;

      if (animationState === "closing") {
        setAnimationState("closed");
        onClose();
        onAfterClose?.();
      }
    };

    el.addEventListener("transitionend", onTransitionEnd);

    return () => {
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
