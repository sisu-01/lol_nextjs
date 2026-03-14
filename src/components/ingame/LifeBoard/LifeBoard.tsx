import useAdblockState from "@/utils/isAdblock";

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

  const isAdblock = useAdblockState();

  return (
    <div className="select-none absolute top-4 right-4 z-10 flex flex-col gap-2 text-white">
      {/* 목숨 표시 */}
      <div className="gap-1 text-3xl md:text-4xl" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {Array.from({ length: extraLife }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>
      {/* 1. 광고 차단이 아니고(!isAdblock) 2. 보상을 아직 안 받았다면(!rewardLife) 버튼 표시 */}
      {!isAdblock && !rewardLife && (
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