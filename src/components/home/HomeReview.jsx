import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import stars from '../../assets/icons/stars.svg'

const HomeReview = () => {
  return (
    <div className='font-lexend flex flex-col items-start justify-start w-full bg-[#11105B] text-[#ffffff] mt-3 py-24 lg:relative lg:top-[12rem] lg:py-20'>
        <div className='flex flex-row items-center justify-between w-full px-5 md:px-11 lg:px-24 lg:justify-start'>
            <p className='text-[22.5px] md:text-[35px] md:font-medium'>
                Trusted by every <span className='text-[#EFD50F]'>user!</span>
            </p>
            <div className='flex flex-row items-center justify-end lg:ml-[40%] xl:ml-[50%]'>
                <div>
                   <FaArrowLeft className='w-4 h-5' />
                </div>
                <div>
                   <FaArrowRight className='w-4 h-5 ml-2' />
                </div>
            </div>
        </div>


        <div className='flex flex-row items-start justify-start w-[85%] px-5 md:w-[86.5%] md:px-11 lg:px-24 lg:w-[85%] xl:w-[80%]'>
            <p className='text-sm font-extralight mt-7 md:text-base'>
                You can always watch our help videos for further explanation on how to access, share, request confirmation, recover examination number, and confirm 
                certificates. For more questions, please send a message to support@waec.org.
            </p>
        </div>


        <div className='flex flex-row items-center justify-start mt-20 w-full overflow-x-scroll no-scrollbar md:px-3 lg:px-16'>
            <div className='relative w-[328px] mx-[14px] md:mx-[30px] lg:w-[358px] lg:mx-[35px] xl:w-[512px]'>
               <div className='flex flex-col items-start justify-start p-5 w-[328px] h-[228px] bg-[#D9D9D9] rounded-[5px] pt-7 md:h-[300px] md:p-8 lg:w-[358px] 
                               lg:h-[367px] lg:py-[60px] lg:px-[51px] xl:w-[512px] xl:h-[325px] xl:p-[60px]'>
                    <img className='w-[123px] h-[15px]'
                    src={stars} alt="stars" />
                    <p className='text-xs font-light mt-6 text-[#000000] leading-[18px] md:text-sm xl:leading-[23px]'>
                         We have found the WAEC Digital Platform to be convenient and secure. The ease with which we can access and verify certificates has streamlined our 
                         process, which makes for a better applicant experience
                    </p>
                    <p className='absolute bottom-6 text-base font-bold text-[#11105B] md:bottom-8 lg:text-[21px] lg:bottom-14'>
                         University of North Texas
                    </p>
               </div>
            </div>
            <div className='relative w-[328px] mx-[14px] md:mx-[30px] lg:w-[358px] lg:mx-[35px] xl:w-[512px]'>
               <div className='flex flex-col items-start justify-start p-5 w-[328px] h-[228px] bg-[#D9D9D9] rounded-[5px] pt-7 md:h-[300px] md:p-8 lg:w-[358px] 
                               lg:h-[367px] lg:py-[60px] lg:px-[51px] xl:w-[512px] xl:h-[325px] xl:p-[60px]'>
                    <img className='w-[123px] h-[15px]'
                    src={stars} alt="stars" />
                    <p className='text-xs font-light mt-6 text-[#000000] leading-[18px] md:text-sm xl:leading-[23px]'>
                         We have found the WAEC Digital Platform to be convenient and secure. The ease with which we can access and verify certificates has streamlined our 
                         process, which makes for a better applicant experience
                    </p>
                    <p className='absolute bottom-6 text-base font-bold text-[#11105B] md:bottom-8 lg:text-[21px] lg:bottom-14'>
                         University of North Texas
                    </p>
               </div>
            </div>
            <div className='relative w-[328px] mx-[14px] md:mx-[30px] lg:w-[358px] lg:mx-[35px] xl:w-[512px]'>
               <div className='flex flex-col items-start justify-start p-5 w-[328px] h-[228px] bg-[#D9D9D9] rounded-[5px] pt-7 md:h-[300px] md:p-8 lg:w-[358px] 
                               lg:h-[367px] lg:py-[60px] lg:px-[51px] xl:w-[512px] xl:h-[325px] xl:p-[60px]'>
                    <img className='w-[123px] h-[15px]'
                    src={stars} alt="stars" />
                    <p className='text-xs font-light mt-6 text-[#000000] leading-[18px] md:text-sm xl:leading-[23px]'>
                         We have found the WAEC Digital Platform to be convenient and secure. The ease with which we can access and verify certificates has streamlined our 
                         process, which makes for a better applicant experience
                    </p>
                    <p className='absolute bottom-6 text-base font-bold text-[#11105B] md:bottom-8 lg:text-[21px] lg:bottom-14'>
                         University of North Texas
                    </p>
               </div>
            </div>
            
        </div>

    </div>
  )
}

export default HomeReview