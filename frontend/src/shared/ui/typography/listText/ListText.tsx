import s from "./ListText.module.scss";
import { DotIcon } from "@shared/ui/icons";
interface ListBlockProps {
  text: string;
}
export default function ListText({ text }: ListBlockProps) {
  return (
    <div className={s.main}>
      <span className={s.dot}>
        <DotIcon />
      </span>{" "}
      {text}
    </div>
  );
}