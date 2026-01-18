import type React from "react";
import s from "./DottedListItem.module.scss";

interface DottedListItemProps {
  children: React.ReactNode;
}
export default function DottedListItem({ children }: DottedListItemProps) {
  return (
    <li className={s.main}>
      {children}
    </li>
  );
}
