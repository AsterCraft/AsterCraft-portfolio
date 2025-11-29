import { useState, useEffect, type RefObject } from "react";

export default function useInViewAction(
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