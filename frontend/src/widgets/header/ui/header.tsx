import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import {
  StartProjectBtn,
  TextLink,
  TextButton,
  SunnyIcon,
  BedtimeIcon,
} from "@shared/ui";
import { MenuIcon } from "@shared/ui/icons/menu";
import { HomeIcon } from "@shared/ui/icons/home";
import { useUnmountAnimation } from "@shared/lib/motion";
import { useThemeStore } from "@shared/lib/theme/theme-store";

import s from "./header.module.scss";

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isNavRailHovered, setIsNavRailHovered] = useState(false);

  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const { t, i18n } = useTranslation("header");

  const menuRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isPinned) return;

    const handleCLickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsPinned(false);
        setIsExpanded(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPinned(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleCLickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleCLickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isPinned]);

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
            aria-label={t("appBar.menuButton.ariaLabel")}
            aria-pressed={isPinned}
            onClick={handleMenuClick}
            ref={menuRef}
          >
            <MenuIcon className={s.menuIcon} />
          </button>
          <Link
            to={`/${i18n.language}/`}
            className={s.brandName}
          >
            {t("appBar.brandName")}
          </Link>
        </div>

        <StartProjectBtn
          text={t("appBar.startProjectBtn")}
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
            aria-label={t("navRail.routingNav.ariaLabel")}
          >
            <ul>
              <li>
                <TextLink
                  to={`/${i18n.language}/`}
                  className={s.navItem}
                >
                  <HomeIcon className={s.navIcon} />
                  <span className={s.navLabel}>
                    {t("navRail.routingNav.home")}
                  </span>
                </TextLink>
              </li>
            </ul>

            <TextButton
              className={s.textThemeToggle}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              <div className={s.themeIconContainer}>
                <SunnyIcon
                  className={cn(s.themeIcon, { [s.active]: theme === "dark" })}
                  aria-hidden={theme !== "dark"}
                />
                <BedtimeIcon
                  className={cn(s.themeIcon, { [s.active]: theme === "light" })}
                  aria-hidden={theme !== "light"}
                />
              </div>
            </TextButton>
          </nav>

          <nav
            className={s.pageIndex}
            aria-label={t("navRail.pageIndex.ariaLabel")}
          >
            <ul className={s.pageIndexList}>
              <li>
                <TextLink
                  to="#SectionDevelopmentProcess"
                  className={s.pageIndexLink}
                >
                  {t("navRail.pageIndex.development")}
                </TextLink>
              </li>
              <li>
                <TextLink
                  to="#SectionProjects"
                  className={s.pageIndexLink}
                >
                  {t("navRail.pageIndex.portfolio")}
                </TextLink>
              </li>
              <li>
                <TextLink
                  to="#SectionContact"
                  className={s.pageIndexLink}
                >
                  {t("navRail.pageIndex.contacts")}
                </TextLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </header>
  );
};
