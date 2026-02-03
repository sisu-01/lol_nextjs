import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-[50px] sm:h-[80px] flex justify-center items-center absolute bottom-0 overflow-hidden z-10 gap-4 sm:gap-8 text-gray-300 text-[11px] sm:text-sm font-light backdrop-blur-[2px] bg-black/10">
      <Link href={'/privacy'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">Privacy Policy</Link>
      <span className="w-[1px] h-2 bg-gray-600"></span>
      <Link href={'/terms'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">Terms</Link>
      <span className="w-[1px] h-2 bg-gray-600"></span>
      <Link href={'/contact'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">Contact Us</Link>
      <span className="w-[1px] h-2 bg-gray-600"></span>
      <Link href={'/about'} className="hover:text-white hover:underline decoration-1 underline-offset-4 transition-colors">About Us</Link>
      <span className="w-[1px] h-2 bg-gray-600"></span>
      © 2026 도전! 롤든벨. All rights reserved.
    </div>
  );
}

export default Footer;