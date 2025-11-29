import { useState, useEffect, type RefObject } from "react";

interface IActionsParam {
    onSeen: () => void;
    onAfterSeen: () => void;
}

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