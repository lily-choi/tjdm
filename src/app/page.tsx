"use client";
import Slider from "react-slick";
import MAIN from "../../public/assets/images/sample_main.jpg";
import MainInfo from "./_components/main/info";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 5초마다 슬라이드 전환
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      content: (
        <div
          style={{ backgroundImage: `url(${MAIN.src})` }}
          className="h-screen bg-cover bg-center"
        ></div>
      ),
    },
    {
      id: 2,
      content: (
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundColor: "#eaeaea" }}
        >
          <h2 className="text-4xl text-center pt-40">Second Slide</h2>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div
          className="h-screen bg-cover bg-center"
          style={{ backgroundColor: "#cccccc" }}
        >
          <h2 className="text-4xl text-center pt-40">Third Slide</h2>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* 메인 화면 영역 */}
      <section className="h-screen relative overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="w-full">
              {slide.content}
            </div>
          ))}
        </Slider>
      </section>

      {/* 첫번째 소개 영역 */}
      <MainInfo />

      {/* 두번째 소개 영역 */}
      <section></section>
    </div>
  );
}
