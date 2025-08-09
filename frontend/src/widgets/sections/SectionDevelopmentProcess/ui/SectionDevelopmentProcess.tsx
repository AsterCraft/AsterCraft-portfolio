import cn from "classnames";

import StageDescription from "./StageDescription";
import IconStage from "./IconStage";
import TitleSection from "../../../../shared/ui/typography/TitleSection";

const SectionDevelopmentProcess = () => {
  return (
    <section className={"bg-ac-eerie-black py-15 text-white"}>
      <div className="app-container">
        <TitleSection title="Процес створення сайту" />

        <ul className="grid gap-15">
          {/* ================ stage={1} ======================================== */}

          <li
            className={cn(
              "grid grid-cols-[auto_1fr] gap-7",
              "md:grid-cols-[1fr_auto_1fr]"
            )}
          >
            <IconStage
              className="order-1 md:order-2"
              dots={1}
            />
            <StageDescription
              stage={1}
              className="order-2 md:order-3"
            />
            <div className={cn("hidden", "md:order-1 md:block")}></div>
          </li>

          {/* ===================== stage={2} =================================== */}

          <li
            className={cn(
              "grid grid-cols-[auto_1fr] gap-7",
              "md:grid-cols-[1fr_auto_1fr]"
            )}
          >
            <IconStage
              className="order-1 md:order-2"
              dots={2}
            />
            <StageDescription
              stage={2}
              className="order-2 md:order-1"
            />
            <div className={cn("hidden", "md:order-3 md:block")}></div>
          </li>

          {/* ===================== stage={3} =================================== */}

          <li
            className={cn(
              "grid grid-cols-[auto_1fr] gap-7",
              "md:grid-cols-[1fr_auto_1fr]"
            )}
          >
            <IconStage
              className="order-1 md:order-2"
              dots={3}
            />
            <StageDescription
              stage={3}
              className="order-2 md:order-3"
            />
            <div className={cn("hidden", "md:order-1 md:block")}></div>
          </li>

          {/* =================== stage={4} ===================================== */}

          <li
            className={cn(
              "grid grid-cols-[auto_1fr] gap-7",
              "md:grid-cols-[1fr_auto_1fr]"
            )}
          >
            <IconStage
              className="order-1 md:order-2"
              dots={4}
            />
            <StageDescription
              stage={4}
              className="order-2 md:order-1"
            />
            <div className={cn("hidden", "md:order-3 md:block")}></div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionDevelopmentProcess;
