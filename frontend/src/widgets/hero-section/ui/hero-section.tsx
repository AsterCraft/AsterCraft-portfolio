import { StartProjectBtn } from "@shared/ui";
import s from "./hero-section.module.scss";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation("heroSection");

  return (
    <section className={s.heroSection}>
      <div className={s.heroTitle}>
        <div className={s.firstRow}>
          <span>{t("title.firstRow")}</span>
        </div>
        <div className={s.secondRow}>
          <span>{t("title.secondRow")}</span>
        </div>
        <div className={s.thirdRow}>
          <span>{t("title.thirdRow")}</span>
        </div>
      </div>
      <StartProjectBtn
        text={t("cta")}
        className={s.cta}
      />
    </section>
  );
};
