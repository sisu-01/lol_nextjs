// 1. 파일 최상단에 선언 (클로저로 유지됨)
const cache: Record<string, HTMLAudioElement> = {};

// 2. 이 함수를 '게임 시작 페이지'가 뜰 때 미리 실행하세요.
export const preloadAllSounds = () => {
  if (typeof window === 'undefined') return;

  ['correct', 'wrong'].forEach((name) => {
    const path = `/audio/${name}.mp3`;
    if (!cache[path]) {
      const audio = new Audio(path);
      audio.preload = 'auto'; // 브라우저에게 미리 받으라고 명령
      audio.load();           // 실제 다운로드 시작
      cache[path] = audio;    // 여기서 미리 캐시에 넣어버림!
    }
  });
};

export const playSfx = (name: 'correct' | 'wrong') => {
  const path = `/audio/${name}.mp3`;
  const sound = cache[path];

  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => { /* 클릭 전 재생 방지 대응 */ });
  } else {
    // 혹시라도 프리로드가 안 되었다면 이때라도 생성
    const newSound = new Audio(path);
    newSound.play();
    cache[path] = newSound;
  }
};