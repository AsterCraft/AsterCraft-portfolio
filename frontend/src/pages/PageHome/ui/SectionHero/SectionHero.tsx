import Lottie from "lottie-react";
import classNames from "classnames";

import ButtonBuy from "../../../../shared/ui/buttons/ButtonBuy/ButtonBuy";

import lottieAnimation from "../../../../shared/assets/video/hero-section-animation.json";

const SectionHero = () => {
  return (
    <section className="flex h-[100vh] w-full flex-col bg-[#1a1a1a] pt-20 text-xl text-white">
      {/* title and animation in row */}
      <div className="flex flex-[5]">
        <div
          className={classNames(
            "mx-auto flex max-w-[1450px] flex-col items-center justify-around px-6",
            "sm:flex-row sm:items-center sm:justify-between",
            "xl:gap-50"
          )}
        >
          <div className="w-fit text-8xl sm:text-8xl lg:text-[10rem]">
            <h1>Aster</h1>
            <h2 className="pl-10 lg:pl-30">Craft</h2>
          </div>

          <div className="max-h-[600px] max-w-[600px]">
            <Lottie
              animationData={lottieAnimation}
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      <div className="relative flex-[2] md:flex-[1]">
        <hr className="mt-0 mb-10 text-gray-500" />

        <div className="Container flex flex-col justify-between md:flex-row">
          <p>We create websites that leave a strong and lasting impression.</p>
          <ButtonBuy
            className="absolute right-10 bottom-10 md:static md:right-auto md:bottom-auto"
            text={"Start Project"}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
