import { dataStageDescription } from "../model/constants";

type StageDescritptionProps = {
  className?: string;
  stage: number;
};

const StageDescription = ({ className, stage }: StageDescritptionProps) => {
  return (
    <div className={className}>
      <h3 className="mb-1 text-2xl font-medium">
        {dataStageDescription[stage - 1].title}
      </h3>

      <hr className="border-ac-text-muted mb-5 rounded-sm border-2" />

      {dataStageDescription[stage - 1].paragraph.map((item, index) => (
        <p
          key={index}
          className="text-ac-text-muted"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default StageDescription;
