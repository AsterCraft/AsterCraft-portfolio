import cn from "classnames";
import { useTranslation } from "react-i18next";

import DottedListItem from "@shared/ui/lists/dotted-list-item/DottedListItem";

import s from "./consultation-section.module.scss";
import gs from "@shared/styles/global.module.scss";

const ConsultationSection = () => {
  const { t } = useTranslation("consultationSection");

  return (
    <section
      className={s.consultationSection}
      aria-labelledby="consultationSection__heading"
    >
      <div className={cn(s.wrapper, gs.container)}>
        <h2
          id="consultationSection__heading"
          className={s.title}
        >
          {t("heading")}
        </h2>

        <div className={s.description}>
          <h3
            className={s.subtitle}
            id="consultationSection__subheading"
          >
            {t("infoForm.heading")}
          </h3>

          <ul
            className={s.list}
            aria-labelledby="consultationSection__subheading"
          >
            <DottedListItem>{t("infoForm.first")}</DottedListItem>
            <DottedListItem>{t("infoForm.double")}</DottedListItem>
            <DottedListItem>{t("infoForm.third")}</DottedListItem>
          </ul>
        </div>

        <p className={s.downText}>{t("comment")}</p>
      </div>
    </section>
  );
};
export default ConsultationSection;
