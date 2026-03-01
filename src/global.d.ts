import { AdBreakOptions, AdConfigOptions } from "./types/adsense";

export {};

declare global {
  interface Window {
    adBreak: (options: AdBreakOptions) => void;
    adConfig: (options: AdConfigOptions) => void;
  }

  function adBreak(params: AdBreakOptions): void;
  function adConfig(params: AdConfigOptions): void;
}