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

export const playSfx = (name: 'correct' | 'wrong'): Promise<void> => {
  const path = `/audio/${name}.mp3`;
  let sound = cache[path];

  // 1. 캐시에 없으면 새로 생성 및 캐싱
  if (!sound) {
    if (typeof window === 'undefined') return Promise.resolve();
    sound = new Audio(path);
    cache[path] = sound;
  }

  return new Promise((resolve) => {
    let isResolved = false;

    // 공통 종료 처리 함수 (한 번만 실행되도록 보장)
    const finish = () => {
      if (!isResolved) {
        isResolved = true;
        sound.onended = null; // 이벤트 리스너 정리
        clearTimeout(timeoutId);
        resolve();
      }
    };

    // 2. 재생 완료 시 resolve
    sound.onended = finish;

    // 3. 안전장치 타이머 (소리가 너무 길거나 로드 실패 시 0.8초 후 강제 진행)
    const timeoutId = setTimeout(finish, 800);

    sound.currentTime = 0;
    
    // 4. 재생 시도
    sound.play().catch((e) => {
      console.warn("재생 차단됨:", e);
      finish(); // 재생 실패 시 즉시 다음 단계로
    });
  });
};