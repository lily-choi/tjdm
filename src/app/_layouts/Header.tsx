"use client";
import Link from "next/link";
import { RiGlobalLine } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 메뉴 상태 관리
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false); // 언어 메뉴 상태 관리
  const langMenuRef = useRef<HTMLDivElement>(null); // 언어 메뉴 참조

  useEffect(() => {
    const handleScroll = () => {
      setIsLangMenuOpen(false);
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // 메뉴 열기/닫기
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen); // 언어 메뉴 열기/닫기
  };

  // 외부 클릭 시 언어 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangMenuOpen]);

  return (
    <header
      className={`fixed w-full transition-colors duration-300 z-[999] ${
        scrolling ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 영역 */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold">로고</span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex space-x-14">
            <Link href="/about" className="hover:underline text-title-sm">
              회사소개
            </Link>
            <Link href="/blog" className="hover:underline text-title-sm">
              제품소개
            </Link>
            <Link href="/contact" className="hover:underline text-title-sm">
              문의사항
            </Link>
          </div>

          {/* 언어변경 */}
          <div
            className="hidden md:flex space-x-2 items-center relative"
            ref={langMenuRef}
          >
            <RiGlobalLine
              size={20}
              onClick={toggleLangMenu}
              className="cursor-pointer relative top-[1px]"
            />
            <span
              className="cursor-pointer text-title-xs"
              onClick={toggleLangMenu}
            >
              KO
            </span>
            {isLangMenuOpen && (
              <div className="absolute right-0 bg-white shadow-md mt-1 rounded-md">
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">
                  한국어
                </button>
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">
                  English
                </button>
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">
                  中文
                </button>
              </div>
            )}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu} // 클릭 시 메뉴 토글
            >
              {/* 햄버거 아이콘 */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 네비게이션 */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="flex justify-between items-center px-4 py-4">
          <h2 className="text-xl font-bold">메뉴</h2>
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-black"
            aria-label="Close menu"
          >
            {/* X 버튼 */}
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 pt-4 pb-3 space-y-1">
          <Link href="/about" className="block text-gray-600 hover:underline">
            About
          </Link>
          <Link href="/blog" className="block text-gray-600 hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
