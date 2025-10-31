'use client'
import { useRouter } from 'next/navigation';
import React , {useState} from 'react'

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
  return (
    <div className='h-screen bg-[url(/images/Login.png)]  w-screen flex items-center justify-center  font-semibold'>
        {/* Login form */}
        <div className="w-163.5  relative">
          <div className="border-[0.4px] border-graysh backdrop-blur-[0.3875rem] bg-[linear-gradient(109deg,rgba(27,31,14,0.05)_0%,rgba(136,136,136,0.01)_102.73%)] rounded-[29px] w-[659px] ">
            <section className="flex flex-col gap-11.25 mt-[74px] mb-19.5 ml-[79px] mr-[79px]">
              <div className="flex flex-col gap-3">
                <h1 className="text-formColor text-2xl">Forgot password?</h1>
                <h4 className="text-login ">Enter your details to receive a rest link </h4>
              </div>

              {/* Form */}
              <form  className="flex flex-col gap-19">
                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label className="text-white">Email</label>
                  <div className="relative flex items-center w-124.25 h-13.75">
                    <div className="absolute z-10 pl-4.75">
                      <img src="/Icons/mail.png" alt="Email icon" />
                    </div>
                    <input
                      className="pl-[66px] h-full w-full placeholder:text-input rounded-[5px] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                      type="text"
                      placeholder='ex. John Don'
                    />
                  </div>
                </div>




                <div className='flex flex-col gap-7'>
                    {/* Login button */}
                    <div className='flex flex-col gap-2'>
                    <div className="bg-lemongreen w-full h-13.75 flex items-center justify-center rounded-[0.3125rem]">
                        <button 
                        className="w-full h-full rounded-[0.3125rem] hover:outline-lemongreen cursor-pointer disabled:opacity-50" 
                        type="submit"
                        // disabled={isSubmitting || isLoading}
                        >
                        Send
                        </button>
                    </div>
                    <div>
                    </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                    <div className="bg-inherit border border-limegray w-full h-13.75 flex items-center justify-center rounded-[0.3125rem]">
                        <button 
                        className="w-full h-full rounded-[0.3125rem] hover:outline-inherit text-formColor border border-limegray cursor-pointer disabled:opacity-50" 
                        type="submit"
                        // disabled={isSubmitting || isLoading}
                        >
                        Back to Sign In
                        </button>
                    </div>
                    <div>
                    </div>
                    </div>
                </div>
              </form>


              {/* Google Sign In
              <SignInButton /> */}
            </section>
          </div>
        </div>
    </div>
  )
}

export default page

