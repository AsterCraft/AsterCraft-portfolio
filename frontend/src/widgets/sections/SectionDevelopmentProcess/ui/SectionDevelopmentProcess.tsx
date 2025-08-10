import cn from "classnames";

import StageDescription from "./StageDescription";
import IconStage from "./IconStage";
import TitleSection from "../../../../shared/ui/typography/TitleSection";

import { DEVELOPMENT_STAGES } from "../model/developmentData";

const SectionDevelopmentProcess = () => {
  return (
    <section className={"bg-ac-eerie-black py-15 text-white"}>
      <div className="app-container max-w-[1000px]">
        <TitleSection title="Процес створення сайту" />

        <ul className="grid gap-15 text-lg">
          {DEVELOPMENT_STAGES.map(({ stage, aligment }) => (
            <li
              key={stage}
              className={cn(
                "grid grid-cols-[auto_1fr] gap-7",
                "md:grid-cols-[1fr_auto_1fr] md:gap-14"
              )}
            >
              <IconStage
                className="order-1 md:order-2" // this is not changing. It is only for easy reading and understanding
                dots={stage}
              />
              <StageDescription
                stage={stage}
                className={cn(
                  "order-2",
                  aligment === "right" ? "md:order-3" : "md:order-1"
                )}
              />
              <div
                className={cn(
                  "hidden",
                  "md:block",
                  aligment === "right" ? "md:order-1" : "md:order-3"
                )}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionDevelopmentProcess;
