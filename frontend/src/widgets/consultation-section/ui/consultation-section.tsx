import { useTranslation } from "react-i18next";
import s from "./consultation-section.module.scss";
import DottedListItem from "@shared/ui/typography/DottedListItem/DottedListItem.tsx";

const ConsultationSection = () => {
  const { t } = useTranslation("consultationSection");
  return (
    <section className={s.main}>
      <h2 className={s.title}>{t("heading")}</h2>
      <div className={s.downTitleBlock}>
        <span className={s.subtitile}>{t("infoForm.heading")}</span>
        <div className={s.textList}>
          <DottedListItem text={t("infoForm.first")} />
          <DottedListItem text={t("infoForm.dobule")} />
          <DottedListItem text={t("infoForm.third")} />
        </div>
        <div className={s.downText}>{t("comment")}</div>
      </div>
    </section>
  );
};
export default ConsultationSection;
