import cn from "classnames";

import ButtonStartProject from "@shared/ui/buttons/ButtonStartProject/ButtonStartProject";

import s from "./description-block.module.scss";

export const DescriptionBlock = () => {
  return (
    <div className={cn(s.descriptionBlock, "Container")}>
      <p>Ми створимо Вам сайт для будь-яких ваших цілей!</p>

      <ButtonStartProject
        text="Отримати безкоштовну консультацію"
        className={s.button}
      />
    </div>
  );
};
