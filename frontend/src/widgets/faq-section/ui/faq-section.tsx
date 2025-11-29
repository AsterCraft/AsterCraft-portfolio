import { useState } from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { KeyboardArrowDownIcon } from "@shared/ui/icons/";

import type en from "../config/translations/en.ts";

import s from "./faq-section.module.scss";
import gs from "@shared/styles/global.module.scss";

type ID = (typeof en.items)[number]["id"];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<Set<ID>>(new Set());

  const { t } = useTranslation("faqSection");

  const toggleItem = (id: ID) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      console.log(newSet);

      return newSet;
    });
  };

  return (
    <section className={s.faqSection}>
      <div className={cn(s.wrapper, gs.container)}>
        <h2>{t("heading")}</h2>

        <dl className={s.accordionList}>
          {t("items", { returnObjects: true }).map((item) => (
            <div
              className={s.accordionItem}
              key={item.id}
            >
              <dt className={s.accordionTerm}>
                <button
                  id={`faq-btn-${item.id}`}
                  className={s.accordionBtn}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItems.has(item.id)}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <span className={s.questionText}>{item.question}</span>
                  <KeyboardArrowDownIcon
                    className={s.icon}
                    data-open={openItems.has(item.id)}
                  />
                </button>
              </dt>

              <dd
                id={`faq-panel-${item.id}`}
                className={s.accordionPanel}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                data-open={openItems.has(item.id)}
              >
                <div className={s.accordionContent}>
                  <p>{item.answer}</p>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
