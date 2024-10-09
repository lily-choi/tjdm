import MAIN from "../../public/assets/images/sample_main.jpg";

export default function Home() {
  return (
    <div>
      {/* 메인 화면 영역 */}
      <section
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${MAIN.src})` }}
      ></section>

      {/* 첫번째 소개 영역 */}
      <section className="h-[500px]">첫번째 영역</section>

      {/* 두번째 소개 영역 */}
      <section>두번째 영역</section>
    </div>
  );
}
