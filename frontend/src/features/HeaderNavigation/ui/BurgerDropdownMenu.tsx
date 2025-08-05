import { motion, AnimatePresence } from "motion/react";

import { useHeaderModalStore } from "../model/store";

const BurgerDropdownMenu = () => {
  const { toggle, isOpen } = useHeaderModalStore();

  return (
    <div
      onClick={toggle}
      className="relative"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute top-6 right-[-7px] z-0 rounded-md bg-black pt-5 pr-5 pb-5 pl-5 text-2xl sm:hidden"
            initial={{ opacity: 0.5, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: -70, x: 35 }}
          >
            <li className="flex justify-start whitespace-nowrap">About us</li>
            <li className="flex justify-start whitespace-nowrap">Projects</li>
            <li className="flex justify-start whitespace-nowrap">Services</li>
            <li className="flex justify-start whitespace-nowrap">Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerDropdownMenu;
