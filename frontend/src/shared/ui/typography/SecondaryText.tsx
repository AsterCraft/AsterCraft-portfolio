import cn from "classnames";

type SecondaryTextProps = {
  text: string;
  className?: string;
};

const SecondaryText = ({ text, className }: SecondaryTextProps) => {
  return <p className={cn(className, "text-lg text-zinc-600")}>{text}</p>;
};

export default SecondaryText;
