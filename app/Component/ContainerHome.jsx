import React from 'react'

const ContainerHome = ({position,Company,Duration,Department,Hour,Parag}) => {
  return (
    <div>
        <div className='rounded-[1.125rem] flex flex-col gap-5 w-full   py-6.25 pl-9.75 bg-[#11130c] px-9.5 '>
            <div className='flex flex-col gap-7'>
                <div className='between   '>
                    <div className='flex  items-center gap-3.5'>
                        <div className='w-9.75 h-9.75 rounded-full bg-lemongreen'></div>
                        <div>
                            <h4 className='text-formColor'>{position}</h4>
                            <h4 className='text-[14px] text-limegray font-regular' >{Company}</h4>
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
                    <p className='text-limegray text-[15px]'>{Parag} </p>
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <div className='bg-[rgba(124,128,111,0.07)] w-22.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{Duration}</h4></div>
                <div className='bg-[rgba(124,128,111,0.07)] w-28.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{Department}</h4></div>
                <div className='bg-[rgba(124,128,111,0.07)] w-22.75 px-3.75 py-2.25 text-formColor rounded-[7px] text-nowrap'><h4>{Hour}</h4></div>
            </div>
        </div>
    </div>
  )
}

export default ContainerHome