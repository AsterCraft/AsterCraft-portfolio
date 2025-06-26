import SectionAboutUs from "../../widgets/layout/sections/SectionAboutUs/SectionAboutUs";
import SectionHero from "./ui/SectionHero/SectionHero";
import DividerBetweenSections from "../../shared/ui/hrs/DividerBetweenSections";
import SliderTestimonials from "../../widgets/sliders/SliderTestimonials/SliderTestimonials";

const PageHome = () => {
  return (
    <main>
      <SectionHero />
      <SectionAboutUs />
      <DividerBetweenSections />
      <SliderTestimonials />
    </main>
  );
};

export default PageHome;
