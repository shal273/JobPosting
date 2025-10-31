'use client'

import React , {useState} from 'react'
import { Dropdown } from '@/app/Component/DropDown'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
const page = () => {
 const jobs = [
    {position: 'Blockchain Developer' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'},
    {position: 'Senior Developer' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'},
    {position: 'junior Developer' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'},
    {position: 'System Developer' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'},
    {position: 'Blockchain Developer1' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'},
    {position: 'Senior Developer3' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'},
    {position: 'junior Developer1' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'},
    {position: 'System Developer2' , company: 'Onyx Technology' , parag: 'Authorization controls what users can do after authentication through three main models: RBAC assigns permissions to roles, ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models.  ABAC uses attributes and context for fine-grained control, and ACL attaches permissions to individual resources. Real applications like GitHub and Stripe often combine these models....' , duration: 'Full Time' , Departmenr: 'Developoment' , Time: '24'}


 ]
   const [page, setPage] = useState(1)
   // Pagination setup: 4 cards per page
   const perPage = 4
   const totalPages = Math.ceil(jobs.length / perPage)
   const startIndex = (page - 1) * perPage
   const currentJobs = jobs.slice(startIndex, startIndex + perPage)
 
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
            {/* MainArea */}
            <div className='space-y-20.25'>
                <div className='space-y-15'>
                    <div className='between items-center'>
                        <div>
                            <h4 className='textFormColor'>Applied Jobs</h4>
                        </div>
                        <div>

                            <Dropdown

                            options={["Ethiopia", "Kenya", "Nigeria", "South Africa"]}
                            // selected={field.value}
                            // onSelect={field.onChange}
                            placeholder="Select Nationality"
                            className='w-[18rem]'
                            />
    
                        </div>
                    </div>
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
                        {currentJobs.map((jobs) =>(
                                <div key={jobs.position} onClick={()=>router.push("/NavBars/HomeDetail")} className='rounded-[1.125rem] cursor-pointer space-y-5 w-full   py-6.25 pl-9.75 bg-[#11130c] px-9.5 '>
                                    
                                    <div className='flex flex-col gap-7'>
                                        <div className='between   '>
                                            <div className='flex  items-center gap-3.5'>
                                                <div className='w-9.75 h-9.75 rounded-full bg-lemongreen'></div>
                                                <div>
                                                    <h4 className='text-formColor'>{jobs.position}</h4>
                                                    <h4 className='text-[14px] text-limegray font-regular' >{jobs.company}</h4>
                                                </div>
                                            </div>
                                            <div>
 
                                                <div><button className='w-28.75 h-10 rounded-[0.4375rem] text-center bg-lemongreen text-black   text-nowrap'>Pending ....</button></div>
 
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-limegray text-[15px]'>{jobs.parag}</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <div className='bg-[rgba(124,128,111,0.07)] w-22.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{jobs.duration}</h4></div>
                                        <div className='bg-[rgba(124,128,111,0.07)] w-28.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{jobs.Departmenr}</h4></div>
                                        <div className='bg-[rgba(124,128,111,0.07)] w-22.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{jobs.Time} hours</h4></div>
                                    </div>
                                </div>
    
                        ))}

                    </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
                {/* Pagination Controls */}
                <div className='flex justify-center'>
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
    </div>
  )
}

export default page