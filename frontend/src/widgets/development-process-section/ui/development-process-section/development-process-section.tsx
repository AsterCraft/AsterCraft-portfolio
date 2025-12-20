import { useWindowWidth } from "../../lib/hooks/useWindowWidth";

import { DesktopSectionDevelopmentProcess } from "../desktop-section-development-process/desktop-section-development-process";
import { MobileDevelopmentProcessSection } from "../mobile-development-process-section/mobile-development-process-section";

import s from "./development-process-section.module.scss";

export const DevelopmentProcessSection = () => {
  const { isDesktop } = useWindowWidth();

  return (
    <section className={s.sectionDevelopmentProcess}>
      <div className="container">
        <h2 className={s.title}>Процес створення сайту</h2>

        {isDesktop ? (
          <DesktopSectionDevelopmentProcess />
        ) : (
          <MobileDevelopmentProcessSection />
        )}
      </div>
    </section>
  );
};
