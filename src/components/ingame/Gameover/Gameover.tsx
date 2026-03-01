// import { useNavigate } from "react-router-dom";
// import GoogldAds from "../GoogleAds";

import { AVERAGE_SCORE } from "@/data/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface gameOverProps {
  score: number;
  gameStart: () => void;
}

const getTier = (score: number) => {
  const k = score / AVERAGE_SCORE;

  // 최상위 티어 (단계 없음)
  if (k >= 5.0) return { tier: "Challenger", rank: "" };
  if (k >= 4.0) return { tier: "Grandmaster", rank: "" };
  if (k >= 3.2) return { tier: "Master", rank: "" };

  // 단계별 티어 정의 (minK: 해당 티어 4단계 진입점, step: 단계별 필요한 K값 증가량)
  const tiers = [
    { name: "Diamond",  minK: 2.2, maxK: 3.2 },
    { name: "Emerald",  minK: 1.6, maxK: 2.2 },
    { name: "Platinum", minK: 1.1, maxK: 1.6 },
    { name: "Gold",     minK: 0.8, maxK: 1.1 },
    { name: "Silver",   minK: 0.5, maxK: 0.8 },
    { name: "Bronze",   minK: 0.2, maxK: 0.5 },
    { name: "Iron",     minK: 0.0, maxK: 0.2 }
  ];

  for (const t of tiers) {
    if (k >= t.minK) {
      // 해당 티어 내에서의 위치 계산 (4단계 -> 1단계 순)
      const range = t.maxK - t.minK;
      const progress = k - t.minK;
      const step = range / 4;
      
      // 1~4단계 결정 (소수점 버림 후 역순 정렬)
      let subRank = 4 - Math.floor(progress / step);
      if (subRank < 1) subRank = 1; // 경계값 보정

      return {
        tier: t.name,
        rank: subRank.toString()
      };
    }
  }
  return { tier: "Iron", rank: "4" }; // <- 반환값 고정용
}

const GameOver = ({ score, gameStart }: gameOverProps) => {
  const router = useRouter();
  const playAgain = () => {
    gameStart();
  }
  const goToMain = () => {
    router.push("/");
  }
  const { tier, rank } = getTier(score);
  
  const url = "https://media1.tenor.com/m/MusbmvXoZXYAAAAd/lol-defeat-game.gif";

  return (
    <div
      className="h-full flex flex-row justify-between items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* 중앙 결과 카드 */}
      <div className="flex flex-col justify-center items-center w-full px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl flex flex-col items-center max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-900 drop-shadow mb-1">
            GAME OVER
          </h2>
          <div className="text-xl font-semibold text-gray-800 mb-2">
            당신의 점수
          </div>
          <div className="text-4xl text-gray-800 font-bold">
            {score}
          </div>
          {/* <div className="text-gray-700">
            유저 평균 점수: <span className="italic text-gray-500">{AVERAGE_SCORE}</span>
          </div> */}
          <div>
            <Image src={`/images/tiers/${tier}.png`} width={250} height={250} alt={tier} />
          </div>
          <div className="text-4xl text-gray-800 font-bold mb-4">
            {tier}{rank && ` ${rank}`}
          </div>
          {/* 버튼 영역 */}
          <div className="flex flex-row gap-4 mt-4">
            <button
              onClick={playAgain}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              ⟳ 다시하기
            </button>
            <button
              onClick={goToMain}
              className="bg-gray-700 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              🏠 메인으로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
