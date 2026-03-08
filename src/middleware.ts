import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { device } = userAgent(request);
  const isMobile = device.type === 'mobile';

  if (
    pathname.includes('.') || 
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // 1. 허용된 경로 정의 (메인과 /game으로 시작하는 모든 경로)
  const allowedPaths = ['/'];
  const isGamePath = pathname.startsWith('/game');
  const isAllowed = allowedPaths.includes(pathname) || isGamePath;

  // 2. 허용되지 않은 경로는 즉시 404로 처리 (브라우저 주소는 유지)
  if (!isAllowed) {
    return NextResponse.rewrite(new URL('/404', request.url));
  }

  // 3. 게임 페이지(/game) 접근 제어 (입장권 체크)
  if (isGamePath) {
    const hasAccess = request.cookies.get('game_access');

    // 입장권(쿠키)이 없으면 메인으로 즉시 리다이렉트
    if (!hasAccess) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 4. 모바일 정보 헤더 추가 및 응답 반환
  const response = NextResponse.next();
  response.headers.set('x-is-mobile', isMobile.toString());
  
  return response;
}

export const config = {
  matcher: [
    /*
     * 아래 경로를 제외한 모든 요청에 미들웨어 적용:
     * - api, _next/static, _next/image, favicon.ico 등 정적 자원
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};