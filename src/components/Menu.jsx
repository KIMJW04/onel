import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemWidth = 90;
  const mobileVisibleItems = 6;
  const mobileScrollItems = 3;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1240);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 실행
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - mobileScrollItems);
    }
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, items.length - mobileVisibleItems);
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + mobileScrollItems);
    }
  };

  const items = [
    { href: "/", src: "/img/korea.png", label: "전체" },
    { href: "/seoul", src: "/img/seoul.svg", label: "서울" },
    { href: "/busan", src: "/img/busan.svg", label: "부산" },
    { href: "/incheon", src: "/img/incheon.svg", label: "인천" },
    { href: "/gwangju", src: "/img/gwangju.svg", label: "광주" },
    { href: "/dajeun", src: "/img/dajeun.svg", label: "대전" },
    { href: "/ulsan", src: "/img/ulsan.svg", label: "울산" },
    { href: "/sejong", src: "/img/sejong.svg", label: "세종" },
    { href: "/gyeonggido", src: "/img/gyeonggido.svg", label: "경기도" },
    { href: "/gangwon", src: "/img/gangwon.svg", label: "강원도" },
    { href: "/Chungcheong", src: "/img/Chungcheong.svg", label: "충청도" },
    { href: "/Jeollado", src: "/img/Jeollado.svg", label: "전라도" },
    { href: "/gyeongsangdo", src: "/img/sangdo.svg", label: "경상도" },
    { href: "/gyeongsangnamdo", src: "/img/namdo.svg", label: "경상남도" },
    { href: "/jeju", src: "/img/jeju.svg", label: "제주도" },
  ];

  return (
    <div id="main">
      <button
        className="left_button"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        <GoChevronLeft />
      </button>
      <div className="main__menu">
        <ul
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <span className="menu_text">
                  <Image
                    className="menu_icon"
                    src={item.src}
                    alt="컬처아이콘"
                    width={24}
                    height={24}
                  />
                  <span>{item.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="right_button"
        onClick={handleNext}
        disabled={currentIndex >= items.length - mobileVisibleItems}
      >
        <GoChevronRight />
      </button>
    </div>
  );
}
