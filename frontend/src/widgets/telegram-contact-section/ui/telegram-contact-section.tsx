import cn from "classnames";
import { useTranslation } from "react-i18next";

import { Link } from "react-router";
import { TelegramLogo } from "@shared/ui";

import s from "./telegram-contact-section.module.scss";

const TelegramContactSection = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"section">) => {
  const { t } = useTranslation("telegramContactSection");

  return (
    <section
      className={cn(s.telegramContactSection, className)}
      aria-labelledby="telegramContactSection__heading"
      {...props}
    >
      <h2
        className={s.heading}
        id="telegramContactSection__heading"
      >
        <span>{t("heading.question")}</span>
        <span>{t("heading.cta")}</span>
      </h2>

      <Link
        to="https://t.me/AsterCraft"
        className={s.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("link.ariaLabel")}
      >
        <TelegramLogo
          className={s.telegramLogo}
          aria-hidden="true"
        />
        <span className={s.at}>{t("link.handle")}</span>
      </Link>
    </section>
  );
};

export default TelegramContactSection;
