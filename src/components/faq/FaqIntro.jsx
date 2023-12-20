import React from 'react'
import { FaSearch } from "react-icons/fa";


const FaqIntro = () => {
  return (
    <div className='flex flex-col items-start justify-center font-lexend w-full px-8 mt-12 md:mt-[86px] md:mx-4 lg:px-24 lg:mt-24 lg:flex-row lg:justify-between xl:px-32'>
        <div className='flex flex-col items-start justify-center w-full lg:w-[55%]'>
            <p className='text-[20px] font-bold text-[#11105B] md:text-[30.5px]'>
               Frequently Asked Questions
            </p>
            <p className='text-[16px] font-normal text-[#212529] mt-1 md:mt-11'>
               Click on the category that suits your enquiry
            </p>
        </div>

        <div className='flex flex-col items-start justify-center w-full lg:w-[42.5%]'>
            <div className='flex flex-row items-start justify-center w-full mt-4 lg:mt-2'>
                <div className='flex items-start justify-start w-full'>
                  <input className='w-[87%] h-10 border-[1px] border-solid border-[#d8d8d8] rounded-md pl-4 text-[15px] font-normal text-[#585C5F] 
                                  placeholder:text-[#585C5F] lg:w-[75%] xl:w-[80%]'
                   type="text"
                   placeholder='Search...'
                   />
                   <FaSearch className='ml-5 text-lg mt-1 md:ml-8 lg:ml-7 xl:mt-2' />
                </div>
            </div>
            <i className='text-[10.5px] font-normal text-[#919191] mt-2'>
                Find topics by entering the terms in the search box.
            </i>
        </div>
    </div>
  )
}

export default FaqIntro