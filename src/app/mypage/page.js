"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  const [showMyPage, setShowMyPage] = useState(true);
  const [showNailBox, setShowNailBox] = useState(true);
  const [activeButton, setActiveButton] = useState("mypage");

  const handleMyPageClick = () => {
    setShowMyPage(true);
    setActiveButton("mypage");
  };

  const handleActivitiesClick = () => {
    setShowMyPage(false);
    setActiveButton("activities");
  };

  const handleNailClick = () => {
    setShowNailBox(true);
  };

  const handleReviewClick = () => {
    setShowNailBox(false);
  };

  return (
    <>
      <Header />
      <section id="mypage">
        <div className="top-line"></div>
        <div className="mypage-container">
          <div className="mypage-menu">
            <button
              className={`mypage-btn ${
                activeButton === "mypage" ? "active" : ""
              }`}
              onClick={handleMyPageClick}
            >
              회원 정보 및 변경
            </button>
            <button
              className={`my-activities-btn ${
                activeButton === "activities" ? "active" : ""
              }`}
              onClick={handleActivitiesClick}
            >
              나의 활동
            </button>
          </div>
          {showMyPage ? (
            <div className="mypage-section">
              <div className="mypage_info">
                <div className="mypage_left">
                  <img
                    src="../img/01.jpeg"
                    alt="프로필이미지"
                    className="profile_img"
                  />
                  <button className="profile_chg">프로필 사진 변경</button>
                </div>

                <div className="mypage_right">
                  <div className="info-row">
                    <span className="info-label">현재 닉네임</span>
                    <p>남윤서</p>
                  </div>
                  <div className="info-row">
                    <span className="info-label">닉네임</span>
                    <input
                      className="info-input"
                      type="text"
                      placeholder="변경할 닉네임을 입력해주세요."
                    />
                  </div>
                  <div className="info-row">
                    <span className="info-label">현재 비밀번호</span>
                    <input
                      className="info-input"
                      type="password"
                      placeholder="현재 비밀번호를 입력해주세요."
                    />
                  </div>
                  <div className="info-row">
                    <span className="info-label">새 비밀번호</span>
                    <input
                      className="info-input"
                      type="password"
                      placeholder="새 비밀번호를 입력해주세요."
                    />
                  </div>
                  <button className="profile_chg">변경하기</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="activities-section">
              <h2 className="activities-title">나의 활동</h2>
              <div className="activities-btn">
                <button className="my-nail" onClick={handleNailClick}>
                  내가 찜한 네일샵
                </button>
                <button className="my-review" onClick={handleReviewClick}>
                  내가 작성한 리뷰
                </button>
              </div>
              {showNailBox ? (
                <div className="my-nail-box">
                  <div className="view-card">
                    <img src="../../img/02.png" alt="아무사진 넣음" />
                    <h1 className="card-title">OOO 네일샵</h1>
                    <p className="card-text">
                      경기도 안산시 상록구 어쩌고 위치함
                    </p>
                    <div className="view-btn-box"></div>
                  </div>
                  <div className="view-card">
                    <img src="../../img/02.png" alt="아무사진 넣음" />
                    <h1 className="card-title">OOO 네일샵</h1>
                    <p className="card-text">
                      경기도 안산시 단원구 어쩌고 저쩌고
                    </p>
                    <div className="view-btn-box"></div>
                  </div>
                  <div className="view-card">
                    <img src="../../img/02.png" alt="아무사진 넣음" />
                    <h1 className="card-title">XXX 네일샵</h1>
                    <p className="card-text">asdasdsad</p>
                    <div className="view-btn-box"></div>
                  </div>
                </div>
              ) : (
                <div className="my-review-box">
                  <div className="view-card">
                    <img src="../../img/02.png" alt="아무사진 넣음" />
                    <h1 className="card-title">네일 개망했네요 ㅠㅠ</h1>
                    <p className="card-text">asdasdsad</p>
                    <div className="view-btn-box">
                      <button className="view-btn">수정</button>
                      <button className="view-btn">삭제</button>
                    </div>
                  </div>
                  <div className="view-card">
                    <img src="../../img/02.png" alt="아무사진 넣음" />
                    <h1 className="card-title">OOO 네일에서 너무 잘 됐어요</h1>
                    <p className="card-text">asdasdsad</p>
                    <div className="view-btn-box">
                      <button className="view-btn">수정</button>
                      <button className="view-btn">삭제</button>
                    </div>
                  </div>
                  <div className="view-card">
                    <img src="../../img/02.png" alt="아무사진 넣음" />
                    <h1 className="card-title">제 네일 한 거 좀 봐주십쇼</h1>
                    <p className="card-text">asdasdsad</p>
                    <div className="view-btn-box">
                      <button className="view-btn">수정</button>
                      <button className="view-btn">삭제</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
