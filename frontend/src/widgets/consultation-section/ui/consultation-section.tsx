import { useTranslation } from "react-i18next";
import s from "./consultation-section.module.scss";
import ListText from "@shared/ui/typography/listtext/ListText";

const ConsultationSection = () => {
  const { t } = useTranslation("consultationSection");
  return (
    <section className={s.main}>
      <span className={s.title}>{t("heading")}</span>
      <div className={s.downTitleBlock}>
        <span className={s.subtitile}>{t("infoForm.heading")}</span>
        <div className={s.textList}>
          <ListText text={t("infoForm.first")} />
          <ListText text={t("infoForm.dobule")} />
          <ListText text={t("infoForm.third")} />
        </div>
        <div className={s.downText}>{t("comment")}</div>
      </div>
    </section>
  );
};
export default ConsultationSection;