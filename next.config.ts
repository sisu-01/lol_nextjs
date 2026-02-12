import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/generate-image', // 동적 생성 API 허용
      },
      {
        pathname: '/**', // public 폴더 내의 모든 이미지(/logo.svg 등) 허용
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
