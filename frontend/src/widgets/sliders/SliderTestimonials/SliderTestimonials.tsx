import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

import BulletBlackSquare from "../../../shared/ui/bullets/BulletBlackSquare/BulletBlackSquare";

import dataTestimonials from "../../../shared/data/dataTestimonials/dataTestimonials";

import "swiper/css";

const SliderTestimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="Container my-10">
      <div className="flex items-center">
        <BulletBlackSquare />
        <div className="leading-3 uppercase">customer testimonials</div>
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
            <blockquote>{testimonial.feedback}</blockquote>

            {/* image wrapper */}
            <div>
              <img
                src={testimonial.img}
                alt={`portrait of ${testimonial.author}`}
              />
              <div>
                <h2>{testimonial.author}</h2>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* navigation buttons */}
      <div>
        <button
          ref={prevRef}
          className="swiper-prev bg-amber-400"
        >
          {"<--"}
        </button>
        <button
          ref={nextRef}
          className="swiper-next bg-amber-400"
        >
          {"-->"}
        </button>
      </div>
    </div>
  );
};

export default SliderTestimonials;
