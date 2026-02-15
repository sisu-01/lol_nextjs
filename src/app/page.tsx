"use client";

import Image from "next/image";
import Link from "next/link";
import GameSet from "@/components/GameSet/GameSet";
import dynamic from "next/dynamic";

const BG_URLS = [
  // "https://media.giphy.com/media/3etP8HqLPVixUc9Y3s/giphy.gif",
  // "https://media.giphy.com/media/BmmfETghGOPrW/giphy.gif",
  "https://media.giphy.com/media/26Ec7TKFZ9XED3MM8/giphy.gif",
  "https://media.giphy.com/media/5h9jqglckLc1HQbPvT/giphy.gif",
  "https://media.giphy.com/media/fFxiqBNam2UtAYa9Oi/giphy.gif",
  "https://media.giphy.com/media/fvxUIwNJRaj8UQe3ti/giphy.gif",
  "https://media.giphy.com/media/KBPu6znQu2DsgPvOpm/giphy.gif",
  "https://media.giphy.com/media/jU2wR5WIzi1wnoHJkx/giphy.gif",
  "https://media.giphy.com/media/i8ztw1wqGxqRysjAnZ/giphy.gif"
];

const AdSense = dynamic(() => import('@/components/Adsense/Adsense'), { ssr: false });

export default function Home() {
  // const randomIndex = Math.floor(Math.random() * BG_URLS.length);
  // sessionStorage.setItem('refresh', 'false');

  return (
    // <div className="w-full h-full flex flex-row justify-between items-center"
    <div className="w-full h-full justify-between items-center overflow-auto"
      style={{
        // backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${BG_URLS[randomIndex]})`,
        backgroundColor: "#3f3f3f",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full flex flex-col justify-center items-center gap-5 text-center px-4 py-10">
        <header>
          {/* SEO를 위한 H1 및 로고 최적화 */}
          <h1 className="sr-only">도전! 롤든벨 - 리그 오브 레전드 상성 퀴즈</h1>
          <Image 
            src="/logo.svg" 
            width={700} 
            height={200} 
            className="h-auto w-full max-w-125 md:max-w-175" 
            alt="도전! 롤든벨 로고" 
            priority // 메인 로고이므로 우선 순위 로드
          />
        </header>
        
        <div>
          <h2 className="mt-4">
            <span className="desc text-4xl sm:text-6xl text-gray-200 drop-shadow-md animate-fadeIn font-sub leading-tight">
              둘이 싸우면&nbsp;<span className="text-yellow-400 font-bold">누가</span>&nbsp;이길까?
            </span>
          </h2>
          <AdSense adClient="ca-pub-8512787804038939" adSlot="8240058455" />
        </div>

        {/* 안내 섹션: AdSense 봇이 좋아하는 고퀄리티 텍스트 영역 */}
        <article className="mt-12 p-6 bg-gray-900/80 backdrop-blur-sm text-gray-300 rounded-2xl border border-gray-700 leading-relaxed text-sm md:text-base max-w-3xl shadow-2xl">
          <section className="mb-6">
            <h2 className="text-xl font-bold text-yellow-400 mb-3 flex items-center justify-center">
              <span className="mr-2">🏆</span> 도전! 롤든벨: LoL 상성 퀴즈 가이드
            </h2>
            <p className="text-gray-300">
              리그 오브 레전드(LoL)의 170여 명의 챔피언 간 <strong>&apos;상성&apos;</strong>은 승패의 핵심입니다. 
              본 서비스는 복잡한 메커니즘을 퀴즈로 풀어내어, 입문자들이 협곡에 더 쉽게 적응하도록 돕는 <strong>교육용 웹 게임</strong>입니다.
            </p>
          </section>

          <section className="mb-6 grid md:grid-cols-2 gap-6 text-left">
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-white mb-2 border-b border-yellow-600 pb-1 inline-block">데이터 기준</h3>
              <p className="text-xs text-gray-400">
                글로벌 에메랄드 티어 이상의 랭크 승률과 Riot API 통계를 바탕으로 정답을 산출하여 높은 신뢰도를 보장합니다.
              </p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold text-white mb-2 border-b border-yellow-600 pb-1 inline-block">실시간 메타</h3>
              <p className="text-xs text-gray-400">
                최신 패치 노트와 아이템 변경 사항을 주기적으로 반영하여 현재 메타에 가장 적합한 퀴즈를 제공합니다.
              </p>
            </div>
          </section>

          <section>
            <p className="text-sm bg-blue-900/30 p-3 rounded-lg border border-blue-800/50">
              <strong>💡 플레이 팁:</strong> 단순히 피지컬뿐만 아니라 상성을 이해하면 밴픽 단계부터 전략적 우위를 점할 수 있습니다. 반복 학습을 통해 승률을 높여보세요!
            </p>
          </section>
        </article>

        <p className="text-lg text-yellow-200 font-medium mt-6 animate-bounce">
          👇 라인전 승패 말고 &apos;최종 승자&apos;를 맞춰보세요! 😋
        </p>

        <GameSet />

        {/* <div className="text-gray-300 text-sm sm:text-base leading-4 mt-4">
          승률 데이터는&nbsp;<span className="font-bold">실시간 OP.GG 에메랄드 티어 이상</span>&nbsp;기준입니다.
        </div> */}
        <div className="text-gray-400 text-xs sm:text-sm mt-4 italic">
          * 승률 데이터는 &apos;도전! 롤든벨&apos;만의 방식으로 수집하여 매우 신뢰도가 높은&nbsp;<span className="font-bold">실시간 에메랄드 티어 이상</span>&nbsp;통계를 기준으로 합니다.
        </div>

        <nav className="flex flex-col sm:flex-row gap-4 my-10">
          <Link href={'/news'} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-1" >
            🗞️ 최신 롤 소식
          </Link>
          <Link href={'/guide'} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-1" >
            🤔 이용 가이드
          </Link>
        </nav>

      </div>
      <div className="hidden md:block p-4">
        {/* <GoogldAds /> */}
      </div>
      {/* TailwindCSS 확장: animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
}
