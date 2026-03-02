interface lifeBoardProps {
  extraLife: number;
  rewardLife: boolean;
  addRewardLife: () => void;
  isPending: boolean;
}

const LifeBoard = ({ extraLife, rewardLife, addRewardLife, isPending }: lifeBoardProps) => {

  const rewardButtonHandler = () => {
    if (isPending) return;
    addRewardLife();
  }

  return (
    <div className="select-none absolute top-4 right-4 z-10 flex flex-col gap-2 text-white">
      {/* 목숨 표시 */}
      <div className="gap-1 text-3xl md:text-4xl" style={{ display: 'flex', justifyContent: 'flex-end' }}>
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