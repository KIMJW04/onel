import "@/assets/scss/style.scss";

export const metadata = {
  title: "Next.js",
  description: "Next.js를 활용한 프론트 엔드 포트폴리오 사이트입니다.",
  keywords: ["Vue.js, 프론트 엔드, 웹 개발, 포트폴리오, 프로젝트 소개"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
