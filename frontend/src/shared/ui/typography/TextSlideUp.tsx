import { useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import cn from "classnames";

interface TextSlideUpProps {
  text: string;
  as: "h2" | "p";

  // css
  lineHeight?: string;
  className?: string;
}

export const TextSlideUp = ({
  text,
  as: Component, // rename for Component for React jsx syntax
  lineHeight,
  className,
}: TextSlideUpProps) => {
  const [textRef, animate] = useAnimate();
  const inView: boolean = useInView(textRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!textRef.current) return;

    if (inView) {
      animate(textRef.current, { opacity: 1, y: 0 }, { duration: 0.6 });
    } else {
      // set initial element state
      // from which animation will be played
      animate(textRef.current, { opacity: 0, y: 24 }, { duration: 0 });
    }
  }, [inView, animate]);

  let styles;
  if (Component === "h2") {
    styles = cn(
      lineHeight || "leading-snug",
      "text-[clamp(1.5rem,5.5vw+0.25rem,1.75rem)]",
      "sm:text-[clamp(1.75rem,3.5vw+0.25rem,2.25rem)]",
      "lg:text-[clamp(2.25rem,2.5vw+0.25rem,2.75rem)]",
      className
    );
  } else if (Component === "p") {
    styles = cn("text-lg text-zinc-600", className);
  }

  return (
    <Component
      ref={textRef}
      className={styles}
    >
      {text}
    </Component>
  );
};
