import { useTranslation } from "react-i18next";

import { IconStage } from "../icon-stage/icon-stage";

import s from "./mobile-development-process-section.module.scss";
import { DottedListItem } from "@shared/ui/lists";

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
                <DottedListItem>
                  <p className={s.stageDescription}>{stageDesc}</p>
                </DottedListItem>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
