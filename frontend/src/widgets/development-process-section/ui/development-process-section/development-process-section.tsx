import cn from "classnames";

import { useWindowWidth } from "../../lib/hooks/useWindowWidth";

import { DesktopSectionDevelopmentProcess } from "../desktop-section-development-process/desktop-section-development-process";
import { MobileDevelopmentProcessSection } from "../mobile-development-process-section/mobile-development-process-section";

import s from "./development-process-section.module.scss";

type Props = {
  className: string;
};

export const DevelopmentProcessSection = ({ className }: Props) => {
  const { isDesktop } = useWindowWidth();

  return (
    <section
      className={cn(s.sectionDevelopmentProcess, className)}
      id="development-process-section"
    >
      <h2 className={s.title}>Процес створення сайту</h2>

      {isDesktop ? (
        <DesktopSectionDevelopmentProcess />
      ) : (
        <MobileDevelopmentProcessSection />
      )}
    </section>
  );
};
