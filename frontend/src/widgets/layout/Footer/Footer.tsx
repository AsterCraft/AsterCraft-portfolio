import classNames from "classnames";

import ButtonStartProject from "../../../shared/ui/buttons/ButtonStartProject/ButtonStartProject";
import DividerBetweenSections from "../../../shared/ui/lines/DividerBetweenSections/DividerBetweenSections";
import AnimatedBrandName from "./ui/AnimatedBrandName/AnimatedBrandName";
import { SectionContact } from "./ui/section-contact/section-contact";

const Footer = () => {
  return (
    <footer className="Container mt-30">
      <section className="sm: flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <h2 className={"max-w-[900px] text-[clamp(1.5rem,4vw,2.5rem)]"}>
          Давайте обговоримо і створимо крутий сайт для Вас
        </h2>
        <ButtonStartProject
          className={classNames(
            "ml-auto transition-transform duration-300",
            "xl:origin-right xl:scale-150"
          )}
          text="Обговорити проект"
        />
      </section>

      <DividerBetweenSections className="mt-10 mb-10" />

      <SectionContact />

      <AnimatedBrandName />
    </footer>
  );
};

export default Footer;
