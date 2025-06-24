import classNames from "classnames";

import ButtonBuy from "../../../shared/ui/buttons/ButtonBuy/ButtonBuy";
import BurgerDropdownMenu from "./BurgerDropdownMenu/BurgerDropdownMenu";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 text-xl">
      <div
        // Transparent area around black header
        // 2xl: disable all styles
        className={classNames(
          "relative mx-auto max-w-[1450px] rounded-md bg-transparent px-[10px] pt-[10px] backdrop-blur-xs",
          "2xl:backdrop-blur-0 2xl:static 2xl:max-w-none 2xl:rounded-none 2xl:bg-none 2xl:px-0 2xl:pt-0"
        )}
      >
        {/* black header */}
        <div
          className={classNames(
            "flex items-center justify-between rounded-md bg-[#0b0d0d] p-2 text-white",
            "2xl:rounded-none"
          )}
        >
          <ButtonBuy text={"Get Your Website"} />

          <button className="text-3xl">A.C.</button>

          <div className="sm:hidden">
            <BurgerDropdownMenu />
          </div>

          <nav className="hidden sm:block">
            <ul className="flex gap-4">
              <li>About me</li>
              <li>Projects</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
