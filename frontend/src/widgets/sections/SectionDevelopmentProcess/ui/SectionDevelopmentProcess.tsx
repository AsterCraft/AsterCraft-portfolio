import cn from "classnames";

import StageDescription from "./StageDescription";
import IconStage from "./IconStage";

const SectionDevelopmentProcess = () => {
  return (
    <section
      className={cn("app-container", "bg-ac-eerie-black pt-10 text-white")}
    >
      <h2>Процес створення сайту</h2>

      <div className="grid grid-cols-[1fr_100px_1fr]">
        <IconStage
          className="col-start-2"
          dots={1}
        />
        <StageDescription className="col-span-1 col-start-3" />
        <div></div>
      </div>
    </section>
  );
};

export default SectionDevelopmentProcess;
