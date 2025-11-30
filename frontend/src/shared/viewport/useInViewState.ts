import { useEffect, useState, type RefObject } from "react";
interface UseInViewOptions {
    once?: boolean
    amount?: number
    initial?: boolean
}
export default function useInView(
   ref: RefObject<Element | null>,
    {
        amount = 0.25,
        once = false,
        initial = false,
    }: UseInViewOptions = {}
) {
  const [seen, setSeen] = useState(initial);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen(true);
          } else if (!once) {
            setSeen(false);
          }
        });
      },
      {
        root: null,
        threshold: amount,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, once, amount]);

  return seen;
}
