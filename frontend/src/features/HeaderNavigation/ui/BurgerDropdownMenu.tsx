import { motion, AnimatePresence } from "motion/react";

import { useHeaderModalStore } from "../model/store";

const BurgerDropdownMenu = () => {
  const { toggle, isOpen } = useHeaderModalStore();

  const listItemClass =
    "flex cursor-pointer justify-start whitespace-nowrap text-white";

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          // modal wrapper with backdrop blur animation
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          >
            <motion.ul
              className="bg-ac-black-wash fixed top-18 right-3 rounded-md pt-5 pr-5 pb-5 pl-5 text-2xl sm:hidden"
              initial={{ opacity: 0.5, scale: 0, y: -100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: -70, x: 35 }}
            >
              <li
                onClick={toggle}
                className={listItemClass}
              >
                <a href="#about">About us</a>
              </li>
              <li
                onClick={toggle}
                className={listItemClass}
              >
                Projects
              </li>
              <li
                onClick={toggle}
                className={listItemClass}
              >
                Services
              </li>
              <li
                onClick={toggle}
                className={listItemClass}
              >
                Contact
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerDropdownMenu;
