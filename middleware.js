import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

 

// Routes that should be accessible during OTP flow
const otpFlowRoutes = [
  "/Login/VerifyOtp",
  "/api/auth/",
  "/Unauthorized",
  "/Login"  // Allow access to login page
];

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Check if the current route is an OTP flow route
  const isOtpFlowRoute = otpFlowRoutes.some(route => 
    pathname.startsWith(route)
  );

  // Allow access to OTP flow routes and auth API routes
  if (isOtpFlowRoute || pathname.startsWith("/api/auth/")) {
    // ✅ CRITICAL: Prevent access to OTP pages after successful verification
    if (token?.otpVerified && isOtpFlowRoute && !pathname.startsWith("/api/auth/")) {
      return NextResponse.redirect(new URL( "/NavBars/Home", req.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    if (pathname !== "/Login" && !pathname.startsWith("/Login/")) {
      return NextResponse.redirect(new URL("/Login", req.url));
    }
    return NextResponse.next();
  }

 
  const requiresOtp = token.requiresOtp || false;
  const isOtpVerified = token.otpVerified || false;

  // ✅ Prevent access to any routes if OTP is required but not verified
  if (requiresOtp && !isOtpVerified) {
    const verifyUrl = new URL("/Login/VerifyOtp", req.url);
    verifyUrl.searchParams.set("email",  token.email || "");
    return NextResponse.redirect(verifyUrl);
  }



  return NextResponse.next();
}

export const config = {
  matcher: ["/Login", "/Login/:path*", "/NavBars/:path*"],
};