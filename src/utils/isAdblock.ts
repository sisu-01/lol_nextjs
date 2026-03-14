import { useEffect, useState } from "react";

// 타입을 boolean 또는 undefined로 명시합니다.
let adblockState: boolean | undefined = undefined;

const useAdblockState = () => {
  // useState에도 제네릭을 사용하여 타입을 맞춥니다.
  const [isBlocked, setIsBlocked] = useState<boolean | undefined>(adblockState);

  useEffect(() => {
    // 이미 상태가 결정되었다면 (true 또는 false) 중단
    if (adblockState !== undefined) return;

    const checkAdblock = async () => {
      try {
        const res = await fetch(
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          {
            method: "GET",
            mode: "no-cors", // 광고 차단 시 네트워크 레벨에서 막히는 것을 감지하기 위함
            cache: "no-store",
          }
        );
        // 광고 스크립트 로드 성공 시
        setIsBlocked(false);
        adblockState = false;
      } catch (e) {
        // 로드 실패(차단) 시
        console.error("Maybe adblock is enabled", e);
        setIsBlocked(true);
        adblockState = true;
      }
    };

    checkAdblock();
  }, []);

  return isBlocked;
};

export default useAdblockState;