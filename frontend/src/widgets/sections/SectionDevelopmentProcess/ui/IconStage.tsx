import cn from "classnames";

import IconDot from "./IconDot";

type IconStageProps = {
  className: string;
  dots: number;
};

const IconStage = ({ className, dots }: IconStageProps) => {
  return (
    // circle
    <div
      className={cn(
        className,
        "bg-ac-paragraph-light relative h-16 w-16 rounded-[50%]",
        "md:h-24 md:w-24"
      )}
    >
      {/* dot(s) inside circle*/}
      <div
        className={cn(
          "transfort absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",

          {
            "flex h-full w-full items-center justify-center gap-1": dots !== 4,
          },
          {
            "flex h-7 w-7 flex-wrap gap-1 md:grid md:h-11 md:w-11 md:grid-cols-2 md:gap-1":
              dots === 4,
          }
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
