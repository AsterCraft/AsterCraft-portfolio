import cn from "classnames";

import { TitleToSection } from "@shared/ui/typography";

import CheckListItems from "../../../../shared/ui/lists/CheckListItems";
import SecondaryText from "../../../../shared/ui/typography/SecondaryText";

import { dataConsultationList } from "../../model/dataConsultationList";
import ButtonStartProject from "@shared/ui/buttons/ButtonStartProject/ButtonStartProject";

import s from "./consultation-section.module.scss";

export const ConsultationSection = () => {
  return (
    <section className="bg-ac-bg-dark py-20">
      <div className={cn("app-container")}>
        <div className={s.title}>
          <TitleToSection
            title="Почніть з консультації — "
            className={cn(
              "text-center text-white",
              "mb:text-3xl",
              // "md:mb-10",
              "lg:text-5xl",
              s.titleText
            )}
          />
          <ButtonStartProject
            className={s.buttonStartProject}
            text="заповніть форму ↖"
          />
        </div>

        <h3 className={cn("mb-5 text-2xl text-white")}>
          Запишіться на безкоштовну консультацію, на якій ви одразу отримаєте:
        </h3>

        <CheckListItems
          data={dataConsultationList}
          className="mb-5 text-white"
        />

        <SecondaryText
          text="Ми  перетворимо ваші бізнес-задачі в реалізовані рішення."
          className="text-ac-text-muted"
        />
      </div>
    </section>
  );
};
