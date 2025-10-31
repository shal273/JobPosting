import React from 'react'
import { Dropdown } from '@/app/Component/DropDown'
const page = () => {
  return (
    <div className='font-semibold'>
        <div>
            <div className='space-y-11.75'>
                <div className='h-[14.82rem] w-full rounded-[1.875rem] bg-[url(/images/HomeBack.png)] pt-21 pl-20'>
                    <div className='space-y-[17px]'>
                        <h1 className='text-black text-4xl'>Looking for a new opprtunities?</h1>
                        <h4 className='text-black'>Browse our latest Job openings</h4>
                    </div>
                </div>
                <div className='flex gap-6.75'>
                    <div className='flex items-end'>
                        <div className=" w-92.75 h-13.75 flex items-center   gap-4.75 bg-[#1d2015] rounded-[0.625rem] px-5.75">
                            <input
                            type="search"
                            //   value={searchTerm}
                            //   onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search Job by Position"
                            className="placeholder-input text-white w-full h-full outline-0"
                            />
                            <img src="/Icons/search.png" alt="" />
                        </div>
                    </div>
                <div>
                    <Dropdown
                    label="Company"
                    options={["Ethiopia", "Kenya", "Nigeria", "South Africa"]}
                    // selected={field.value}
                    // onSelect={field.onChange}
                    placeholder="Select Nationality"
                    className='w-[18rem]'
                    />
                </div>
                <div>
                    <Dropdown
                    label="Job type"
                    options={["Ethiopia", "Kenya", "Nigeria", "South Africa"]}
                    // selected={field.value}
                    // onSelect={field.onChange}
                    placeholder="Select Nationality"
                    className='w-[18rem]'

                    />
                </div>
                <div>
                    <Dropdown
                    label="Date"
                    options={["Ethiopia", "Kenya", "Nigeria", "South Africa"]}
                    // selected={field.value}
                    // onSelect={field.onChange}
                    placeholder="Select Nationality"
                    className='w-[18rem]'

                    />
                </div>
                <div className='font-medium flex items-end'>
                    <button className='text-center w-47.5 h-13.25 bg-lemongreen rounded-[0.625rem]'>
                        <h4 className='text-[14px]'>Apply Filter</h4>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page