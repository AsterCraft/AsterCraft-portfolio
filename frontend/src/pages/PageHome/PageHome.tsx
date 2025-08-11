import SectionAboutUs from "../../widgets/sections/SectionAboutUs/SectionAboutUs";
import SectionPromise from "../../widgets/sections/SectionPromise/ui/SectionPromise";
import SectionDevelopmentProcess from "../../widgets/sections/SectionDevelopmentProcess/ui/SectionDevelopmentProcess";
import SectionHero from "./SectionHero/SectionHero";
import DividerBetweenSections from "../../shared/ui/lines/DividerBetweenSections/DividerBetweenSections";
import SectionProjects from "../../widgets/sections/SectionProjects/SectionProjects";
import SliderTestimonials from "../../widgets/sliders/SliderTestimonials/SliderTestimonials";
import SectionTelegramContact from "../../widgets/sections/SectionTelegramContact/ui/SectionTelegramContact";

const PageHome = () => {
  return (
    <main>
      <SectionHero />

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
      <DividerBetweenSections />
      <SliderTestimonials />
      <DividerBetweenSections />
    </main>
  );
};

export default PageHome;
