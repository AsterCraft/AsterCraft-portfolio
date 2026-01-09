import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import { StartProjectBtn, TextLink } from "@shared/ui";
import { MenuIcon } from "@shared/ui/icons/menu";
import { HomeIcon } from "@shared/ui/icons/home";
import { useUnmountAnimation } from "@shared/lib/motion";

import s from "./header.module.scss";

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isNavRailHovered, setIsNavRailHovered] = useState(false);

  const { t } = useTranslation("header");

  const { animationState, elementRef } = useUnmountAnimation<HTMLDivElement>(
    isExpanded,
    () => {
      setIsExpanded(false);
      setIsPinned(false);
    }
  );

  useEffect(() => {
    let timer: number;

    if (!isLeftHovered && !isNavRailHovered && !isPinned) {
      timer = window.setTimeout(() => {
        setIsExpanded(false);
      }, 250);
    }

    return () => clearTimeout(timer);
  }, [isLeftHovered, isNavRailHovered, isPinned]);

  const handleMenuClick = () => {
    setIsPinned((prev) => {
      const newPinned = !prev;
      setIsExpanded(newPinned);
      return newPinned;
    });
  };

  const handleLeftEnter = () => {
    setIsLeftHovered(true);
    if (!isPinned) setIsExpanded(true);
  };

  const handleLeftLeave = () => {
    setIsLeftHovered(false);
  };

  const handleNavRailEnter = () => {
    setIsNavRailHovered(true);
    if (!isPinned) setIsExpanded(true);
  };
  const handleNavRailLeave = () => {
    setIsNavRailHovered(false);
  };

  return (
    <header className={s.header}>
      <div className={s.appBar}>
        <div
          className={s.left}
          onMouseEnter={handleLeftEnter}
          onMouseLeave={handleLeftLeave}
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
        className={cn(s.navRail, s[animationState])}
        ref={elementRef}
        onMouseEnter={handleNavRailEnter}
        onMouseLeave={handleNavRailLeave}
        aria-hidden={animationState === "closed"}
        inert={animationState === "closed"}
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
                <TextLink
                  to="#SectionDevelopmentProcess"
                  className={s.pageIndexLink}
                >
                  {t("nav.development")}
                </TextLink>
              </li>
              <li>
                <TextLink
                  to="#SectionProjects"
                  className={s.pageIndexLink}
                >
                  {t("nav.portfolio")}
                </TextLink>
              </li>
              <li>
                <TextLink
                  to="#SectionContact"
                  className={s.pageIndexLink}
                >
                  {t("nav.contacts")}
                </TextLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </header>
  );
};
