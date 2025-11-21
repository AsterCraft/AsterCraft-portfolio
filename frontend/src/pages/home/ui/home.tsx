import cn from "classnames";

import { SectionAboutUs } from "@widgets/section-about-us";
import SectionPromise from "@widgets/sections/SectionPromise/ui/SectionPromise";
import { SectionDevelopmentProcess } from "@widgets/section-development-process";
import { HeroSection } from "@widgets/hero-section";
import DividerBetweenSections from "@shared/ui/lines/DividerBetweenSections/DividerBetweenSections";
import SectionProjects from "@widgets/sections/SectionProjects/SectionProjects";
import { TestimonialsSlider } from "@widgets/testimonials-slider";
import SectionTelegramContact from "@widgets/sections/SectionTelegramContact/ui/SectionTelegramContact";
import { ConsultationSection } from "@widgets/consultation-section";
import { FAQSection } from "@widgets/faq-section";
import { ServicesSection } from "@widgets/services-section";

import s from "./home.module.scss";

export const PageHome = () => {
  return (
    <main>
      <HeroSection />

      {/* <div className={cn("Container", s.servicesSection)}> */}
      <ServicesSection />
      {/* </div> */}

      <div className="app-container mt-20 mb-20">
        <SectionPromise />
      </div>

      <DividerBetweenSections />

      <div className="pt-20 pb-20">
        <SectionAboutUs />
      </div>

      <SectionDevelopmentProcess />

      <DividerBetweenSections />

      <SectionTelegramContact />

      <DividerBetweenSections />
      <SectionProjects />

      <ConsultationSection />

      <DividerBetweenSections />
      <TestimonialsSlider />
      <DividerBetweenSections />

      <FAQSection />
      <DividerBetweenSections />
    </main>
  );
};
