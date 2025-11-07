'use client'
import React , {useState} from 'react'

import { logout } from '@/app/lib/actions/auth';
const page = ({session}) => {

const [showPassword, setShowPassword] = useState(false);
const [showOldPassword, setOldPassword] = useState(false);
  return (
    <div className='font-semibold space-y-15.5'>
      <div className='h-72.25 center-center rounded-3xl bg-bgColor relative'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <div className='rounded-full bg-lemongreen h-22.5 w-22.5 border-4 border-formColor '></div>
            <div className='flex flex-col items-center gap-[5px]'>
              <h1 className='text-formColor text-2xl'>{session?.user.fullname || 'No Name Found'}</h1>
              <h4 className='text-limegray font-medium'>{session?.user.email || 'No Email Found'}</h4>
            </div>
          </div>
          <div className='absolute top-31.5 right-21.5  w-32.5 h-12.5 '>
            <button onClick={()=>logout()} className='border cursor-pointer border-limegray bg-inherit py-10.125 px-3.875 w-full h-full  rounded-[10px]' >
              <h4 className='text-formColor'>Logout</h4>
            </button>
          </div>
      </div>
      <div className='h-122.25 w-full flex justify-center gap-20.5 '>
        <div className='flex gap-26.75'>
          <div className='flex flex-col gap-9.25 mt-18.5'>
            {/* Full Name */}
            <div className="flex flex-col gap-4">
              <label className="text-white">Full Name</label>
              <div className="relative flex items-center w-124.25 h-13.75">
                <div className="absolute z-10 pl-4.75">
                  <img src="/Icons/userGray.png" alt="Email icon" />
                </div>
                <input
                  className="pl-[66px] h-full w-full placeholder:text-input rounded-[5px] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                  type="text"
                  placeholder='ex. John Don'
                />
  
              </div>
            </div>
            <div className='flex flex-col gap-2 w-124.25'>
              <div className="bg-lemongreen w-full h-13.75 flex items-center justify-center rounded-[0.3125rem]">
                <button
                  className="w-full h-full rounded-[0.3125rem] hover:outline-lemongreen cursor-pointer disabled:opacity-50 text-black font-semibold"
                  type="submit"
    
                >
                  Change Name
                </button>
              </div>
            </div>
          </div>

          <div className='bg-bgColor w-[5px] h-full'>
  
          </div>
        </div>
        <div className='flex flex-col gap-10.25 mt-18.5'>
          {/* Confirm Password */}
          <div className="flex flex-col gap-4">
            <label className="text-white">Old Password</label>
            <div className="relative flex items-center w-124.25 h-13.75">
              <div className="absolute z-10 pl-4.75">
                <img src="/Icons/LockPassword.png" alt="Password icon" />
              </div>
              <input
                type={showOldPassword ? 'text' : 'password'}
                className="pl-16.5 h-full w-full placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                placeholder='*******************'

              />

              <button
                type="button"
                onClick={() => setOldPassword(!showOldPassword)}
                className="absolute right-3 top-[50%] -translate-y-[50%]"
              >
                <img
                  src={showOldPassword ? "/Icons/HideEye.png" : "/Icons/eye.png"}
                  alt={showOldPassword ? "Hide Password" : "Show Password"}
                />
              </button>
            </div>
          </div>
          {/* New Password */}
          <div className='space-y-9'>
            <div className="flex flex-col gap-4">
              <label className="text-white">New Password</label>
              <div className="relative flex items-center w-124.25 h-13.75">
                <div className="absolute z-10 pl-4.75">
                  <img src="/Icons/LockPassword.png" alt="Password icon" />
                </div>
                <input
                  className="pl-16.5 h-full w-full placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                  type={showPassword ? 'text' : 'password'}
                  placeholder='*******************'
                />
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

          </div>

          {/* Register Button */}
          <div className='flex flex-col gap-2 w-124.25'>
            <div className="bg-lemongreen w-full h-13.75 flex items-center justify-center rounded-[0.3125rem]">
              <button
                className="w-full h-full rounded-[0.3125rem] hover:outline-lemongreen cursor-pointer disabled:opacity-50 text-black font-semibold"
                type="submit"
  
              >
                Update password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page