import TitleSection from "../../../../shared/ui/typography/TitleSection";
import CheckListItems from "../../../../shared/ui/lists/CheckListItems";
import SecondaryText from "../../../../shared/ui/typography/SecondaryText";

import { dataConsultationList } from "../model/dataConsultationList";

const SectionConsultation = () => {
  return (
    <section>
      <TitleSection title="Почніть з консультації — заповніть форму" />

      <h3>Замовте безкоштовну консультацію, на якій ви одразу отримаєте:</h3>

      <CheckListItems data={dataConsultationList} />

      <SecondaryText
        text="І коли ви на 100% відчуєте, що вас зрозуміли, а умови та завдання будуть
        виконані — ми разом перетворимо ваші бізнес-задачі в реалізовані
        рішення."
      />
    </section>
  );
};

export default SectionConsultation;
