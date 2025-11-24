import { useState } from "react";
import cn from "classnames";

import { StartProjectBtn } from "@shared/ui";
import { PhoneEnabledIcon } from "@shared/ui";
import { LocationOnIcon } from "@shared/ui";
import { MailIcon } from "@shared/ui";

import s from "./seo-section.module.scss";
import gs from "@shared/styles/global.module.scss";

type SeoSectionProps = {
  children: React.ReactNode;
};

const SeoSection = ({ children }: SeoSectionProps) => {
  const [selectedCountry, setSelectedCountry] = useState(false);

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
            <span className={s.headingLine}>Drop us a request</span>
            <span className={s.headingLine}>And we'll do the rest!</span>
          </h2>

          <div className={s.countryContacts}>
            <menu
              className={s.countrySelectors}
              role="group"
              aria-label="Select country"
            >
              <button
                type="button"
                className={cn(s.countryButton, s.active)}
                aria-pressed="true"
              >
                <span>Ukraine</span>
              </button>
              <button
                type="button"
                className={s.countryButton}
                aria-pressed="false"
              >
                <span>Bulgaria</span>
              </button>
              <button
                type="button"
                className={s.countryButton}
                aria-pressed="false"
              >
                <span>Poland</span>
              </button>
            </menu>

            <address className={s.contactList}>
              <ul className={s.contactItems}>
                <li className={s.contactItem}>
                  <PhoneEnabledIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <a
                    href="tel:+48790839872"
                    className={s.contactLink}
                  >
                    +48 (790) 8398 72
                  </a>
                </li>
                <li className={s.contactItem}>
                  <MailIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <a
                    className={s.contactLink}
                    href="mailto:astercraft.dev@gmail.com"
                  >
                    astercraft.dev@gmail.com
                  </a>
                </li>
                <li className={s.contactItem}>
                  <LocationOnIcon
                    aria-hidden="true"
                    className={s.contactIcon}
                  />
                  <span className={s.contactText}>Lviv</span>
                </li>
              </ul>
            </address>
          </div>

          <StartProjectBtn
            text="Leave a request"
            className={s.ctaButton}
          />
        </div>

        <div className={cn(s.textColumn, s.column)}>{children}</div>
      </div>
    </section>
  );
};

export default SeoSection;
