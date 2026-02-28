import type { Metadata } from "next";
import { Noto_Sans_KR, Yeon_Sung } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
// import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";
import Script from "next/script";
import AdBar from "@/components/layout/Adbar/Adbar";
import { headers } from "next/headers";

// Noto Sans KR 설정 (기본 폰트)
const notoFont = Noto_Sans_KR({
  variable: "--font-noto", // CSS 변수명
  weight: ["400", "700"], // 사용할 굵기 선택
  subsets: ["latin"], // 한글 폰트라도 subsets는 기본적으로 설정해야 합니다.
});

// East Sea Dokdo 설정 (특정 클래스용)
const subFont = Yeon_Sung({
  variable: "--font-sub",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lol-updown.com'),
  alternates: {
    canonical: '/',
  },
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersList = await headers();
  const isMobile = headersList.get('x-is-mobile') === 'true';

  const mainPaddingClass = isMobile 
    ? "top-12.5 bottom-12.5" 
    : "top-22.5 bottom-22.5";

  return (
    <html lang="ko">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        data-ad-client="ca-pub-8512787804038939"
        crossOrigin="anonymous"
        strategy="lazyOnload"
        data-ad-frequency-hint="30s"
      />
      <Script id="adsense-h5-init" strategy="afterInteractive">
        {`
          window.adsbygoogle = window.adsbygoogle || [];
          window.adBreak = window.adConfig = function(o) { adsbygoogle.push(o); };
        `}
      </Script>
      <meta charSet="utf-8" />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <body className={`${notoFont.variable} ${subFont.variable} antialiased`}>
        <div className="flex flex-col h-dvh">
          {/* <Header /> */}
          <AdBar position="header" isMobile={isMobile} />
          <main className={`absolute ${mainPaddingClass} overflow-hidden flex-1 w-full`}>
          {/* <main className="absolute top-11.25 sm:top-22.5 bottom-11.25 sm:bottom-22.5 overflow-hidden flex-1 w-full"> */}
            {children}
          </main>
          <AdBar position="footer" isMobile={isMobile} />
          {/* <Footer /> */}
        </div>
      </body>
      <GoogleAnalytics gaId="G-PEE698BPL3" />
    </html>
  );
}
