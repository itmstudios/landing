import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const routes: { [key: string]: string } = {
  '/3d': '/project/3d',
  '/a-market': '/project/a-market',
  '/barber-shop': '/project/barber-shop',
  '/ecommers': '/project/ecommers',
  '/real-estate': '/project/real-estate',
  '/video-production': '/project/video-production',
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (routes[pathname]) {
    const url = req.nextUrl.clone();
    url.pathname = routes[pathname];
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/3d', '/a-market', '/barber-shop', '/ecommers', '/real-estate', '/video-production'],
};
