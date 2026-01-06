import { useTranslation } from "react-i18next";

import { IconStage } from "../icon-stage/icon-stage";

import s from "./mobile-development-process-section.module.scss";

export const MobileDevelopmentProcessSection = () => {
  const { t } = useTranslation("developmentProcessSection");

  return (
    <ul className={s.stageList}>
      {t("stages", { returnObjects: true }).map((stage) => (
        <li className={s.stageList__item}>
          <IconStage dots={stage.id} />

          <div>
            <h3 className={s.stageTitle}>{stage.title}</h3>
            <ul className={s.stageDescriptionlist}>
              {stage.description.map((stageDesc) => (
                <li className={s.listItem}>
                  <div className={s.bullet}>●</div>
                  <p className={s.stageDescription}>{stageDesc}</p>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
