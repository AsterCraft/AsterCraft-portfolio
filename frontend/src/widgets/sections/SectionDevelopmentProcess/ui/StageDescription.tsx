import { dataStageDescription } from "../data/dataStageDescription";

type StageDescritptionProps = {
  className?: string;
  stage: number;
};

const StageDescription = ({ className, stage }: StageDescritptionProps) => {
  return (
    <div className={className}>
      <h3>{dataStageDescription[stage - 1].title}</h3>

      <hr />

      {dataStageDescription[stage - 1].paragraph.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default StageDescription;
