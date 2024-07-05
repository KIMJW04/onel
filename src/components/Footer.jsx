import Image from "next/image";
import { FaFacebookSquare, FaInstagram, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="section">
        <p>© 2024 오늘네일, Inc.</p>
        <div className="Privacy">
          <ul>
            <li>
              <Link href={"/privacy-policy"}>개인정보 처리방침</Link>
            </li>
            <li>
              <Link href={"/terms"}>이용약관</Link>
            </li>
            <li>
              <Link href={"/site-map"}>사이트맵</Link>
            </li>
            <li>
              <Link href={"/refund-policy"}>환불 정책</Link>
            </li>
            <li>
              <Link href={"/company-details"}>회사 세부정보</Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <Link href={"https://www.facebook.com/?locale=ko_KR"}>
            <FaFacebookSquare />
          </Link>
          <Link href={""}>
            <FaSquareXTwitter />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <FaInstagram />
          </Link>
          <Link href={"https://github.com/skadbstj12"}>
            <FaGithubSquare />
          </Link>
        </div>
      </div>
      <div className="detail_text">
        <p>
          웹사이트 제공자: TodayNail Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 제작자: 김진우, 황인지,
          남윤서 | 사업자 등록 번호: IE 511825 | 연락처: todaynail@gmail.com,
          웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 |
          오늘네일은 통신판매 중개자로 오늘네일 플랫폼을 통하여 게스트와 호스트
          사이에 이루어지는 통신판매의 당사자가 아닙니다. 오늘네일 플랫폼을
          통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당
          서비스를 제공하는 호스트에게 있습니다.
        </p>
      </div>
    </footer>
  );
}
