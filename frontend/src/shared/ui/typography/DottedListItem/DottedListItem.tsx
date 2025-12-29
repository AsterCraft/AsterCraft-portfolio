import s from "./DottedListItem.module.scss";

interface ListBlockProps {
  text: string;
}
export default function DottedListItem({ text }: ListBlockProps) {
  return (
    <div className={s.main}>
      {text}
    </div>
  );
}
