import cn from "classnames";
import { useTranslation } from "react-i18next";

import { DevicesSvgImage } from "@shared/ui";

import s from "./promise-section.module.scss";
import gs from "@shared/styles/global.module.scss";

const PromiseSection = () => {
  const { t } = useTranslation("promiseSection");

  return (
    <section
      className={s.promiseSection}
      aria-labelledby="promise-heading"
    >
      <div className={cn(s.wrapper, gs.container)}>
        <div className={s.content}>
          <h2
            className={s.heading}
            id="promise-heading"
          >
            {t("heading")}
          </h2>

          <ul className={s.list}>
            {t("list", { returnObjects: true }).map((item, i) => (
              <li
                className={s.listItem}
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <DevicesSvgImage className={s.devicesImg} />
      </div>
    </section>
  );
};

export default PromiseSection;
