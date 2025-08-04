import SectionAboutUs from "../../widgets/sections/SectionAboutUs/SectionAboutUs";
import SectionHero from "./SectionHero/SectionHero";
import DividerBetweenSections from "../../shared/ui/lines/DividerBetweenSections/DividerBetweenSections";
import SectionProjects from "../../widgets/sections/SectionProjects/SectionProjects";
import SliderTestimonials from "../../widgets/sliders/SliderTestimonials/SliderTestimonials";

const PageHome = () => {
  return (
    <main>
      <SectionHero />
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
