import cn from "classnames";
import { useTranslation } from "react-i18next";

import { FacebookIcon, InstagramIcon, TelegramIcon } from "@shared/ui/";
import DividerBetweenSections from "../../../shared/ui/lines/DividerBetweenSections/DividerBetweenSections";

import s from "./footer.module.scss";
import gs from "@shared/styles/global.module.scss";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={cn(gs.container, s.content)}>
          <a
            className={s.textBtn}
            href="https://www.astercraft.com.ua/sitemap.xml"
            rel="sitemap"
            aria-label={t("sitemap.ariaLabel")}
          >
            {t("sitemap.text")}
          </a>
          <small className={s.copyrightNote}>{t("copyright")}</small>

          <ul
            className={s.socialMedias}
            aria-label={t("socialMedia.ariaLabel")}
          >
            <li className={s.IconLink}>
              <a
                href="https://t.me/AsterCraft"
                className={s.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("socialMedia.telegram")}
              >
                <TelegramIcon className={s.icon} />
              </a>
            </li>
            <li className={s.IconLink}>
              <a
                href="https://www.instagram.com/astercraft.web/"
                className={s.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("socialMedia.instagram")}
              >
                <InstagramIcon className={s.icon} />
              </a>
            </li>
            <li className={s.IconLink}>
              <a
                href="#"
                className={s.socialMediaLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("socialMedia.facebook")}
              >
                <FacebookIcon className={s.icon} />
              </a>
            </li>
          </ul>
        </div>

        <DividerBetweenSections />
      </div>

      <div
        className={s.brandName}
        aria-hidden="true"
      >
        ASTERCRAFT
      </div>
    </footer>
  );
};

export default Footer;
