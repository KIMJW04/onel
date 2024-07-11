import "@/assets/scss/style.scss";
import ConditionalLayout from "@/components/ConditionalLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <meta name="description" content="Next.js를 활용한 프론트 엔드 포트폴리오 사이트입니다." />
        <meta name="keywords" content="Vue.js, 프론트 엔드, 웹 개발, 포트폴리오, 프로젝트 소개" />
        <title>Next.js</title>
      </head>
      <body>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
