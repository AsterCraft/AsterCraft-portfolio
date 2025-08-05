import { useEffect, useRef } from "react";
import { animate } from "motion";
import cn from "classnames";

import { useHeaderModalStore } from "../model/store";
import { burgerLineStyle } from "../lib/styles";

const IconBurger = () => {
  const { isOpen, toggle } = useHeaderModalStore();

  const top = useRef<HTMLSpanElement>(null);
  const middle = useRef<HTMLSpanElement>(null);
  const bottom = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!top.current || !middle.current || !bottom.current) return;

    if (isOpen) {
      // animate to X
      animate(top.current, { rotate: 45, y: 12 });
      animate(middle.current, { opacity: 0, width: 0 });
      animate(bottom.current, { rotate: -45, y: -8 });
    } else {
      // Animate back to burger
      animate(top.current, { rotate: 0, y: 0 });
      animate(middle.current, { opacity: 1, width: "100%" });
      animate(bottom.current, { rotate: 0, y: 0 });
    }
  }, [isOpen]);

  return (
    <button
      onClick={toggle}
      className="relative left-[-10px] flex h-6 w-8 justify-center sm:hidden"
    >
      <span
        ref={top}
        className={burgerLineStyle}
      />
      <span
        ref={middle}
        className={cn(burgerLineStyle, "top-2.5")}
      />
      <span
        ref={bottom}
        className={cn(burgerLineStyle, "top-5")}
      />
    </button>
  );
};

export default IconBurger;
