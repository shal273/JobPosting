'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// ✅ Validation Schema
const LoginSchema = z.object({
  email: z.string().email('  '),
  password: z
    .string()
    .min(8, '')
    .regex(/[A-Z]/, '')
    .regex(/[a-z]/, '')
    .regex(/[0-9]/, '')
    .regex(/[@$!%*?&]/, ''),
});

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  // ✅ React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // ✅ Handle login submit
  const handleLogin = async (data) => {
    try {
      setLoginError('');
      setIsLoading(true);
      console.log('Login data:', data);

      // Simulate fake API login delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsLoading(false);

      // Redirect to 
      router.push('/NavBars/Home');
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[url(/images/Login.png)] w-screen flex items-center justify-center font-semibold">
      <div className="w-163.5 relative">
        <div className="border-[0.4px] border-graysh backdrop-blur-[0.3875rem] bg-[linear-gradient(109deg,rgba(27,31,14,0.05)_0%,rgba(136,136,136,0.01)_102.73%)] rounded-[29px] w-[659px]">
          <section className="flex flex-col gap-6.25 mt-[74px] mb-19.5 ml-[79px] mr-[79px]">
            <div className="flex flex-col gap-3">
              <h1 className="text-formColor text-2xl">Get Started</h1>
              <h4 className="text-login">Welcome to HRMS - Sign in with your account</h4>
            </div>

            {/* ✅ Form */}
            <form className="flex flex-col gap-19" onSubmit={handleSubmit(handleLogin)}>
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
                    {...register('email')}
                  />
                
                </div>
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
                    {...register('password')}
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
              </div>

              {/* Remember Me / Forget Password */}
              <div className="between items-center">
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
                    disabled={isSubmitting || isLoading}
                  >
                    {(isSubmitting || isLoading) ? 'Loading...' : 'Login'}
                  </button>
                </div>
              </div>

              {loginError && <p className="text-red-500 mt-2 text-center">{loginError}</p>}
            </form>
          </section>
        </div>

        <div className="flex justify-center mt-13">
          <h4 className="text-lemongreen cursor-pointer" onClick={() => router.push('./Register')}>
            Sign Up
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
