import classNames from "classnames";

import LightDivider from "@shared/ui/lines/LightDivider/LightDivider";

import { TitleHero } from "../title-hero/title-hero";
import { DescriptionBlock } from "../description-block/description-block";

export const HeroSection = () => {
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
          <TitleHero />
        </div>
      </div>

      <div className="relative flex-1">
        <LightDivider />

        <DescriptionBlock />
      </div>
    </section>
  );
};
