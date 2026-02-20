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
  async redirects() {
    return [
      {
        // 1. ?role= 값이 있는 경우 처리
        source: '/game',
        has: [
          {
            type: 'query',
            key: 'role',
            value: '(?<role>.*)', // 쿼리 값을 캡처합니다.
          },
        ],
        destination: '/game/:role?role=', // 캡처한 값을 경로로 보냅니다.
        permanent: true, // 301 영구 이동 (애드센스/SEO에 필수)
      },
      {
        // 2. 쿼리 없이 그냥 /game 으로 들어왔을 때 기본값 처리 (추천)
        source: '/game',
        missing: [
          {
            type: 'query',
            key: 'role', // role 쿼리가 없을 때만 작동
          },
        ],
        destination: '/game/all', // 기본 경로로 리다이렉트
        permanent: true,
      },
    ];
  },
}

export default nextConfig;
