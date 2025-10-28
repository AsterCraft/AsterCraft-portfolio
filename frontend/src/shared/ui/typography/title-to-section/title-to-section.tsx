import cn from "classnames";

type TitleSectionProps = {
  title: string;
  className?: string;
};

export const TitleToSection = ({ title, className }: TitleSectionProps) => {
  return <h2 className={cn("mb-3 text-4xl", className)}>{title}</h2>; // to do: remove mb-3 from classNames
};
