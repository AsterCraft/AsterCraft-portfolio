import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { Hexagon, FolderCode, User } from 'lucide-react';
import { StartProjectBtn } from "@shared/ui";
import { MenuIcon } from "@shared/ui/icons/menu";
import { RailStateContext } from "../context/RailsStateContext";
import s from "./header.module.scss";
import { HomeIcon } from "@shared/ui/icons/home";
import Rail from "./Rail/rail";

export const Header = () => {
  const { t } = useTranslation("header");
  const [activeRailId, setActiveRailId] = useState(0);
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
    <RailStateContext.Provider value={{ activeRailId, setActiveRailId }}>
      <header className={s.header}>
        <div className={s.appBar}>
          <div className={s.left}>
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
        >
            <nav  className={s.pageIndexNav} aria-label="Page sections">
              <ul>
                <li>
                  <Link to={"/"}>
                  <Rail 
                    id={1}
                    icon={<HomeIcon />}
                    name={"home"}
                    />
                    </Link>
                </li>
                <li>
                  <a
                    href="#SectionDevelopmentProcess"
                  >
                  <Rail 
                    id={2} 
                    icon={<Hexagon />} 
                    name={t("nav.development")} 
                  />
                  </a>
                </li>
                <li>
                  <a
                                       href="#SectionProjects" 
                  >
                  <Rail 
                    id={3} 
                    icon={<FolderCode />} 
                    name={t("nav.portfolio")} 

                  />
                  </a>
                </li>
                <li>
                  <a
                  href="#SectionContact"
                  >
                  <Rail 
                    id={4} 
                    icon={<User />} 
                    name={t("nav.contacts")} 
                   
                  />
                   </a>
                </li>
              </ul>
            </nav>
        </aside>
      </header>
    </RailStateContext.Provider>
  );
};