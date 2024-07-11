"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";

export default function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("dlswl1993@gmail.com");
  const [newEmail, setNewEmail] = useState(email);
  const [name, setName] = useState("황인지");
  const [newName, setNewName] = useState(name);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleButtonClick = () => {
    document.getElementById("imageUpload").click();
  };

  const handleBtnClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="mypage_top"></div>
      <main className="mypage_info">
        <div className="mypage_title">
          <Link href={"/save"}>
            <HiChevronLeft />
          </Link>
          <button onClick={handleBtnClick}>
            {isEditing ? "완료" : "수정"}
          </button>
        </div>

        <h2>정보 변경</h2>

        <div className="mypage_right">
          <div className="mypage01">
            <div className="myprofile">
              <div className="image-container">
                <img src="/img/02.png" alt="img" className="circle-image" />
              </div>
              <div className="my_btn" onClick={handleButtonClick}>
                프로필 변경
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="imageUpload"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>

          <div className="mypage02">
            <h2>개인 정보</h2>
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">이름</span>
                {isEditing ? (
                  <div className="info-edit">
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="info-display">
                    <span>{name}</span>
                  </div>
                )}
              </div>
              <div className="info-item">
                <span className="info-label">이메일 주소</span>
                {isEditing ? (
                  <div className="info-edit">
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="info-display">
                    <span>{email}</span>
                  </div>
                )}
              </div>
              {isEditing && (
                <>
                  <div className="info-item">
                    <span className="info-label">비밀번호</span>
                    <div className="info-edit">
                      <input
                        placeholder="새 비밀번호를 입력하세요."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-label">새 비밀번호</span>
                    <div className="info-edit">
                      <input
                        placeholder="새 비밀번호를 한번 더 입력하세요."
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
