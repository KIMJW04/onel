import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Search from "@/components/Search";

import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

export default function WritePage() {
  return (
    <>
      <Header />
      <Search />
      <main className="reviewWrite">
        <div className="header">
          <img
            src="/img/02.png" // 프로필 이미지 경로를 설정하세요.
            alt="Profile"
            className="profileImage"
          />
          <div>
            <h2 className="nickname">닉네임</h2>
            <p className="date">2024.07.03</p>
          </div>
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <FaRegStar key={index} className="star" />
          ))}
        </div>
        <textarea
          className="textarea"
          placeholder="리뷰를 작성해주세요."
        ></textarea>
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
        <Link href={"/about"}>
          <button type="submit" className="write-button">
            작성 완료
          </button>
        </Link>
      </main>

      <Footer />
    </>
  );
}
