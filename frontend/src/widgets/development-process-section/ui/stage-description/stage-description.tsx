import { TextSlideUp } from "@shared/ui/typography";

import { dataStageDescription } from "../../model/constants";

import s from "./stage-description.module.scss";

type StageDescritptionProps = {
  className?: string;
  stage: number;
};

export const StageDescription = ({
  className,
  stage,
}: StageDescritptionProps) => {
  return (
    <div className={className}>
      {/* <h3 className="mb-1 text-2xl font-medium">
        {dataStageDescription[stage - 1].title}
      </h3> */}
      <TextSlideUp
        as="h2"
        className={s.title}
        text={dataStageDescription[stage - 1].title}
      />

      <hr className="border-ac-text-muted mb-5 rounded-sm border-2" />

      {dataStageDescription[stage - 1].paragraph.map((item, index) => (
        // <p
        //   key={index}
        //   className="text-ac-text-muted"
        // >
        //   {item}
        // </p>
        <TextSlideUp
          as="p"
          text={item}
          delay={index * 0.3}
          className={s.paragraphNew}
          key={index}
        />
      ))}
    </div>
  );
};
