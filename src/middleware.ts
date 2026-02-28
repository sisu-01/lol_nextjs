import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { device } = userAgent(request);
  const isMobile = device.type == 'mobile';

  // 이 정보를 헤더에 담아 보내거나 로직에 활용
  const response = NextResponse.next();
  response.headers.set('x-is-mobile', isMobile.toString());
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};