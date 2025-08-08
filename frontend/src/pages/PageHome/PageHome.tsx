import SectionAboutUs from "../../widgets/sections/SectionAboutUs/SectionAboutUs";
import SectionPromise from "../../widgets/sections/SectionPromise/ui/SectionPromise";
import SectionDevelopmentProcess from "../../widgets/sections/SectionDevelopmentProcess/ui/SectionDevelopmentProcess";
import SectionHero from "./SectionHero/SectionHero";
import DividerBetweenSections from "../../shared/ui/lines/DividerBetweenSections/DividerBetweenSections";
import SectionProjects from "../../widgets/sections/SectionProjects/SectionProjects";
import SliderTestimonials from "../../widgets/sliders/SliderTestimonials/SliderTestimonials";

const PageHome = () => {
  return (
    <main>
      <SectionHero />

      <div className="app-container mt-10 mb-10">
        <SectionPromise />
      </div>

      <div className="mt-10 mb-10">
        <SectionDevelopmentProcess />
      </div>

      <SectionAboutUs />
      <DividerBetweenSections />
      <SectionProjects />
      <DividerBetweenSections />
      <SliderTestimonials />
      <DividerBetweenSections />
    </main>
  );
};

export default PageHome;
