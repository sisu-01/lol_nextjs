import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const { device } = userAgent(request);
  const isMobile = device.type == 'mobile';

  // 1. 게임 페이지(/game) 접근 제어 로직 추가
  if (pathname.startsWith('/game')) {
    const hasAccess = request.cookies.get('game_access');

    // 입장권(쿠키)이 없으면 메인으로 즉시 리다이렉트 (깜빡임 없음)
    if (!hasAccess) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // 이 정보를 헤더에 담아 보내거나 로직에 활용
  const response = NextResponse.next();
  response.headers.set('x-is-mobile', isMobile.toString());
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};