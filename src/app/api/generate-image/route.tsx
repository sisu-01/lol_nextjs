import { ImageResponse } from 'next/og';
// 또는 'next/server'에서 가져올 수도 있습니다.

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // URL 파라미터에서 제목 추출 (예: ?title=안녕하세요)
  const title = searchParams.get('title') || 'Default Title';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'white',
          background: 'linear-gradient(to bottom right, #4f46e5, #ec4899)',
          width: '100%',
          height: '100%',
          padding: '50px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>{title}</p>
        <div style={{ marginTop: 20, fontSize: 30, opacity: 0.8 }}>
          도전! 롤든벨
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 400,
      headers: {
        // 1년 동안 브라우저 및 CDN에 캐시 (강력 추천)
        'Cache-Control': 'public, imuttable, no-transform, s-maxage=31536000, max-age=31536000',

        //   // 개발 중에는 캐시를 막아버립니다.
        //   'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        //   'Pragma': 'no-cache',
        //   'Expires': '0',
      },
    }
  );
}