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

  const handleProgressChange = (page, delta) => {
    setProgress((prevProgress) => {
      const newProgress = Math.min(
        100,
        Math.max(0, prevProgress[page] + delta)
      );
      return { ...prevProgress, [page]: newProgress };
    });
  };

  return (
    <div id="wrap">
      <div className="index_left">
        <h1>페이지 리스트</h1>

        <div className="left_01">
          <h2>만든 페이지</h2>
          <ul>
            <li>
              <Link href={"/"}>1. 메인페이지</Link>
              <span> - {progress.main}%</span>
              <div className="progress-container">
                <button onClick={() => handleProgressChange("main", -10)}>
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.main}%` }}
                  ></div>
                </div>
                <button onClick={() => handleProgressChange("main", 10)}>
                  +
                </button>
              </div>
            </li>
            <li>
              <Link
                href={
                  "http://localhost:3000/about?shop_id=668cecf4beb4b18dae31cc4f"
                }
              >
                2-1. 상세페이지
                <br /> (리뷰에 사진X)
              </Link>
              <span> - {progress.aboutNoImage}%</span>
              <div className="progress-container">
                <button
                  onClick={() => handleProgressChange("aboutNoImage", -10)}
                >
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.aboutNoImage}%` }}
                  ></div>
                </div>
                <button
                  onClick={() => handleProgressChange("aboutNoImage", 10)}
                >
                  +
                </button>
              </div>
            </li>
            <li>
              <Link
                href={
                  "http://localhost:3000/about2?shop_id=668cecf4beb4b18dae31cc4f"
                }
              >
                2-2. 상세페이지
                <br />
                (리뷰에 사진O)
              </Link>
              <span> - {progress.aboutWithImage}%</span>
              <div className="progress-container">
                <button
                  onClick={() => handleProgressChange("aboutWithImage", -10)}
                >
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.aboutWithImage}%` }}
                  ></div>
                </div>
                <button
                  onClick={() => handleProgressChange("aboutWithImage", 10)}
                >
                  +
                </button>
              </div>
            </li>
            <li>
              <Link href={"/write"}>3. 리뷰작성</Link>
              <span> - {progress.writeReview}%</span>
              <div className="progress-container">
                <button
                  onClick={() => handleProgressChange("writeReview", -10)}
                >
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.writeReview}%` }}
                  ></div>
                </div>
                <button onClick={() => handleProgressChange("writeReview", 10)}>
                  +
                </button>
              </div>
            </li>
            <li>
              <Link href={"/login"}>4. 로그인</Link>
              <span> - {progress.login}%</span>
              <div className="progress-container">
                <button onClick={() => handleProgressChange("login", -10)}>
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.login}%` }}
                  ></div>
                </div>
                <button onClick={() => handleProgressChange("login", 10)}>
                  +
                </button>
              </div>
            </li>
            <li>
              <Link href={"/join"}>5. 회원가입</Link>
              <span> - {progress.join}%</span>
              <div className="progress-container">
                <button onClick={() => handleProgressChange("join", -10)}>
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.join}%` }}
                  ></div>
                </div>
                <button onClick={() => handleProgressChange("join", 10)}>
                  +
                </button>
              </div>
            </li>
            <li>
              <Link href={"/mypage"}>6. 내정보수정</Link>
              <span> - {progress.mypage}%</span>
              <div className="progress-container">
                <button onClick={() => handleProgressChange("mypage", -10)}>
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.mypage}%` }}
                  ></div>
                </div>
                <button onClick={() => handleProgressChange("mypage", 10)}>
                  +
                </button>
              </div>
            </li>
            <li>
              <Link href={"/save"}>7. 찜목록</Link>
              <span> - {progress.save}%</span>
              <div className="progress-container">
                <button onClick={() => handleProgressChange("save", -10)}>
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.save}%` }}
                  ></div>
                </div>
                <button onClick={() => handleProgressChange("save", 10)}>
                  +
                </button>
              </div>
            </li>
            <li>
              <Link href={"/save"}>8. 관리자페이지</Link>
              <span> - {progress.admin}%</span>
              <div className="progress-container">
                <button onClick={() => handleProgressChange("admin", -10)}>
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.admin}%` }}
                  ></div>
                </div>
                <button onClick={() => handleProgressChange("admin", 10)}>
                  +
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="left_01">
          <h2>만들 예정인 페이지</h2>
          <ul>
            <li>
              <Link href={"/"}>1. 비밀번호 찾기</Link>
              <span> - {progress.passwordRecovery}%</span>
              <div className="progress-container">
                <button
                  onClick={() => handleProgressChange("passwordRecovery", -10)}
                >
                  -
                </button>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${progress.passwordRecovery}%` }}
                  ></div>
                </div>
                <button
                  onClick={() => handleProgressChange("passwordRecovery", 10)}
                >
                  +
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="index_right">데이터화면</div>
    </div>
  );
}
