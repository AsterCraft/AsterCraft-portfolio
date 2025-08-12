import { motion } from "motion/react";

const HeroTitle = () => {
  return (
    <h1 className="w-fit text-8xl sm:text-8xl lg:text-[10rem]">
      <motion.span
        initial={{ x: "-400px" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: [0, 0.1, 0.4, 1] }}
        className="block"
      >
        Aster
      </motion.span>
      <motion.span
        initial={{ x: "-300px" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0, 0.1, 0.4, 1] }}
        className="block pl-10 lg:pl-30"
      >
        Craft
      </motion.span>
    </h1>
  );
};

export default HeroTitle;
