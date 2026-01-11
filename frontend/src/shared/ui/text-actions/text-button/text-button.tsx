import cn from "classnames";

import s from "../text-action.module.scss";

interface Props extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

const TextButton = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cn(s.textAction, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default TextButton;
