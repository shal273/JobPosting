"use client"
import React , {useState} from 'react'
import { Dropdown } from '@/app/Component/DropDown'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
const page = ({jobs}) => {
 const router = useRouter()

  const [page, setPage] = useState(1)
  // Pagination setup: 4 cards per page
  const perPage = 4
  const totalPages = Math.ceil(jobs.data.length / perPage)
  const startIndex = (page - 1) * perPage
  const currentJobs = jobs.data.slice(startIndex, startIndex + perPage)

  // Slide animation direction
  const [direction, setDirection] = useState(0)


  const nextPage = () => {
    if (page < totalPages) {
      setDirection(1)
      setPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setDirection(-1)
      setPage((prev) => prev - 1)
    }
  }
  return (
    
    <div className='font-semibold'>
        <div className='flex flex-col gap-20.25'>
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
            {/* MainArea */}
            <div className='space-y-9.25'>
                <h4 className='textFormColor'>Available Jobs</h4>
                <div className='  '>
                    <AnimatePresence mode='wait' custom={direction}>
                        <motion.div
                          key={page}
                          custom={direction}
                          variants={{
                            enter: (dir) => ({
                              x: dir > 0 ? 1000 : -1000,
                              opacity: 0,
                            }),
                            center: {
                              x: 0,
                              opacity: 1,
                            },
                            exit: (dir) => ({
                              x: dir > 0 ? -1000 : 1000,
                              opacity: 0,
                            }),
                          }}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='flex flex-col gap-5'>
                    {currentJobs.map((jbs) =>(
                             <div key={jbs.id} onClick={()=>router.push(`/NavBars/HomeDetail/${jbs.id}`)} className='rounded-[1.125rem] cursor-pointer space-y-5 w-full   py-6.25 pl-9.75 bg-[#11130c] px-9.5 '>
                                
                                <div className='flex flex-col gap-7'>
                                    <div className='between   '>
                                        <div className='flex  items-center gap-3.5'>
                                            <div className='w-9.75 h-9.75 rounded-full bg-lemongreen'></div>
                                            <div>
                                                <h4 className='text-formColor'>{jbs.jobTitle}</h4>
                                                <h4 className='text-[14px] text-limegray font-regular' >{jbs.organizationOrTenant}</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex gap-4.5 items-center'>
                                                <div><button className='w-28.75 h-10 rounded-[0.4375rem] text-center bg-lemongreen text-black   text-nowrap'>Apply Now </button></div>
                                                <div><button className='w-32.5 h-10 rounded-[0.4375rem] text-center bg-inherit text-formColor px-5.75 border border-limegray'>Save</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-limegray text-[15px]'>{jbs.jobDescription}</p>
                                    </div>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <div className='bg-[rgba(124,128,111,0.07)] w-22.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{jbs.jobType}</h4></div>
                                    <div className='bg-[rgba(124,128,111,0.07)] text-center w-28.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{jbs.departmentName}</h4></div>
                                    <div className='bg-[rgba(124,128,111,0.07)] w-22.75 px-3.75 py-2.25 text-center text-formColor rounded-[7px] text-nowrap'><h4>{jbs.createdAt ? new Date(jbs.createdAt).toLocaleDateString('en-GB').replace(/\//g,'-') : '--'} </h4></div>
                                </div>
                            </div>
 
                    ))}

                </motion.div>
                    </AnimatePresence>
                </div>

            </div>
            {/* Pagination Controls */}
            <div className='flex gap-6.25 items-center mx-auto'>
              <button
                onClick={prevPage}
                disabled={page === 1}
                className='text-limegray cursor-pointer disabled:opacity-40'
              >
                Back
              </button>

              <div className='flex gap-2.5'>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i + 1 > page ? 1 : -1)
                      setPage(i + 1)
                    }}
                    className={`w-[42px] h-[41px] rounded-[7px] border ${
                      page === i + 1
                        ? 'bg-lemongreen text-black border-none'
                        : 'border-limegray text-limegray'
                    }`}
                  >
                    <h1>{i + 1}</h1>
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={page === totalPages}
                className='text-limegray cursor-pointer disabled:opacity-40'
              >
                Next
              </button>
            </div>
        </div>
    </div>
  )
}

export default page