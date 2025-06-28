import SectionAboutUs from "../../widgets/layout/sections/SectionAboutUs/SectionAboutUs";
import SectionHero from "./ui/SectionHero/SectionHero";
import DividerBetweenSections from "../../shared/ui/lines/DividerBetweenSections";
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
    </main>
  );
};

export default PageHome;
