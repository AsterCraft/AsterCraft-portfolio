import { motion } from "motion/react";

const LightDivider = () => {
  return (
    <motion.hr
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0, 0.1, 0.4, 1] }}
      className="mt-0 mb-10 text-gray-500"
    />
  );
};

export default LightDivider;
