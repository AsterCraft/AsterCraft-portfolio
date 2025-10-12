import cn from "classnames";
import { useEffect, useRef, useState } from "react";

import { StageDescription } from "../stage-description/stage-description";
import IconStage from "../IconStage";
import TitleSection from "../../../../shared/ui/typography/TitleSection";

import { DEVELOPMENT_STAGES } from "../../model/constants";

export const SectionDevelopmentProcess = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(DEVELOPMENT_STAGES.length).fill(null)
  );

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Очищуємо попередні таймери
            timeouts.forEach(clearTimeout);
            timeouts = [];

            // Запускаємо послідовну анімацію всіх ліній
            DEVELOPMENT_STAGES.forEach((_, index) => {
              if (index < DEVELOPMENT_STAGES.length - 1) {
                const timeout = setTimeout(() => {
                  setVisibleLines((prev) => {
                    if (!prev.includes(index)) {
                      return [...prev, index];
                    }
                    return prev;
                  });
                }, index * 800); // 800мс між кожною лінією
                timeouts.push(timeout);
              }
            });
          } else {
            // Сховати лінії коли секція виходить з viewport
            setVisibleLines([]);
            timeouts.forEach(clearTimeout);
            timeouts = [];
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={"bg-ac-eerie-black py-15 text-white"}
      id="SectionDevelopmentProcess"
    >
      <div className="app-container max-w-[1000px]">
        <TitleSection title="Процес створення сайту" />

        <ul className="grid text-lg">
          {DEVELOPMENT_STAGES.map(({ stage, aligment }, index) => (
            <li
              key={stage}
              data-stage={stage}
              className={cn(
                "grid grid-cols-[auto_1fr] gap-7",
                "md:grid-cols-[1fr_auto_1fr] md:gap-14"
              )}
            >
              <IconStage
                className="order-1 md:order-2"
                dots={stage}
                showLine={index < DEVELOPMENT_STAGES.length - 1}
                lineVisible={visibleLines.includes(index)}
                stageIndex={index}
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
