import { StartProjectBtn } from "@shared/ui";
import s from "./hero-section.module.scss";

export const HeroSection = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.heroTitle}>
        <div className={s.firstRow}>
          <span>Your website</span>
        </div>
        <div className={s.secondRow}>
          <span>with guaranteed</span>
        </div>
        <div className={s.thirdRow}>
          <span>deadlines and prices</span>
        </div>
      </div>
      <StartProjectBtn
        text="Start your project"
        className={s.cta}
      />
    </section>
  );
};
