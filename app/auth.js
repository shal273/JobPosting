import NextAuth from "next-auth";
 
import Credentials from "next-auth/providers/credentials";
import { authAPI } from "@/app/lib/api/client";
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        otp: { label: "OTP", type: "text" },
      },
async authorize(credentials) {
  try {
    console.log("Received credentials:", credentials);

    // ✅ Step 2: OTP verification
    if (credentials.otp) {
      const response = await authAPI.verifyOtp(credentials.email, credentials.otp);

      console.log("OTP verification response:", response);

      if (response.accessToken) {
        return {
          id: response.id,
          name: response.fullname || response.username || credentials.email,
          email: credentials.email,
          accessToken: response.accessToken, // ✅ include token now
          refreshToken: response.refreshToken,
          fullname: response.fullname,
          tenantId: response.tenantId,
          otpVerified: true,
          requiresOtp: false,
        };
      }
      return null;
    }

    const response = await authAPI.login({
      Email: credentials.email,
      Password: credentials.password,
    });

    return {
      id: response.id,
      name: response.fullName || credentials.email,
      fullname: response.fullname || credentials.email, // <-- add this
      email: credentials.email,
      role: response.role || null,
      requiresOtp: response.requiresOtp ?? true,
      otpVerified: false,
    };

  } catch (err) {
    console.error("Auth API error:", err);
    return null;
  }
},

    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial login - set user data
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.role = user.role;
        token.fullname = user.fullname;
        token.tenantId = user.tenantId;
        token.lastLoginUtc = user.lastLoginUtc || null;
        token.requiresOtp =
          user.requiresOtp !== undefined ? user.requiresOtp : false;
        token.otpVerified =
          user.otpVerified !== undefined ? user.otpVerified : false;
      }

      // Handle session updates
      if (trigger === "update" && session) {
        if (session.otpVerified !== undefined) {
          token.otpVerified = session.otpVerified;
          token.requiresOtp = false;
        }
        if (session.role) {
          token.role = session.role;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.fullname = token.fullname;
        session.user.tenantId = token.tenantId;
        session.user.lastLoginUtc = token.lastLoginUtc || null;  
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.requiresOtp =
          token.requiresOtp !== undefined ? token.requiresOtp : false;
        session.otpVerified =
          token.otpVerified !== undefined ? token.otpVerified : false;
      }
      return session;
    },
  },

  pages: {
    signIn: "/Login",
    error: "/Login?error=AuthenticationFailed",
  },

  session: { strategy: "jwt" },
});
