"use client";

import { useEffect } from 'react';

interface AdsenseProps {
  slot: number;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const AdSense = ({ slot }: AdsenseProps) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      data-ad-client="ca-pub-8512787804038939"
      data-ad-slot={slot}
      data-ad-format="horizontal"
      data-full-width-responsive="true"
      style={{ display: "block", width: "100%", zIndex: 11 }}
    ></ins>
  );
};

export default AdSense;