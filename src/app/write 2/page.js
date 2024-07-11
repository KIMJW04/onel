"use client";

import { useState } from "react";
import Link from "next/link";
import Star from "@/components/Star";
import FilledStar from "@/components/FilledStar";

export default function WritePage() {
  // 별의 상태를 관리하는 상태 변수 추가
  const [rating, setRating] = useState([false, false, false, false, false]);

  // 별을 클릭할 때 상태를 변경하는 함수
  const handleStarClick = (index) => {
    const newRating = [...rating];
    newRating[index] = !newRating[index];
    setRating(newRating);
  };

  return (
    <>
      <hr className="write_divider" />
      <main className="reviewWrite">
        <div className="write_left">
          <h1>
            여기 네일샵은
            <br />
            어떠셨나요?
          </h1>

          <div className="list">
            <div className="main__list">
              <div className="list_item">
                <img
                  className="list_image"
                  src="https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fvideo-phinf.pstatic.net%2F20240630_3%2F17197593444090bmon_JPEG%2FUZ77pbYt6g_03.jpg"
                  alt="img"
                />
                <div className="list_text">
                  <span className="list_title">네일플로리</span>
                </div>
                <div className="list_icon">
                  <p>리뷰 : 3개</p>
                  <p>
                    평점 :{" "}
                    {[...Array(5)].map((_, i) => (
                      <FilledStar
                        key={i}
                        className="star-icon"
                        color="#FFD700"
                        size={48}
                      />
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="write_right">
          <div className="write01">
            <h2>평점</h2>
            <div className="rating">
              {rating.map((isFilled, index) => (
                <div key={index} onClick={() => handleStarClick(index)}>
                  {isFilled ? (
                    <FilledStar color="#FFD700" size={48} className="star" />
                  ) : (
                    <Star color="#FFD700" size={48} className="star" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="write02">
            <h2>리뷰 제목</h2>
            <input
              placeholder="리뷰제목을 입력해주세요."
              rows="1"
              minLength="20"
            ></input>
            <p>20자이내로 작성 가능합니다.</p>
          </div>

          <div className="write03">
            <h2>리뷰 내용</h2>
            <input
              placeholder="리뷰내용을 입력해주세요."
              rows="50"
              minLength="1500"
            ></input>
            <p>1,500자이내로 작성 가능합니다.</p>
          </div>

          <div className="write04">
            <h2>사진 추가하기</h2>
            <div className="uploadedImageContainer">
              <img src="/img/02.png" alt="Uploaded" className="uploadedImage" />
            </div>
            <div className="uploadButtonContainer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="imageUpload"
              />
            </div>
          </div>

          <Link href={"/about"}>
            <button type="submit" className="write-button">
              작성 완료
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
