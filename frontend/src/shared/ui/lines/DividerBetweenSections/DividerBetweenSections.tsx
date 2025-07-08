import classNames from "classnames";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type DividerBetweenSectionsProps = {
  className?: string;
};

const DividerBetweenSections = ({ className }: DividerBetweenSectionsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  return (
    <motion.hr
      ref={ref}
      className={classNames("border-ac-section-divider", className)}
      initial={{ width: 0, opacity: 0 }}
      animate={
        isInView ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }
      }
      transition={{ duration: 2, ease: [0, 0.1, 0.2, 1] }}
    />
  );
};

export default DividerBetweenSections;
