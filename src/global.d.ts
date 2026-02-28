export {};

// https://developers.google.com/ad-placement/apis/adbreak?hl=ko
type AdBreakType = 'preroll' | 'start' | 'pause' | 'next' | 'browse' | 'reward';
interface PlacementInfo {
  breakType: AdBreakType;
  breakName?: string;
  breakFormat: 'interstitial' | 'reward';
  breakStatus: 'error' | 'noAdPreloaded' | 'filled' | 'viewed' | 'notShown' | [string]; 
}
interface AdBreakOptions {
  type: AdBreakType;
  name?: string;
  beforeAd?: () => void;
  afterAd?: () => void;
  adBreakDone?: (placementInfo: PlacementInfo) => void;
  // 보상형 광고 전용
  beforeReward?: (showAdFn: () => void) => void;
  adDismissed?: () => void;
  adViewed?: () => void;
}

// https://developers.google.com/ad-placement/apis/adconfig?hl=ko
interface AdConfigOptions {
  sound?: 'on' | 'off';
  preloadAdBreaks?: 'on' | 'auto';
  onReady?: () => void;
}

declare global {
  interface Window {
    adsbygoogle: {[key: string]: unknown}[];
    adBreak: (options: AdBreakOptions) => void;
    adConfig: (options: AdConfigOptions) => void;
  }
}