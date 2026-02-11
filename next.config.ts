import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/generate-image',
      },
    ],
    dangerouslyAllowSVG: true, // SVG를 생성할 경우 필요
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lol-updown.com', // 실제 배포 도메인
      },
    ],
  },
}

export default nextConfig;
