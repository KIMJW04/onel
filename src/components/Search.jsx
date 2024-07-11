"use client";
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Search() {
  const threshold = 0; // 원하는 높이로 설정
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY) {
            // 스크롤 다운
            if (!isScrollingDown) {
              setIsScrollingDown(true);
              gsap.to('#search', {
                y: -50,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
          } else {
            // 스크롤 업
            if (isScrollingDown && currentScrollY <= threshold) {
              setIsScrollingDown(false);
              gsap.to('#search', {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
          }
          setLastScrollY(currentScrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isScrollingDown]);

  return (
    <>
      <div id="search">
        <div className="search-bar">
          <div className="search-item">
            <label htmlFor="destination">네일샵</label>
            <input type="text" id="destination" placeholder="네일샵 검색" />
          </div>
          <div className="search-item">
            <label htmlFor="checkin">지역</label>
            <input type="text" id="checkin" placeholder="지역 추가" />
          </div>
          <div className="search-item">
            <label htmlFor="checkout">세부지역</label>
            <input type="text" id="checkout" placeholder="세부지역 추가" />
          </div>
          <button type="submit" className="search-button">
            <Image src="/img/loupe.png" alt="검색" width={20} height={20} />
          </button>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
}
