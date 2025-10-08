import cn from "classnames";

import IconBurger from "../../../features/HeaderNavigation/ui/IconBurger";
import ButtonStartProject from "@shared/ui/buttons/ButtonStartProject/ButtonStartProject";

import s from "./header.module.scss";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 text-xl">
      <div
        // Transparent area around black header
        // 2xl: disable all styles
        className={cn(
          "relative mx-auto max-w-[1450px] rounded-md bg-transparent px-[10px] pt-[10px] backdrop-blur-xs",
          "2xl:backdrop-blur-0 2xl:static 2xl:max-w-none 2xl:rounded-none 2xl:bg-none 2xl:px-0 2xl:pt-0"
        )}
      >
        {/* black header */}
        <div
          className={cn(
            "rounded-md bg-[#0b0d0d] px-2 py-2 text-white",
            "lg:px-3 lg:py-0",
            "2xl:rounded-none"
          )}
        >
          {/* container */}
          <div
            className={cn("Container flex items-center justify-between px-0")}
          >
            {/* <ButtonBuy text={"Get Your Website"} /> */}
            <ButtonStartProject
              className={s.buttonStartProject}
              text="Замовити сайт"
            />

            <button className="text-4xl lg:text-6xl">A.C.</button>

            <div className="sm:hidden">
              <IconBurger />
              {/* <BurgerDropdownMenu /> */}
            </div>

            <nav className="hidden sm:block">
              <ul className="flex gap-4">
                <li>
                  <a href="#SectionDevelopmentProcess">Розробка сайтів</a>
                </li>

                {/* <li>Просування сайту</li>
                <li>Ціни</li> */}
                <li>
                  <a href="#SectionProjects">Портфоліо</a>{" "}
                </li>

                <li>
                  <a href="#SectionContact">Контакти</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
