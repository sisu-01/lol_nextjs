"use client";

import AdSense from "@/components/Adsense/Adsense";
import { useEffect, useState } from "react";

interface AdBarProps {
  position: "header" | "footer";
  isMobile: boolean;
}

const AD_SLOTS = {
  pc: {
    header: [5675929701,7003106202],  //수평1, 수평2
    footer: [2981496917,8890724012]   //수평3, 수평4
  },
  mobile: {
    header: [8240058455], //모바일수평1
    footer: [5031208351], //모바일수평2
  }
}
const POSITION_CLASSES = {
  header: 'top-0',
  footer: 'bottom-0',
};

const AdBar = ({ position, isMobile }: AdBarProps) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const activeSlot = isMobile? AD_SLOTS.mobile[position] : AD_SLOTS.pc[position];

  useEffect(() => {
    // 120,000ms = 120초
    const interval = setInterval(() => {
      setRefreshKey((prev) => prev + 1);
    }, 120000);

    return () => clearInterval(interval); // 컴포넌트가 사라질 때 타이머 해제
  }, []);

  return (
    <div className={`w-full h-12.5 flex justify-center items-center absolute ${POSITION_CLASSES[position]} overflow-hidden z-10 bg-black`}>
      {activeSlot.map((slot) => (
        <AdSense key={`${slot}-${refreshKey}`} slot={slot} isMobile={isMobile} />
      ))}
    </div>
  );
}

export default AdBar;