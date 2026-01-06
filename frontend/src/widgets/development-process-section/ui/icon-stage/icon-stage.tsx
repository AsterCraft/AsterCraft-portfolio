import cn from "classnames";

import { DotIcon } from "../dot-icon/dot-icon";

import s from "./icon-stage.module.scss";

type IconStageProps = {
  className?: string;
  dots: number;
};

export const IconStage = ({ className, dots }: IconStageProps) => {
  return (
    // circle
    <div
      data-circle="true"
      className={cn(className, s.circle)}
    >
      {/* dot(s) inside circle*/}
      <div
        className={cn(
          s.dotsContainer,
          {
            [s.one__two__three__dots]: dots !== 4,
          },
          {
            [s.four__dots]: dots === 4,
          }
        )}
      >
        {Array.from({ length: dots }, (_, index) => (
          <DotIcon key={index} />
        ))}
      </div>
    </div>
  );
};
