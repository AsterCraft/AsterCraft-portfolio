import cn from "classnames";

import { FaRegCheckSquare } from "react-icons/fa";

interface TextItem {
  textItem: string;
}

interface CheckListItemsProps {
  data: TextItem[];
  className?: string;
}

const CheckListItems = ({ data, className }: CheckListItemsProps) => {
  return (
    <ul className="flex flex-col gap-3">
      {data.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-lg text-zinc-900"
        >
          <FaRegCheckSquare className={cn("min-h-6 min-w-6", className)} />
          <span className={className}>{item.textItem}</span>
        </li>
      ))}
    </ul>
  );
};

export default CheckListItems;
