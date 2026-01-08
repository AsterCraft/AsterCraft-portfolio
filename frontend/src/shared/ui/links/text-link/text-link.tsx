import cn from "classnames";
import { Link, type LinkProps } from "react-router";

import s from "./text-link.module.scss";

interface Props extends LinkProps {
  children: string;
}

const TextLink = ({ children, className, ...props }: Props) => {
  return (
    <Link
      className={cn(s.textLink, className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TextLink;
