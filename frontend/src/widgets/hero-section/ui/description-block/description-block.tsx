import cn from "classnames";

import { StartProjectBtn } from "@shared/ui/";

import s from "./description-block.module.scss";

export const DescriptionBlock = () => {
  return (
    <div className={cn(s.descriptionBlock, "Container")}>
      <p>Ми створимо Вам сайт для будь-яких ваших цілей!</p>

      <StartProjectBtn
        text="Отримати безкоштовну консультацію"
        className={s.button}
      />
    </div>
  );
};
