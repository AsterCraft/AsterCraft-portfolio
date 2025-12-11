import { StartProjectBtn } from "@shared/ui";
import s from "./about-us-section.module.scss";
import gs from "@shared/styles/global.module.scss";
import cn from "classnames";
import { useRef } from "react";
import useInViewState from "@shared/viewport/useInViewState";
import { ProjectCard } from "@shared/ui/cards";

export default function AboutUsSection() {
  const ref = useRef<HTMLElement>(null!);
  const viewState = useInViewState(ref, { once: true, amount: 0.6 });

  return (
    <section
      className={s.aboutSection}
      aria-labelledby="about-heading"
      ref={ref}
    >
      <div className={cn(s.wrapper, gs.container)}>
        <ProjectCard
          content={{
            url: "https://www.laura-lewandowski.com/",
            imgPath: "/img/projects/smart-chiefs.png",
            name: "Smart Chiefs",
            description:
              "Сайт для Smart Chiefs яка інтегрує штучний інтелект в рекламу в Німеччині",
          }}
        />

        <div className={s.content}>
          <h2
            className={cn(s.heading, viewState && s.animateUnderline)}
            id="about-heading"
          >
            Про нас
          </h2>

          <div className={s.textContent}>
            <h3 className={s.subtitle}>
              Ми пропонуємо професійне створення та просування сайтів
            </h3>
            <p className={s.paragraph}>
              Наші спеціалісти зі створення веб-сайтів можуть розробити
              практичне онлайн-рішення для вашої організації відповідно до
              конкретних вимог та викликів вашої ніші ринку.
            </p>
          </div>

          <StartProjectBtn text="Обговорити проект" />
        </div>
      </div>
    </section>
  );
}
