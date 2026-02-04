"use client";

import { use } from "react";
import { RoleType } from "@/types/game";
import { useGame } from "./useGame";
import { dDragonContext } from "@/context/dDragonContext";
import Error from "@/components/ingame/Error/Error";
import GameOver from "@/components/ingame/Gameover/Gameover";
import Loading from "@/components/ingame/Loading/Loading";
import ScoreBoard from "@/components/ingame/ScoreBoard/ScoreBoard";
import LifeBoard from "@/components/ingame/LifeBoard/LifeBoard";
import Animation from "@/components/ingame/Animation/Animation";
import PositionBoard from "@/components/ingame/PositionBoard/PositionBoard";
import Versus from "@/components/ingame/Versus/Versus";
import Slider from "@/components/ingame/_play/Slider/Slider";

// const POSITIONS_LABEL = {
//   'all': '전 라인',
//   'top': '탑',
//   'jungle': '정글',
//   'mid': '미드',
//   'adc': '원딜',
//   'support': '서포터'
// }

interface PageProps {
  params: Promise<{ role: string }>;
}

const GamePage = ({ params }: PageProps) => {
  const { role } = use(params);
  const roleParam: RoleType = (role as RoleType);
  const {
    chmpDataJson,
    isLoading,
    isPending,
    isAnimating,
    isSliding,
    // showAdModal,
    error,
    score,
    extraLife,
    gameover,
    currentMatch,
    nextMatch,
    gameStart,
    setIsPending,
    // setModalHide,
    isCorrectChampion,
    switchCurrentAndNextMatch,
  } = useGame(roleParam);
  
  if (error) return <Error />;
  if (gameover) return <GameOver score={score} gameStart={gameStart} />;
  if (isLoading || currentMatch === null || nextMatch === null) return <Loading />;

  return (
    <>
    
      {/* <Helmet>
        <title>{POSITIONS_LABEL[currentMatch.position]} 퀴즈 | 도전! 롤든벨</title>
        <meta property="og:title" content={`${POSITIONS_LABEL[currentMatch.position]} 퀴즈 | 도전! 롤든벨`} />
        <meta name="description" content="두 챔피언이 싸우면 누가 이길까? 최신 데이터 기반 롤 상성 퀴즈! 챔피언 상성, 아이템 빌드와 트렌드를 반영한 퀴즈를 풀고 롤 지식왕에 도전하세요." />
        <link rel="canonical" href={`https://www.lol-updown.com/game?role=${currentMatch.position}`} />
      </Helmet> */}
      <ScoreBoard score={score} />
      <LifeBoard extraLife={extraLife} />
      <Animation isAnimating={isAnimating} />
      {!isSliding ? (
        <>
          {role==="all" ? <PositionBoard position={currentMatch.position} /> : ''}
          <Versus />
        </>
      ): ("")}
      <dDragonContext.Provider value={chmpDataJson}>
        <Slider
          isPending={isPending}
          setIsPending={setIsPending}
          isSliding={isSliding}
          currentMatch={currentMatch}
          nextMatch={nextMatch}
          isCorrectChampion={isCorrectChampion}
          switchCurrentAndNextMatch={switchCurrentAndNextMatch}
        />
      </dDragonContext.Provider>

      {/* {showAdModal && <Admodal setModalHide={setModalHide} />} */}
    </>
  );
}

export default GamePage;