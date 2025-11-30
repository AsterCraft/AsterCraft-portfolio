import { useEffect, useState, type RefObject } from "react";
interface InViewArgsProps {
  once?: boolean;
}

export default function useInViewState<T extends HTMLElement>(
  ref: RefObject<T>,
  threshold: number = 0.4,
  args?: InViewArgsProps
) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen(true);
          } else if (!args?.once) {
            setSeen(false);
          }
        });
      },
      {
        root: null,
        threshold: threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, args?.once, threshold]);

  return seen;
}