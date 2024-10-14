import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function MainInfo() {
  return (
    <section className="py-[120px] text-center px-10 bg-grey-100 ">
      <h4 className="text-heading-md mb-6 text-grey-900 sm:text-heading-lg">
        정밀성을 위한 <br className="block sm:hidden" /> 최적의 선택 <br />{" "}
        천진동명다이아몬드
      </h4>
      <p className="text-grey-800 text-caption-r mb-10 sm:text-caption-md">
        다이아몬드 휠은 공구나 장비에서 사용되는 다이아몬드 입자들이 포집
        되어있는 특수한 종류의 휠을 말합니다.
        <br className="" />
        다이아몬드는 매우 단단한 물질이기 때문에 매우 강력하고 내구성이
        뛰어나며,
        <br className="hidden sm:block" />
        주로 경화된 금속이나 세라믹, 유리 등의 고강도 물질을 가공할때
        사용되어집니다.
      </p>
      <Link
        className="text-grey-50 flex items-center justify-center gap-1 text-caption-r sm:text-caption-md"
        href={"/about"}
      >
        <span>회사소개 바로가기</span>
        <FiArrowRight />
      </Link>
    </section>
  );
}
