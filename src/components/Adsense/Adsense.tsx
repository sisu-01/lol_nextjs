import { useEffect } from 'react';

interface AdsenseProps {
  adClient: string
  adSlot: string
  format?: string
  responsive?: string
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const AdSense = ({ adClient, adSlot, format = "auto", responsive = "false" }: AdsenseProps) => {
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
      style={{ display: "block" }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
};

export default AdSense;