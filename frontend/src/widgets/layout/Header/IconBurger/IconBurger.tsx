import { useEffect, useRef } from "react";
import { animate } from "motion";

type Props = {
  isOpen: boolean;
};

const IconBurger = ({ isOpen }: Props) => {
  const top = useRef<HTMLSpanElement>(null);
  const middle = useRef<HTMLSpanElement>(null);
  const bottom = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!top.current || !middle.current || !bottom.current) return;

    if (isOpen) {
      // Animate back to burger
      animate(top.current, { rotate: 0, y: 0 });
      animate(middle.current, { opacity: 1 });
      animate(bottom.current, { rotate: 0, y: 0 });
    } else {
      // animate to X
      animate(top.current, { rotate: 45, y: 12 });
      animate(middle.current, { opacity: 0 });
      animate(bottom.current, { rotate: -45, y: -7 });
    }
  }, [isOpen]);

  return (
    <button style={{ width: 30, height: 24, position: "relative", left: -30 }}>
      <span
        ref={top}
        style={barStyle}
      />
      <span
        ref={middle}
        style={{ ...barStyle, top: 10 }}
      />
      <span
        ref={bottom}
        style={{ ...barStyle, top: 20 }}
      />
    </button>
  );
};

const barStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: 3,
  background: "white",
  borderRadius: 2,
  top: 0,
};

export default IconBurger;
