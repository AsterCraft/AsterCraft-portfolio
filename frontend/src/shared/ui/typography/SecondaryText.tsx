import cn from "classnames";

type SecondaryTextProps = {
  text: string;
  className?: string;
};

const SecondaryText = ({ text, className }: SecondaryTextProps) => {
  return (
    <div className="text-lg text-zinc-600">
      <p className={className}>{text}</p>
    </div>
  );
};

export default SecondaryText;
