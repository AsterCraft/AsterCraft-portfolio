import { FaRegCheckSquare } from "react-icons/fa";

interface TextItem {
  textItem: string;
}

interface CheckListItemsProps {
  items: TextItem[];
}

const CheckListItems = ({ items }: CheckListItemsProps) => {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-lg text-zinc-900"
        >
          <FaRegCheckSquare className="min-h-6 min-w-6" />
          <span>{item.textItem}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckListItems;
