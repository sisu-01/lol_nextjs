import type { Metadata } from "next";
import { Noto_Sans_KR, Yeon_Sung } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
// import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";
import Script from "next/script";
import AdBar from "@/components/layout/Adbar/Adbar";
import { headers } from "next/headers";
import H5Adsense from "@/components/H5Adsense/H5Adsense";

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

const ds = "리그 오브 레전드 상성을 알아맞히는 실력 검증 게임";
const keywordsList = ["도전! 롤든벨", "롤든벨", "스트리머", "유튜브", "치지직", "구글", "lolupdown"];

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lol-updown.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "도전! 롤든벨",
    template: "%s | 도전! 롤든벨"
  },
  description: ds,
  
  // 1. 표준 메타 태그 추가
  applicationName: "도전! 롤든벨",
  keywords: keywordsList,
  
  openGraph: {
    title: {
      default: "도전! 롤든벨",
      template: "%s | 도전! 롤든벨"
    },
    description: ds,
    url: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),
    siteName: "도전! 롤든벨",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "도전! 롤든벨",
      template: "%s | 도전! 롤든벨"
    },
    description: ds,
  },
  
  // 2. 비표준 및 커스텀 메타 태그 추가 (itemprop, article:tag)
  other: {
    'itemprop:name': "도전! 롤든벨",
    'itemprop:description': ds,
    'article:tag': keywordsList.join(', '),
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
        data-ad-frequency-hint="120s"
        // data-adbreak-test="on"
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
      <H5Adsense />
      <GoogleAnalytics gaId="G-PEE698BPL3" />
    </html>
  );
}
