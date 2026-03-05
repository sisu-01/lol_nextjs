import { useState, useEffect } from 'react';
import { getGlobalVolume, setGlobalVolume } from '@/utils/sfx';

export default function VolumeSlider() {
  const [volume, setVolume] = useState(50); // 0~100 기준
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(50); // 음소거 전 볼륨 기억용

  useEffect(() => {
    const initialVolume = getGlobalVolume();
    const uiVolume = initialVolume * 100;
    setVolume(uiVolume);
    // 초기 볼륨이 0이라면 기본 기억용 볼륨을 50으로 설정, 아니면 현재 볼륨 설정
    setPrevVolume(uiVolume > 0 ? uiVolume : 50);
    setIsMuted(uiVolume === 0);
  }, []);

  // 볼륨 변경 핸들러
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolumePercent = Number(e.target.value);
    setVolume(newVolumePercent);
    setGlobalVolume(newVolumePercent / 100);

    if (newVolumePercent > 0) {
      setPrevVolume(newVolumePercent);
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  };

  // 🔇 토글 핸들러
  const toggleMute = () => {
    if (isMuted) {
      // 음소거 해제: 기억해둔 이전 볼륨으로 복구
      setVolume(prevVolume);
      setGlobalVolume(prevVolume / 100);
      setIsMuted(false);
    } else {
      // 음소거 설정: 현재 볼륨을 저장하고 0으로 변경
      setPrevVolume(volume);
      setVolume(0);
      setGlobalVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <div
      style={{ bottom: 'calc(var(--spacing) * 4)' }}
      className="absolute left-4 z-10 flex items-center gap-4 p-4 bg-gray-800 text-white rounded-lg"
    >
      <input
        id="sfx-range"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className="cursor-pointer"
      />
      {/* 버튼 클릭 시 toggleMute 실행 */}
      <button 
        onClick={toggleMute} 
        className="w-10 text-xl hover:scale-110 transition-transform cursor-pointer"
      >
        {isMuted || volume === 0 ? '🔇' : '🔊'}
      </button>
    </div>
  );
}