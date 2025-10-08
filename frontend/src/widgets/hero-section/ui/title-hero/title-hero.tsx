import { motion } from "motion/react";

import s from "./title-hero.module.scss";

export const TitleHero = () => {
  return (
    <h1 className={s.title}>
      <motion.span
        initial={{ x: "-400px" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: [0, 0.1, 0.4, 1] }}
        className="block"
      >
        Розробка сайтів
      </motion.span>
      <motion.span
        initial={{ x: "-300px" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0, 0.1, 0.4, 1] }}
        className="block pl-10 lg:pl-30"
      >
        під ключ
      </motion.span>
    </h1>
  );
};
