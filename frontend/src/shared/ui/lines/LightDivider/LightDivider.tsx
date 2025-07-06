import classNames from "classnames";
import { motion } from "motion/react";

type LightDividerProps = {
  className?: string;
};

const LightDivider = ({ className }: LightDividerProps) => {
  return (
    <motion.hr
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0, 0.1, 0.4, 1] }}
      className={classNames("mt-0 mb-10 text-gray-500", className)}
    />
  );
};

export default LightDivider;
