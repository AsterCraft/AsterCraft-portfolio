import SectionAboutUs from "../../widgets/layout/sections/SectionAboutUs/SectionAboutUs";
import SectionHero from "./ui/SectionHero/SectionHero";
import HRSections from "../../shared/ui/hrs/HRSections";

const PageHome = () => {
  return (
    <main className="m-auto flex flex-col pb-12">
      <SectionHero />
      <SectionAboutUs />
      <HRSections />
    </main>
  );
};

export default PageHome;
