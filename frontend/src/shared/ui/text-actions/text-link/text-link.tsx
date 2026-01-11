import cn from "classnames";
import { Link, type LinkProps } from "react-router";

import s from "../text-action.module.scss";

interface Props extends LinkProps {
  children: React.ReactNode;
}

const TextLink = ({ children, className, ...props }: Props) => {
  return (
    <Link
      className={cn(s.textAction, className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TextLink;
