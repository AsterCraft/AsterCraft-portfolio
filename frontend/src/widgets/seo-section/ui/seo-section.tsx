import { useState } from "react";
import cn from "classnames";

import { StartProjectBtn } from "@shared/ui";
import { PhoneEnabledIcon } from "@shared/ui";
import { LocationOnIcon } from "@shared/ui";
import { MailIcon } from "@shared/ui";

import s from "./seo-section.module.scss";
import gs from "@shared/styles/global.module.scss";
import { useTranslation } from "react-i18next";

type SeoSectionProps = {
  children: React.ReactNode;
};

// document what is supposed to be passed to children?
const SeoSection = ({ children }: SeoSectionProps) => {
  const { t } = useTranslation("seoSection");

  const tabs = t("countries.tabs", { returnObjects: true });

  const [selectedCountry, setSelectedCountry] = useState<
    (typeof tabs)[number]["id"]
  >(tabs[0].id);

  const contacts = t(`countries.contacts.${selectedCountry}`, {
    returnObjects: true,
  });

  return (
    <section className={s.seoSection}>
      <div className={cn(s.wrapper, gs.container)}>
        <div
          className={cn(s.contactsColumn, s.column)}
          aria-labelledby="contact-heading"
        >
          <h2
            className={s.heading}
            id="contact-heading"
          >
            {t("heading", { returnObjects: true }).map((line, i) => (
              <span
                className={s.headingLine}
                key={i}
              >
                {line}
              </span>
            ))}
          </h2>

          <div className={s.countryContacts}>
            <menu
              className={s.countrySelectors}
              role="group"
              aria-label={t("countries.ariaLabel")}
            >
              {tabs.map((country) => (
                <button
                  className={cn(s.countryButton, {
                    [s.active]: selectedCountry === country.id,
                  })}
                  onClick={() => setSelectedCountry(country.id)}
                  aria-pressed={selectedCountry === country.id}
                  type="button"
                  key={country.id}
                >
                  <span>{country.name}</span>
                </button>
              ))}
            </menu>

            <address className={s.contactList}>
              <ul className={s.contactItems}>
                <li className={s.contactItem}>
                  <PhoneEnabledIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <a
                    href={contacts.phoneHref}
                    className={s.contactLink}
                  >
                    {contacts.phone}
                  </a>
                </li>
                <li className={s.contactItem}>
                  <MailIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <a
                    className={s.contactLink}
                    href={`mailto:${contacts.email}`}
                  >
                    {contacts.email}
                  </a>
                </li>
                <li className={s.contactItem}>
                  <LocationOnIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <span className={s.contactText}>{contacts.location}</span>
                </li>
              </ul>
            </address>
          </div>

          <StartProjectBtn
            text={t("ctaButton")}
            className={s.ctaButton}
          />
        </div>

        <div className={cn(s.textColumn, s.column)}>{children}</div>
      </div>
    </section>
  );
};

export default SeoSection;
