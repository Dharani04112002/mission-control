import { NextResponse } from 'next/server'

/**
 * GET /api/health — Unauthenticated healthcheck for Railway / load balancers.
 * Returns 200 if the application is running.
 */
export async function GET() {
    return NextResponse.json({ status: 'ok', timestamp: Date.now() })
}
