"use client";

import { rolesData } from "@/data/data";
import { RoleType } from "@/types/game";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

const GameSet = () => {
  const [role, setRole] = useState<RoleType| ''>('');

  const router = useRouter();

  sendGAEvent('event', 'gameStartRole', { 
    selected_role: role 
  });

  const handleGameStart = () => {
    if (!role) {alert('라인을 선택해주세요.');return;}
    document.cookie = "game_access=true; path=/; max-age=30";
    router.push(`/game/${role}`);
  }

  return (
    <div className="flex flex-col justify-center gap-6 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md w-full select-none">
      <div className="p-4 backdrop-blur rounded-xl shadow-inner">
        <div className="flex justify-center items-center gap-5">
          {rolesData.map(item => (
            <button
              key={item.id}
              onClick={() => setRole(item.id)}
              className={`rounded-sm transition ${role === item.id ? 'bg-green-500 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
            >
              {item.txt}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleGameStart}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition-all active:scale-95"
      >
        게임 시작
      </button>
    </div>
    
  );
}

export default GameSet;