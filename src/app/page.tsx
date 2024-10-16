"use client";
import MainInfo from "./_components/main/info";
import SliderMain from "./_components/main/slider";

export default function Home() {
  return (
    <div>
      {/* 메인 화면 영역 */}
      <SliderMain />

      {/* 첫번째 소개 영역 */}
      <MainInfo />

      {/* 두번째 소개 영역 */}
      <section></section>
    </div>
  );
}
