import { StartProjectBtn } from "@shared/ui";
import s from "./about-us-section.module.scss";
import gs from "@shared/styles/global.module.scss";
import cn from "classnames";
import { useRef } from "react";
import useInViewState from "@shared/viewport/useInViewState";


export default function AboutUsSection() {
  const ref = useRef<HTMLElement>(null!);
  const viewState = useInViewState(ref, {once: true, amount: 0.6});

  return (
    <section
      className={s.aboutSection}
      aria-labelledby="about-heading"
      ref={ref}
    >
      <div className={cn(s.wrapper, gs.container)}>
        <div className={cn(s.heading, viewState && s.animateUnderline)}>
          <h2 id="about-heading">Про нас</h2>
        </div>

        <div className={s.content}>
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

          <div className={s.buttonWrapper}>
            <StartProjectBtn text="Обговорити проект" />
          </div>
        </div>
      </div>
    </section>
  );
}
