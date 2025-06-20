import SectionAboutUs from "../../widgets/layout/sections/SectionAboutUs/SectionAboutUs";
import SectionHero from "./ui/SectionHero/SectionHero";

const PageHome = () => {
  return (
    <main className="m-auto flex flex-col">
      <SectionHero />
      <SectionAboutUs />
    </main>
  );
};

export default PageHome;
