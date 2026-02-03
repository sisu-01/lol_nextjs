import type { Metadata } from "next";
import { Noto_Sans_KR, East_Sea_Dokdo } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

// Noto Sans KR 설정 (기본 폰트)
const notoFont = Noto_Sans_KR({
  variable: "--font-noto", // CSS 변수명
  weight: ["400", "700"], // 사용할 굵기 선택
  subsets: ["latin"], // 한글 폰트라도 subsets는 기본적으로 설정해야 합니다.
});

// East Sea Dokdo 설정 (특정 클래스용)
const dokdoFont = East_Sea_Dokdo({
  variable: "--font-dokdo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "도전! 롤든벨 - 실시간 롤 상성 트렌드 퀴즈",
    template: "%s | 도전! 롤든벨"
  },
  description: "게임의 승자는 누구? 170여 명의 챔피언 상성 완벽 분석! 지금 바로 퀴즈 풀고 내 롤 실력을 테스트해보세요.",
  openGraph: {
    title: {
      default: "도전! 롤든벨 - 실시간 롤 상성 트렌드 퀴즈",
      template: "%s | 도전! 롤든벨"
    },
    description: "게임의 승자는 누구? 170여 명의 챔피언 상성 완벽 분석! 지금 바로 퀴즈 풀고 내 롤 실력을 테스트해보세요.",
    url: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),
    siteName: "도전! 롤든벨",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "도전! 롤든벨 - 실시간 롤 상성 트렌드 퀴즈",
      template: "%s | 도전! 롤든벨"
    },
    description: "게임의 승자는 누구? 170여 명의 챔피언 상성 완벽 분석! 지금 바로 퀴즈 풀고 내 롤 실력을 테스트해보세요.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <meta charSet="utf-8" />
      <meta name='viewport' content='width=device-width, intial-scale=1.0' />
      <body className={`${notoFont.variable} ${dokdoFont.variable} antialiased`}>
        <div className="flex flex-col h-dvh">
          <Header />
          <main className="absolute top-[45px] sm:top-[95px] bottom-[45px] sm:bottom-[95px] overflow-hidden flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
