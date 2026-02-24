import AdSense from "@/components/Adsense/Adsense";

interface adBarProps {
  position: "header" | "footer";
}

const SLOTS = [
  5675929701, //수평1
  7003106202, //수평2
  2981496917, //수평3
  8890724012, //수평4
]

const AdBar = ({ position }: adBarProps) => {
  
  const slots: Record<"header"|"footer", number[]> = {
    'header': [0, 1],
    'footer': [2, 3]
  }

  const css = {
    'header': 'top-0',
    'footer': 'bottom-0',
  }

  return (
    <div className={`w-full h-12.5 sm:h-25 flex justify-center items-center absolute ${css[position]} overflow-hidden z-10`}>
      {slots[position].map((slot) => (
        <AdSense key={SLOTS[slot]} slot={SLOTS[slot]} />
      ))}
    </div>
  );
}

export default AdBar;