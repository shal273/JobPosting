'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
  return (
    <div className='font-semibold space-y-17.75'>
        <div className='h-[14.82rem] w-full rounded-[1.875rem] bg-[url(/images/HomeBack.png)] pt-21 pl-20'>
            <div className='space-y-[17px]'>
                <h1 className='text-black font-bold text-4xl'>Blockchain Developer</h1>
                <h4 className='text-black'>Onyx Technology</h4>
            </div>
        </div>
        <div className='space-y-14.75'>
            <div className='flex items-center gap-1.75'>
                <img className='cursor-pointer' onClick={() => router.push('/NavBars/Home')} src="/Icons/ArrowLeft.png" alt="Back" />
                <h4 className='textWhite '>Block Chain</h4>
            </div>
            <div>

            </div>
            <div className='w-373 flex flex-col gap-13  '>
                <div className='w-full flex gap-13'>
                    <div className='w-180 flex flex-col gap-9.5'>
                        <div className="flex flex-col gap-4">
                            <label className="text-white">Name</label>
                            <div className="relative flex items-center w-full rounded-2.5 h-13.75 ">
                                <input
                                className=" h-full w-full pl-3.75 placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                                placeholder='Enter Name'
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <label className="text-white">Phone Number</label>
                            <div className="relative flex items-center w-full rounded-2.5 h-13.75">
                                <input
                                className=" h-full w-full pl-3.75 placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                                placeholder='Enter Phone Number'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-180 flex flex-col gap-9.5'>
                        <div className="flex flex-col gap-4">
                            <label className="text-white">Email</label>
                            <div className="relative flex items-center w-full rounded-2.5 h-13.75">
                                <input
                                className=" h-full w-full pl-3.75 placeholder:text-input rounded-[0.3125rem] border-2 border-[#1d2015] text-white focus:outline-none focus:border-lemongreen focus:ring-lemongreen bg-[#1D2015]"
                                placeholder='Enter Email'
                                />
                            </div>
                        </div>
                            {/* UploadCv */}
                            <div className='flex flex-col gap-4 relative w-'>
                                <label className='text-formColor'>Upload Cv</label>
                                <label className='inputModfile cursor-pointer border-none'>
                                    <img src='/Icons/File.png' alt='' />
                                    <span className='text-limeLight'>Upload Cv</span>
                                    <input type='file' className='hidden' />
                                </label>
                            </div>
                    </div>
                </div>
                <div className='w-full h-13.75 bg-lemongreen  rounded-[10px]  '>
                    <button type="submit" className=' text-black w-full h-full text-center '>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page