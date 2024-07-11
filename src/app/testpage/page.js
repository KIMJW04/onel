"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const initialProgress = {
    main: 100,
    aboutNoImage: 80,
    aboutWithImage: 80,
    writeReview: 50,
    login: 70,
    join: 90,
    mypage: 60,
    save: 40,
    admin: 20,
    passwordRecovery: 0,
  };

  const [progress, setProgress] = useState(initialProgress);
  const [iframeSrc, setIframeSrc] = useState("https://onel.vercel.app/");

  const handleProgressChange = (page, delta) => {
    setProgress((prevProgress) => {
      const newProgress = Math.min(
        100,
        Math.max(0, prevProgress[page] + delta)
      );
      return { ...prevProgress, [page]: newProgress };
    });
  };

  const handleLinkClick = (url) => {
    setIframeSrc(url);
  };

  const pages = [
    { label: "1. 메인페이지", key: "main", url: "https://onel.vercel.app/" },
    {
      label: "2-1. 상세페이지 (리뷰에 사진X)",
      key: "aboutNoImage",
      url: "https://onel.vercel.app/about?shop_id=668cecf4beb4b18dae31cc4f",
    },
    {
      label: "2-2. 상세페이지 (리뷰에 사진O)",
      key: "aboutWithImage",
      url: "https://onel.vercel.app/about2?shop_id=668cecf4beb4b18dae31cc4f",
    },
    { label: "3. 리뷰작성", key: "writeReview", url: "https://onel.vercel.app/write" },
    { label: "4. 로그인", key: "login", url: "https://onel.vercel.app/login" },
    { label: "5. 회원가입", key: "join", url: "https://onel.vercel.app/join" },
    { label: "6. 내정보수정", key: "mypage", url: "https://onel.vercel.app/mypage" },
    { label: "7. 찜목록", key: "save", url: "https://onel.vercel.app/save" },
    { label: "8. 관리자페이지", key: "admin", url: "https://onel.vercel.app/admin" },
    {
      label: "1. 비밀번호 찾기",
      key: "passwordRecovery",
      url: "https://onel.vercel.app/password-recovery",
    },
  ];

  return (
    <div id="wrap">
      <div className="index_left">
        <h1>페이지 리스트</h1>
        <div className="left_01">
          <h2>만든 페이지</h2>
          <ul>
            {pages.slice(0, 8).map((page) => (
              <li key={page.key}>
                <button onClick={() => handleLinkClick(page.url)}>
                  {page.label}
                </button>
                <span> - {progress[page.key]}%</span>
                <div className="progress-container">
                  <button onClick={() => handleProgressChange(page.key, -10)}>
                    -
                  </button>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${progress[page.key]}%` }}
                    ></div>
                  </div>
                  <button onClick={() => handleProgressChange(page.key, 10)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="left_01">
          <h2>만들 예정인 페이지</h2>
          <ul>
            {pages.slice(8).map((page) => (
              <li key={page.key}>
                <button onClick={() => handleLinkClick(page.url)}>
                  {page.label}
                </button>
                <span> - {progress[page.key]}%</span>
                <div className="progress-container">
                  <button onClick={() => handleProgressChange(page.key, -10)}>
                    -
                  </button>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${progress[page.key]}%` }}
                    ></div>
                  </div>
                  <button onClick={() => handleProgressChange(page.key, 10)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="index_right">
        <iframe src={iframeSrc} width="100%" height="100%" />
      </div>
    </div>
  );
}
