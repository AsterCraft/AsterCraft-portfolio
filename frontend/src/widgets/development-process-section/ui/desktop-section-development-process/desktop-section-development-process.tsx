import cn from "classnames";

import { IconStage } from "../icon-stage/icon-stage";
import s from "./desktop-section-development-process.module.scss";

import { useTranslation } from "react-i18next";

export const DesktopSectionDevelopmentProcess = () => {
  const { t } = useTranslation("developmentProcessSection");

  return (
    <ul className={s.stageList}>
      {t("stages", { returnObjects: true }).map((stage) => {
        const isOdd = stage.id % 2 === 0; // непарне число

        return (
          <li
            className={s.stageList__item}
            key={stage.id}
          >
            <div
              className={s.stageDescription}
              style={{ order: isOdd ? 1 : 3 }}
            >
              <h3 className={s.stageTitle}>{stage.title}</h3>
              <ul className={s.stageDescriptionlist}>
                {stage.description.map((stageDesc) => (
                  <li className={s.listItem}>
                    <div className={s.bullet}>●</div>
                    <p className={s.text}>{stageDesc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <IconStage
              className={s.iconStage}
              dots={stage.id}
            />

            <div style={{ order: isOdd ? 3 : 1 }}></div>
          </li>
        );
      })}
    </ul>
  );
};
