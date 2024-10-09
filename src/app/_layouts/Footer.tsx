export default function Footer() {
  return (
    <footer className="bg-[#27272c] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
            <p className="text-gray-400">
              저희는 최고의 제품과 서비스를 제공하기 위해 최선을 다합니다.
            </p>
          </div>

          {/* 링크들 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-300">
                  회사소개
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-300">
                  제품소개
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  문의사항
                </a>
              </li>
            </ul>
          </div>

          {/* 소셜 미디어 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 정보 */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; 2024 회사명. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
