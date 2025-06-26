import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import BulletBlackSquare from "../../../shared/ui/bullets/BulletBlackSquare/BulletBlackSquare";

import dataTestimonials from "../../../shared/data/dataTestimonials";

import "swiper/css";

const SliderTestimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="Container my-10">
      <div className="mb-7 flex items-center">
        <BulletBlackSquare />
        <div className="leading-4 uppercase">customer testimonials</div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        loop={true}
        onSwiper={(swiper) => {
          // fix refs after mount

          // @ts-expect-error | because it is from swiper library
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-expect-error | because it is from swiper library
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={40}
        slidesPerView={1}
      >
        {dataTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
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
          className="swiper-prev bg-ac-btn-slider-navigation flex size-13 items-center justify-center rounded-md"
        >
          <FaArrowLeft className="size-5" />
        </button>
        <button
          ref={nextRef}
          className="swiper-next bg-ac-btn-slider-navigation flex size-13 items-center justify-center rounded-md"
        >
          <FaArrowRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default SliderTestimonials;
