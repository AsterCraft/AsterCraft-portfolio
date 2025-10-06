import classNames from "classnames";

import ButtonStartProject from "../../../../shared/ui/buttons/ButtonStartProject/ButtonStartProject";
import LightDivider from "../../../../shared/ui/lines/LightDivider/LightDivider";
import HeroTitle from "./HeroTitle";

const SectionHero = () => {
  return (
    <section className="flex h-[100vh] w-full flex-col bg-[#1a1a1a] pt-20 text-xl text-white">
      {/* title and animation in row */}
      <div className="flex flex-5">
        <div
          className={classNames(
            "mx-auto flex max-w-[1450px] flex-col items-center justify-around px-6",
            "sm:flex-row sm:items-center sm:justify-between",
            "xl:gap-50"
          )}
        >
          <HeroTitle />
        </div>
      </div>

      <div className="relative flex-[2] md:flex-1">
        <LightDivider />

        <div className="Container flex flex-col justify-between md:flex-row">
          <p>Ми створимо Вам сайт, який для будь-яких ваших цілей!</p>
          <ButtonStartProject
            text="Замовити безкоштовну консультацію"
            className="absolute right-10 bottom-10 md:static md:right-auto md:bottom-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
