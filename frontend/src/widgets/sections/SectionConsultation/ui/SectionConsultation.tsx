import cn from "classnames";

import TitleSection from "../../../../shared/ui/typography/TitleSection";
import CheckListItems from "../../../../shared/ui/lists/CheckListItems";
import SecondaryText from "../../../../shared/ui/typography/SecondaryText";

import { dataConsultationList } from "../model/dataConsultationList";

const SectionConsultation = () => {
  return (
    <section className="bg-ac-bg-dark py-20">
      <div className={cn("app-container")}>
        <TitleSection
          title="Почніть з консультації — заповніть форму"
          className={cn(
            "text-center text-white",
            "mb:text-3xl md:mb-10",
            "lg:text-5xl"
          )}
        />

        <h3 className={cn("mb-5 text-2xl text-white")}>
          Замовте безкоштовну консультацію, на якій ви одразу отримаєте:
        </h3>

        <CheckListItems
          data={dataConsultationList}
          className="mb-5 text-white"
        />

        <SecondaryText
          text="І коли ви на 100% відчуєте, що вас зрозуміли, а умови та завдання будуть
        виконані — ми разом перетворимо ваші бізнес-задачі в реалізовані
        рішення."
          className="text-ac-text-muted"
        />
      </div>
    </section>
  );
};

export default SectionConsultation;
