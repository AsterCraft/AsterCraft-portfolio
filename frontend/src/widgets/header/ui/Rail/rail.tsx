import React, { useContext } from "react";
import cn from "classnames";
import s from "./rail.module.scss";
import { RailStateContext } from "@widgets/header/RailsStateContext";

interface RailProps {
  name: string;
  id: number;
  icon: React.ReactElement;
  onClick?: () => void;
}

export default function Rail({ name, icon, onClick, id }: RailProps) {
  const { activeRailId, setActiveRailId } = useContext(RailStateContext);

  const isActive = activeRailId === id;

  const handleClick = () => {
    setActiveRailId(isActive ? 0 : id);
    onClick?.();
  };

  return (
    <button
      className={cn(s.rail, {
        [s.active]: isActive,
      })}
      onClick={handleClick}
      aria-pressed={isActive}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      <span className={s.label}>{name}</span>
      {isActive && <span className={s.indicator} />}
    </button>
  );
}