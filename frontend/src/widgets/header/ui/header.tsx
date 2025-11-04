import IconBurger from "../../../features/HeaderNavigation/ui/IconBurger";
import ButtonStartProject from "@shared/ui/buttons/ButtonStartProject/ButtonStartProject";

import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.blackHeader}>
          <div className={s.container}>
            <ButtonStartProject
              className={s.buttonStartProject}
              text="Замовити сайт"
            />

            <button className={s.brandName}>A.C.</button>

            <div className={s.burgerWrapper}>
              <IconBurger />
            </div>

            <nav className={s.nav}>
              <ul className={s.navList}>
                <li>
                  <a href="#SectionDevelopmentProcess">Розробка сайтів</a>
                </li>
                <li>
                  <a href="#SectionProjects">Портфоліо</a>
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
