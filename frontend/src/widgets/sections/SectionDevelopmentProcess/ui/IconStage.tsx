import cn from "classnames";

import IconDot from "./IconDot";

type IconStageProps = {
  className: string;
  dots: number;
};

const IconStage = ({ className, dots }: IconStageProps) => {
  return (
    <div
      className={cn(
        className,
        "bg-ac-paragraph-light relative col-span-1 h-24 w-24 rounded-[50%]"
      )}
    >
      <div
        className={cn(
          "transfort absolute top-[50%] left-[50%] h-5 w-5 -translate-x-1/2 -translate-y-1/2",
          {
            "flex h-full w-full items-center justify-center gap-1": dots !== 4,
          },
          { "grid h-11 w-11 grid-cols-2 gap-1": dots === 4 }
        )}
      >
        {Array.from({ length: dots }, (_, index) => (
          <IconDot key={index} />
        ))}
      </div>
    </div>
  );
};

export default IconStage;
