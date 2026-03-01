'use client';
import { h5AdsenseDebug } from '@/utils/h5adsense';
import { useEffect } from 'react';

const H5Adsense = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      // 사용자가 탭을 떠났을 때 (다른 탭을 보거나 창을 내렸을 때)
      if (document.hidden) {
        // Google H5 Game Ads 호출 함수
        adBreak({
          type: 'pause', // 게임 일시정지 타입 광고
          name: 'tab-switch-pause',
          adBreakDone: (placementInfo) => {
            h5AdsenseDebug(placementInfo);
          },
        });
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  return null;
}

export default H5Adsense;