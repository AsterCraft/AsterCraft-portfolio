import cn from "classnames";

import ButtonStartProject from "@shared/ui/buttons/ButtonStartProject/ButtonStartProject";

import { useWindowWidth } from "@shared/lib";

import s from "./description-block.module.scss";

export const DescriptionBlock = () => {
  const windowWidth = useWindowWidth();

  return (
    <div className={cn(s.descriptionBlock, "Container")}>
      <p>Ми створимо Вам сайт для будь-яких ваших цілей!</p>

      {windowWidth < 380 && (
        <ButtonStartProject
          text="Отримати консультацію"
          className={s.button}
        />
      )}

      {windowWidth >= 380 && (
        <ButtonStartProject
          text="Отримати безкоштовну консультацію"
          className={s.button}
        />
      )}
    </div>
  );
};
