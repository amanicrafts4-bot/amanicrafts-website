// proxy.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(['/', '/heritage', '/shop' , '/api/webhooks(.*)', '/sign-in(.*)', '/sign-up(.*)']);
const isOnboardingRoute = createRouteMatcher(['/onboarding(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  // 1. Allow public routes
  if (isPublicRoute(req)) return NextResponse.next();

  // 2. If logged in and metadata shows onboarding is incomplete, redirect
  if (userId && !sessionClaims?.metadata?.onboardingComplete && !isOnboardingRoute(req)) {
    return NextResponse.redirect(new URL('/onboarding', req.url));
  }

  // 3. Protect all other routes
  if (!userId) await auth.protect();
});
