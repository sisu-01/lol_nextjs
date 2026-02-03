interface AnimationProps {
  isAnimating: boolean | null;
}

const Animation = ({ isAnimating }: AnimationProps) => {
  // isAnimating이 null이면 아무것도 렌더링하지 않음
  if (isAnimating === null) return null;

  const isCorrect = isAnimating === true;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        key={String(isAnimating)} // 상태가 바뀔 때마다 컴포넌트를 재생성하여 애니메이션 재실행
        className={`
          relative
          flex items-center justify-center
          w-64 h-64
          rounded-full
          ${isCorrect ? 'animate-pop-elastic' : 'animate-shake-hard'}
        `}
      >
        {isCorrect ? (
          <svg viewBox="0 0 24 24" className="w-full h-full text-green-500 drop-shadow-2xl filter" fill="none" stroke="currentColor" strokeWidth="3">
             <circle cx="12" cy="12" r="10" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-full h-full text-red-500 drop-shadow-2xl filter" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      <style>{`
        @keyframes pop-elastic {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shake-hard {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-20px) rotate(-5deg); }
          50% { transform: translateX(20px) rotate(5deg); }
          75% { transform: translateX(-10px) rotate(-3deg); }
        }
        .animate-pop-elastic {
          animation: pop-elastic 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-shake-hard {
          animation: shake-hard 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Animation;