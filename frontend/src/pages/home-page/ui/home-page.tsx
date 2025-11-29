import { useTranslation } from "react-i18next";

import AboutUsSection from "@widgets/about-us-section";

import PromiseSection from "@widgets/promise-section";
import { SectionDevelopmentProcess } from "@widgets/section-development-process";
import { HeroSection } from "@widgets/hero-section";
import DividerBetweenSections from "@shared/ui/lines/DividerBetweenSections/DividerBetweenSections";
import SectionProjects from "@widgets/sections/SectionProjects/SectionProjects";
import { TestimonialsSlider } from "@widgets/testimonials-slider";
import SectionTelegramContact from "@widgets/sections/SectionTelegramContact/ui/SectionTelegramContact";
import { ConsultationSection } from "@widgets/consultation-section";
import FAQSection from "@widgets/faq-section";
import { ServicesSection } from "@widgets/services-section";
import { SeoSection } from "@widgets/seo-section";

const HomePage = () => {
  const { t } = useTranslation("homePage");

  return (
    <main>
      <HeroSection />

      <PromiseSection />

      <ServicesSection />

      <DividerBetweenSections />

      {/* <div className="pt-20 pb-20">
        <SectionAboutUs />
      </div> */}
      <AboutUsSection />

      <SectionDevelopmentProcess />

      <DividerBetweenSections />

      <SectionTelegramContact />

      <DividerBetweenSections />
      <SectionProjects />

      <ConsultationSection />
      <SeoSection>
        <h1>{t("seo.heading")}</h1>

        <p>{t("seo.intro.paragraph1")}</p>
        <p>{t("seo.intro.paragraph2")}</p>

        <h2>{t("seo.typesOfSites.heading")}</h2>

        <p>{t("seo.typesOfSites.intro")}</p>

        <ul>
          {t("seo.typesOfSites.items", { returnObjects: true }).map(
            (item, i) => (
              <li key={i}>{item}</li>
            )
          )}
        </ul>

        <p>{t("seo.typesOfSites.conclusion")}</p>

        <h2>{t("seo.turnkeyCreation.heading")}</h2>

        <p>{t("seo.turnkeyCreation.intro")}</p>

        <p>{t("seo.turnkeyCreation.activitiesIntro")}</p>

        <ul>
          {t("seo.turnkeyCreation.activities", { returnObjects: true }).map(
            (activity, i) => (
              <li key={i}>{activity}</li>
            )
          )}
        </ul>

        <p>{t("seo.turnkeyCreation.conclusion")}</p>

        <h2>{t("seo.costFactors.heading")}</h2>

        <p>{t("seo.costFactors.intro")}</p>

        <ul>
          {t("seo.costFactors.factors", { returnObjects: true }).map(
            (factor, i) => (
              <li key={i}>{factor}</li>
            )
          )}
        </ul>

        <p>{t("seo.costFactors.conclusion")}</p>

        <h2>{t("seo.whyUs.heading")}</h2>
        <p>{t("seo.whyUs.content")}</p>
      </SeoSection>

      <DividerBetweenSections />
      <TestimonialsSlider />
      <DividerBetweenSections />

      <FAQSection />
      <DividerBetweenSections />
    </main>
  );
};

export default HomePage;
