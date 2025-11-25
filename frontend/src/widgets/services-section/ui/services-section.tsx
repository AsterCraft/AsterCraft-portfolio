import { useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import type { servicesSectionTranslationEn } from "../config/translation/en";

import s from "./services-section.module.scss";
import gs from "@shared/styles/global.module.scss";

type TabId = (typeof servicesSectionTranslationEn.tabs)[number]["id"];

export const ServicesSection = () => {
  const { t } = useTranslation("servicesSection");

  const tabs = t("tabs", { returnObjects: true });

  const [selectedTab, setSelectedTab] = useState<TabId>(tabs[0].id);

  const services = t(`services.${selectedTab}`, { returnObjects: true });

  return (
    <section className={s.servicesSection}>
      <div className={cn(s.wrapper, gs.container)}>
        <h2>{t("title")}</h2>
        <div className={s.services}>
          <menu className={s.tabSelectors}>
            {tabs.map((tab) => (
              <li
                className={cn(s.tabSelector)}
                key={tab.id}
              >
                <button
                  className={cn(s.selectTabBtn, {
                    [s.active]: selectedTab === tab.id,
                  })}
                  onClick={() => setSelectedTab(tab.id)}
                  aria-selected={selectedTab === tab.id}
                  tabIndex={selectedTab === tab.id ? -1 : 0}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </menu>

          <ul className={s.serviceTab}>
            {services.map((service) => (
              <li
                className={s.serviceCard}
                key={service.title}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
