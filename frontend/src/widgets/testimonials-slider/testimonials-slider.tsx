import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import classNames from "classnames";

import { LabelToSection } from "@shared/ui/typography";

import { dataTestimonials } from "@shared/lib/constants";

import "swiper/css";
import s from "./testimonials-slider.module.scss";

export const TestimonialsSlider = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="Container my-10">
     <LabelToSection text="відгуки" />

      {/* Swiper and navigation buttons */}
      <div
        className={classNames(
          "flex flex-col",
          "lg:flex-row lg:justify-between"
        )}
      >
        <Swiper
          className="!mr-0 !ml-0 w-full max-w-[1200px]"
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop={true}
          onSwiper={(swiper) => {
            const navigation = swiper.params.navigation;

            if (navigation && typeof navigation !== "boolean") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }

            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={40}
          slidesPerView={1}
          autoHeight={false}
        >
          {dataTestimonials.map((testimonial, index) => (
            <SwiperSlide
              // className="flex h-full justify-between"
              className={s.swiperSlide}
              key={index}
            >
              <blockquote className="mb-5 text-2xl">{`❝ ${testimonial.feedback} ❞`}</blockquote>

              {/* image wrapper */}
              <div className="mt-auto flex items-center gap-4">
                <img
                  className="size-15 rounded-lg"
                  src={testimonial.img}
                  alt={`portrait of ${testimonial.author}`}
                />
                <div>
                  <h2 className="text-2xl font-medium">{testimonial.author}</h2>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation buttons */}
        <div className="mt-5 flex gap-4">
          <button
            ref={prevRef}
            className="swiper-prev bg-ac-btn-action flex size-13 cursor-pointer items-center justify-center rounded-md transition-transform duration-10 ease-out active:scale-90"
          >
            <FaArrowLeft className="size-5" />
          </button>
          <button
            ref={nextRef}
            className="swiper-next bg-ac-btn-action flex size-13 cursor-pointer items-center justify-center rounded-md transition-transform duration-10 ease-out active:scale-90"
          >
            <FaArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
