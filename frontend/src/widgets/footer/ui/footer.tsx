import { StartProjectBtn } from "../../../shared/ui/";
import DividerBetweenSections from "../../../shared/ui/lines/DividerBetweenSections/DividerBetweenSections";
import AnimatedBrandName from "./animated-brand-name/animated-brand-name";
import { SectionContact } from "./section-contact/section-contact";

import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <section className={s.topSection}>
        <h2 className={s.heading}>
          Давайте обговоримо і створимо крутий сайт для Вас
        </h2>
        <StartProjectBtn
          className={s.buttonStartProject}
          text="Обговорити проект"
        />
      </section>

      <DividerBetweenSections className={s.divider} />

      <SectionContact />

      <AnimatedBrandName />
    </footer>
  );
};
