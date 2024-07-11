"use client"

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 핸들러 함수
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // 스크롤 위치가 300px 이상일 때
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 클릭 핸들러
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll__top">
      {isVisible && (
        <div onClick={scrollToTop} className="top__btn">
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
