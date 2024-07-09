import Link from "next/link";

export default function page() {
  return (
    <>
      <main className="pagelists">
        <div className="end">
          <h1>만든 코딩 페이지</h1>
          <ul>
            <Link href={"/"}>메인페이지</Link>
            <Link href={`/about?shop_id=66876ffa9619e57d0dd4f0a4`}>
              상세보기 페이지
            </Link>
            <Link href={"/join"}>회원가입 페이지</Link>
            <Link href={"/login"}>로그인 페이지</Link>
            <Link href={"/write"}>리뷰작성 페이지</Link>
          </ul>
        </div>

        <div className="ing">
          <h1>진행중인 코딩 페이지</h1>
          <ul>
            <Link href={"/mypage"}>
              마이페이지-회원정보변경&나의활동(진행중)
            </Link>
            <Link href={"/"}>비밀번호찾기(예정)</Link>
          </ul>
        </div>
      </main>
    </>
  );
}
