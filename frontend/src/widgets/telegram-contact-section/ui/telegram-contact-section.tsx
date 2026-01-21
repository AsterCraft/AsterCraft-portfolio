import cn from "classnames";

import { Link } from "react-router";
import { TelegramLogo } from "@shared/ui";

import s from "./telegram-contact-section.module.scss";

const TelegramContactSection = ({
  className,
  ...props
}: React.ComponentPropsWithRef<"section">) => {
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
        <span>Have a question?</span>
        <span>Ask us in Telegram:</span>
      </h2>

      <Link
        to="https://t.me/AsterCraft"
        className={s.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on Telegram (opens in new tab)"
      >
        <TelegramLogo
          className={s.telegramLogo}
          aria-hidden="true"
        />
        <span className={s.at}>@AsterCraft</span>
      </Link>
    </section>
  );
};

export default TelegramContactSection;
