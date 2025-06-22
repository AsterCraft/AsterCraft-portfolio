import { useState } from "react";

import IconBurger from "../IconBurger/IconBurger";

const BurgerDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className="relative" onClick={() => setIsOpen((prev) => !prev)}>
      <IconBurger isOpen={isOpen} />

      {isOpen && (
        <ul className="absolute top-12 right-[-7px] rounded-md bg-black pt-5 pr-5 pb-5 pl-5 text-2xl">
          <li className="flex justify-start whitespace-nowrap">About me</li>
          <li className="flex justify-start whitespace-nowrap">Projects</li>
          <li className="flex justify-start whitespace-nowrap">Services</li>
          <li className="flex justify-start whitespace-nowrap">Contact</li>
        </ul>
      )}
    </button>
  );
};

export default BurgerDropdownMenu;
