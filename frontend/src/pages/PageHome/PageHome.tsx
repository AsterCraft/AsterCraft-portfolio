import SectionAboutUs from "../../widgets/layout/sections/SectionAboutUs/SectionAboutUs";
import SectionHero from "./ui/SectionHero/SectionHero";
import DividerBetweenSections from "../../shared/ui/hrs/DividerBetweenSections";
import SectionTestimonials from "../../widgets/sections/SectionTestimonials/SectionTestimonials";

const PageHome = () => {
  return (
    <main className="m-auto flex flex-col pb-12">
      <SectionHero />
      <SectionAboutUs />
      <DividerBetweenSections />
      <SectionTestimonials />
    </main>
  );
};

export default PageHome;
