interface lifeBoardProps {
  extraLife: number;
  rewardLife: boolean;
  addRewardLife: () => void;
}

const LifeBoard = ({ extraLife, rewardLife, addRewardLife }: lifeBoardProps) => {

  const rewardButtonHandler = () => {
    addRewardLife();
  }

  return (
    <div className="select-none absolute top-4 right-4 z-10 flex flex-col items-center gap-2 text-white">
      {/* 목숨 표시 */}
      <div className="flex gap-1 text-3xl md:text-4xl">
        {Array.from({ length: extraLife }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>
      {!rewardLife && (
        <div>
          <button className="hover:scale-105 transition-transform" onClick={rewardButtonHandler}>
            ❤️‍🔥 광고 보고 목숨 추가
          </button>
        </div>
      )}
    </div>
  );
}

export default LifeBoard;