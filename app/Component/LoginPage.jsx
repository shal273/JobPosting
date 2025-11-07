// app/Component/AuthPage.jsx
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { hrmsAPI } from '../lib/api/client';

// ✅ Login Validation Schema
const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[@$!%*?&]/, 'Password must contain at least one special character'),
});

// ✅ Register Validation Schema
const RegisterSchema = z.object({
  FullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  Password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
  ConfirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Confirm Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Confirm Password must contain at least one lowercase letter"),
})
.refine((data) => data.Password === data.ConfirmPassword, {
  message: "Passwords do not match",
  path: ["ConfirmPassword"],
});

const LoginPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // true for login, false for register
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  // ✅ React Hook Form for Login
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors, isSubmitting: isLoginSubmitting },
    reset: resetLoginForm
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // ✅ React Hook Form for Register
  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors, isSubmitting: isRegisterSubmitting },
    reset: resetRegisterForm
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      FullName: '',
      email: '',
      Password: '',
    },
  });

  // ✅ Toggle between login and register
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setAuthError('');
    // Reset forms when switching
    if (isLogin) {
      resetLoginForm();
    } else {
      resetRegisterForm();
    }
  };

  // ✅ Handle Login
  const handleLogin = async (data) => {
    try {
      setIsLoading(true);
      setAuthError('');
      
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      
      console.log(result.error)
      if (result?.error) {
        setAuthError("Invalid credentials or login failed");
      } else {
        window.location.href = `/Login/VerifyOtp?email=${encodeURIComponent(data.email)}`;
      }
    } catch (err) {
      console.error(err);
      setAuthError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Handle Register
  const handleRegister = async (data) => {
    try {
      setIsLoading(true);
      setAuthError('');

    const userPayload = {
        email: data.email,
        password: data.Password,
        fullName: data.FullName
      };
            console.log('Register data:', userPayload);
      const register = await hrmsAPI.createRegister(userPayload)
      console.log('Register data:', register);

       window.location.reload();
    } catch (error) {
      console.error('Register failed:', error);
      setAuthError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-screen bg-[url(/images/Login.png)] w-screen flex items-center justify-center font-semibold'>
      <div className="w-163.5 relative">
        <div className="border-[0.4px] border-graysh backdrop-blur-[0.3875rem] bg-[linear-gradient(109deg,rgba(27,31,14,0.05)_0%,rgba(136,136,136,0.01)_102.73%)] rounded-[29px] w-[659px]">
          <section className="flex flex-col gap-6.25 mt-[74px] mb-15.75 ml-[79px] mr-[79px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-formColor text-2xl">
                {isLogin ? 'Get Started' : 'Create Account'}
              </h1>
              <h4 className="text-login">
                {isLogin 
                  ? 'Welcome to HRMS - Sign in with your account' 
                  : 'Welcome to HRMS - Create your account'
                }
              </h4>
            </div>

            {/* Login Form */}
            {isLogin ? (
              <form className="flex flex-col gap-19" onSubmit={handleLoginSubmit(handleLogin)}>
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-white">Email</label>
                  <div className="relative flex items-center w-124.25 h-13.75">
                    <div className="absolute z-10 pl-4.75">
                      <img src="/Icons/userGray.png" alt="Email icon" />
                    </div>
                    <input
                      className="pl-[66px] h-full w-full placeholder:text-input rounded-[5px] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                      type="text"
                      placeholder="example@gmail.com"
                      {...loginRegister('email')}
                    />
                  </div>
                  {loginErrors.email && (
                    <span className="text-Error text-[1rem]">{loginErrors.email.message}</span>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label className="text-white">Password</label>
                  <div className="relative flex items-center w-124.25 h-13.75">
                    <div className="absolute z-10 pl-4.75">
                      <img src="/Icons/LockPassword.png" alt="Password icon" />
                    </div>
                    <input
                      className="pl-16.5 h-full w-full placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="*******************"
                      {...loginRegister('password')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-[50%] -translate-y-[50%]"
                    >
                      <img
                        src={showPassword ? '/Icons/HideEye.png' : '/Icons/eye.png'}
                        alt={showPassword ? 'Hide Password' : 'Show Password'}
                      />
                    </button>
                  </div>
                  {loginErrors.password && (
                    <span className="text-Error text-[1rem]">{loginErrors.password.message}</span>
                  )}
                </div>

                {/* Remember Me / Forget Password */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-lemongreen w-[21px] h-[21px] rounded-[5px]" />
                    <h4 className="text-input">Keep me logged in</h4>
                  </div>
                  <div>
                    <h4
                      className="cursor-pointer text-lemongreen"
                      onClick={() => router.push('./Login/ForgetPass')}
                    >
                      Forget password?
                    </h4>
                  </div>
                </div>

                {/* Login Button */}
                <div className="flex flex-col gap-2">
                  <div className="bg-lemongreen w-full h-13.75 flex items-center justify-center rounded-[0.3125rem]">
                    <button
                      className="w-full h-full rounded-[0.3125rem] text-black font-semibold hover:outline-lemongreen cursor-pointer disabled:opacity-50"
                      type="submit"
                      disabled={isLoginSubmitting || isLoading}
                    >
                      {(isLoginSubmitting || isLoading) ? 'Loading...' : 'Login'}
                    </button>
                  </div>
                </div>

                {authError && <p className="text-red-500 mt-2 text-center">{authError}</p>}
              </form>
            ) : (
              /* Register Form */
              <form className="flex flex-col gap-9.75" onSubmit={handleRegisterSubmit(handleRegister)}>
                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-white">Full Name</label>
                  <div className="relative flex items-center w-124.25 h-13.75">
                    <div className="absolute z-10 pl-4.75">
                      <img src="/Icons/userGray.png" alt="Email icon" />
                    </div>
                    <input
                      className="pl-[66px] h-full w-full placeholder:text-input rounded-[5px] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                      type="text"
                      placeholder='ex. John Don'
                      {...registerRegister('FullName')}
                    />
                    {registerErrors.FullName && (
                      <span className="text-Error text-[1rem] absolute -bottom-8">{registerErrors.FullName.message}</span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-white">Email</label>
                  <div className="relative flex items-center w-124.25 h-13.75">
                    <div className="absolute z-10 pl-4.75">
                      <img src="/Icons/userGray.png" alt="Email icon" />
                    </div>
                    <input
                      className="pl-[66px] h-full w-full placeholder:text-input rounded-[5px] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                      type="text"
                      placeholder='example@gmail.com'
                      {...registerRegister('email')}
                    />
                    {registerErrors.email && (
                      <span className="text-Error text-[1rem] absolute -bottom-8">{registerErrors.email.message}</span>
                    )}
                  </div>
                </div>

                {/* New Password */}
                <div className='space-y-9'>
                  <div className="flex flex-col gap-1">
                    <label className="text-white">New Password</label>
                    <div className="relative flex items-center w-124.25 h-13.75">
                      <div className="absolute z-10 pl-4.75">
                        <img src="/Icons/LockPassword.png" alt="Password icon" />
                      </div>
                      <input
                        className="pl-16.5 h-full w-full placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                        type={showPassword ? 'text' : 'password'}
                        placeholder='*******************'
                        {...registerRegister('Password')}
                      />
                      {registerErrors.Password && (
                        <span className="text-Error text-[1rem] absolute -bottom-8">{registerErrors.Password.message}</span>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-[50%] -translate-y-[50%]"
                      >
                        <img
                          src={showPassword ? "/Icons/HideEye.png" : "/Icons/eye.png"}
                          alt={showPassword ? "Hide Password" : "Show Password"}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="flex flex-col gap-1">
                    <label className="text-white">Confirm Password</label>
                    <div className="relative flex items-center w-124.25 h-13.75">
                      <div className="absolute z-10 pl-4.75">
                        <img src="/Icons/LockPassword.png" alt="Password icon" />
                      </div>
                      <input
                        className="pl-16.5 h-full w-full placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='*******************'
                        {...registerRegister('ConfirmPassword')}
                      />
                      {registerErrors.ConfirmPassword && (
                        <span className="text-Error text-[1rem] absolute -bottom-8">{registerErrors.ConfirmPassword.message}</span>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-[50%] -translate-y-[50%]"
                      >
                        <img
                          src={showConfirmPassword ? "/Icons/HideEye.png" : "/Icons/eye.png"}
                          alt={showConfirmPassword ? "Hide Password" : "Show Password"}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back to Login */}
                <div className='flex flex-row-reverse'>
                  <h4 className='cursor-pointer text-lemongreen' onClick={toggleAuthMode}>
                    Back To Login
                  </h4>
                </div>

                {/* Register Button */}
                <div className='flex flex-col gap-2'>
                  <div className="bg-lemongreen w-full h-13.75 flex items-center justify-center rounded-[0.3125rem]">
                    <button
                      className="w-full h-full rounded-[0.3125rem] hover:outline-lemongreen cursor-pointer disabled:opacity-50 text-black font-semibold"
                      type="submit"
                      disabled={isRegisterSubmitting || isLoading}
                    >
                      {(isRegisterSubmitting || isLoading) ? 'Loading...' : 'Register'}
                    </button>
                  </div>
                </div>

                {authError && <p className="text-red-500 mt-2 text-center">{authError}</p>}
              </form>
            )}
          </section>
        </div>

        {/* Toggle between Login and Register */}
        <div className="flex justify-center mt-13">
          <h4 className="text-lemongreen cursor-pointer" onClick={toggleAuthMode}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;