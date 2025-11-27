import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { StartProjectBtn } from "@shared/ui";
import { MenuIcon } from "@shared/ui/icons/menu";

import s from "./header.module.scss";
import { HomeIcon } from "@shared/ui/icons/home";

export const Header = () => {
  const { t } = useTranslation("header");

  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const handleMenuClick = () => {
    setIsPinned((prev) => {
      const newPinned = !prev;
      setIsExpanded(newPinned);
      return newPinned;
    });
  };

  const handleMouseEnter = () => {
    if (!isPinned) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) setIsExpanded(false);
  };

  return (
    <header className={s.header}>
      <div className={s.appBar}>
        <div
          className={s.left}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <button
            className={cn(s.menuButton, { [s.active]: isPinned })}
            aria-label="Toggle navigation"
            aria-pressed={isPinned}
            onClick={handleMenuClick}
          >
            <MenuIcon className={s.menuIcon} />
          </button>
          <span className={s.brandName}>{t("brandName")}</span>
        </div>

        <StartProjectBtn
          text={t("startProjectBtn")}
          className={s.cta}
        />
      </div>

      <aside
        className={cn(s.navRail, { [s.expanded]: isExpanded })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden={!isExpanded}
        inert={!isExpanded}
      >
        <div className={s.navRailInner}>
          <nav
            className={s.routingNav}
            aria-label="Main navigation"
          >
            <ul>
              <li>
                <Link
                  to="/"
                  className={s.navItem}
                >
                  <HomeIcon className={s.navIcon} />
                  <span className={s.navLabel}>Home</span>
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            className={s.pageIndex}
            aria-label="Page sections"
          >
            <ul className={s.pageIndexList}>
              <li>
                <a
                  href="#SectionDevelopmentProcess"
                  className={s.pageIndexLink}
                >
                  {t("nav.development")}
                </a>
              </li>
              <li>
                <a
                  href="#SectionProjects"
                  className={s.pageIndexLink}
                >
                  {t("nav.portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="#SectionContact"
                  className={s.pageIndexLink}
                >
                  {t("nav.contacts")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </header>
  );
};
