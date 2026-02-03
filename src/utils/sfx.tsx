// 1. Audio 객체를 담을 캐시 변수 (브라우저 메모리에 유지)
const cache: Record<string, HTMLAudioElement> = {};

const getAudio = (path: string) => {
  if (typeof window === 'undefined') return null; // 서버 사이드 방어
  if (!cache[path]) {
    cache[path] = new Audio(path);
  }
  return cache[path];
};

export const playSfx = (name: 'correct' | 'wrong'): Promise<void> => {
  return new Promise((resolve) => {
    const sound = getAudio(`/audio/${name}.mp3`);

    // 서버 환경이거나 Audio 생성이 불가능할 경우 바로 종료
    if (!sound) {
      resolve();
      return;
    }

    sound.currentTime = 0;

    sound.onended = () => {
      resolve();
    };

    // 안전장치 타이머
    const timeout = setTimeout(() => {
      resolve();
    }, 800);

    sound.play().then(() => {
        // 성공적으로 재생 시작 시 타이머는 그대로 유지하거나 별도 처리
    }).catch((e) => {
      console.warn("자동 재생 차단됨:", e);
      clearTimeout(timeout);
      resolve();
    });
  });
};