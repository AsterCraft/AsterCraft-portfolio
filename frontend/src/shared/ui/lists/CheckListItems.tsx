import { FaRegCheckSquare } from "react-icons/fa";

interface TextItem {
  textItem: string;
}

interface CheckListItemsProps {
  data: TextItem[];
}

const CheckListItems = ({ data }: CheckListItemsProps) => {
  return (
    <ul className="flex flex-col gap-3">
      {data.map((item, index) => (
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
