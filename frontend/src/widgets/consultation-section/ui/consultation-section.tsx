import { useTranslation } from "react-i18next";
import s from "./consultation-section.module.scss";
import DottedListItem from "@shared/ui/lists/dotted-list-item/DottedListItem";
import gs from "@shared/styles/global.module.scss";
import cn from "classnames";
const ConsultationSection = () => {
  const { t } = useTranslation("consultationSection");

  return (
    <section 
     className={s.main}
    aria-labelledby="promise-heading"
    >
      <div className={cn(s.wrapper, gs.container)}>
      <h2 className={s.title}>{t("heading")}</h2>
      <div className={s.downTitleBlock}>
        <span className={s.subtitile}>{t("infoForm.heading")}</span>
        <ul className={s.listItem}>
          <DottedListItem children={t("infoForm.first")} />
          <DottedListItem children={t("infoForm.dobule")} />
          <DottedListItem children={t("infoForm.third")} />
        </ul>
        <div className={s.downText}>{t("comment")}</div>
      </div>
      </div>
    </section>
  );
};
export default ConsultationSection;
