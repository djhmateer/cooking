// import { Logger } from 'next-axiom'
// import { NextResponse } from 'next/server'
// import type { NextFetchEvent, NextRequest } from 'next/server'

// export async function middleware(request: NextRequest, event: NextFetchEvent) {
//     const logger = new Logger({ source: 'middleware' }); // traffic, request
//     logger.middleware(request)

//     event.waitUntil(logger.flush())
//     return NextResponse.next()
// }

// export const config = {
// }


// middleware.ts
// to see http requests on dev like in vercel
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(`[Middleware] ${request.method} ${request.nextUrl.pathname}`)
  return NextResponse.next()
}