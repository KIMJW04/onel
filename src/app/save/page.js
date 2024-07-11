"use client";

import React, { useState } from "react";
import FilledStar from "@/components/FilledStar";
import Star from "@/components/Star";

import { HiChevronLeft } from "react-icons/hi";
import Link from "next/link";

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="mypage_top"></div>
      <main className="save_info">
        <div className="save_title">
          <Link href={"/mypage"}>
            <HiChevronLeft />
          </Link>
          <button onClick={handleButtonClick}>
            {isEditing ? "완료" : "수정"}
          </button>
        </div>

        <h2>찜한 네일샵</h2>
        <div className="save_right">
          <div className="save01">
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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                    </p>
                  </div>
                </div>
              </div>

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
                      {[...Array(4)].map((_, i) => (
                        <FilledStar
                          key={i}
                          className="star-icon"
                          color="#FFD700"
                          size={48}
                        />
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <Star
                          key={`empty-${i}`}
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
        </div>
      </main>
    </>
  );
}
