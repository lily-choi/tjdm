"use client";

import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderMain() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      content: (
        <div
          className="h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(/assets/images/main_1_f.jpg)` }}
        >
          <div className="flex items-center flex-col text-white gap-6 px-[10%]">
            <h2 className="text-heading-xs sm:text-heading-lg text-center">
              기계 및 사용환경에 맞춰 <br className="block sm:hidden" />
              최적화된 휠 제작
            </h2>
            <h3 className="text-heading-x text-grey-60 text-center sm:text-heading-s">
              최적화된 휠로 작업 결과물 <br className="block sm:hidden" /> 성능
              및 품질 향상을 보장합니다.
            </h3>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/images/main_2.jpg)` }}
        >
          <h2 className="text-4xl text-center pt-40"></h2>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(/assets/images/main_3.jpg)` }}
        >
          <h2 className="text-4xl text-center pt-40"></h2>
        </div>
      ),
    },
  ];

  return (
    <section className="h-screen relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full">
            {slide.content}
          </div>
        ))}
      </Slider>
      <div
        id="section10"
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <span></span>
      </div>
    </section>
  );
}
