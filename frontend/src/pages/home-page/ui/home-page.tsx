import { useTranslation } from "react-i18next";
import cn from "classnames";

import AboutUsSection from "@widgets/about-us-section";

import PromiseSection from "@widgets/promise-section";
import { DevelopmentProcessSection } from "@widgets/development-process-section";
import { HeroSection } from "@widgets/hero-section";
import ConsultationSection from "@widgets/consultation-section";
import FAQSection from "@widgets/faq-section";
import { ServicesSection } from "@widgets/services-section";
import { SeoSection } from "@widgets/seo-section";
import ProjectsSection from "@widgets/projects-section";
import TelegramContactSection from "@widgets/telegram-contact-section";

import s from "./home-page.module.scss";
import gs from "@shared/styles/global.module.scss";

const HomePage = () => {
  const { t } = useTranslation("homePage");

  return (
    <main>
      <HeroSection />

      <ServicesSection />

      <div className={s.projects}>
        <PromiseSection />
        <ProjectsSection />
        <AboutUsSection />
      </div>

      <DevelopmentProcessSection />

      <FAQSection />

      <TelegramContactSection
        className={cn(gs.container, s.tgContactSection)}
      />

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
    </main>
  );
};

export default HomePage;
