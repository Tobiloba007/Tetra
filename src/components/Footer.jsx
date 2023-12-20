import React from 'react'
import { SiTwitter } from "react-icons/si";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";


const Footer = () => {
  return (
    <div className='font-lexend flex flex-col items-start justify-start w-full bg-[#EFEFEF] px-5 py-12 md:flex-row-reverse md:justify-between md:px-11 lg:px-24 
                    lg:relative lg:top-[12rem] xl:pb-16'>
        <div className='flex flex-col items-start justify-start w-full md:w-[30%] xl:w-[25%]'>
            <div className='flex flex-row items-center justify-start'>
                <SiTwitter className='w-[19px] h-[19px] mr-5 text-[#11105B] lg:w-[25px] lg:h-[25px]' />
                <RxInstagramLogo className='w-[19px] h-[19px] mr-5 text-[#11105B] lg:w-[25px] lg:h-[25px]' />
                <FaLinkedinIn className='w-[19px] h-[19px] mr-5 text-[#11105B] lg:w-[25px] lg:h-[25px]' />
                <FaFacebookSquare className='w-[19px] h-[19px] mr-5 text-[#11105B] lg:w-[25px] lg:h-[25px]' />
            </div>
            <div className='flex flex-row items-center justify-start flex-wrap mt-4'>
                <div className='flex flex-row items-center justify-center'>
                  <a className='text-[13px] text-[#303030] font-normal underline'
                  href="#">
                      Email Us
                  </a>
                  <RxDividerVertical className='mx-[-2px]' />
                </div>
                
                <div className='flex flex-row items-center justify-center'>
                  <a className='text-[13px] text-[#303030] font-normal underline'
                  href="#">
                      Give Us A Call
                  </a>
                  <RxDividerVertical className='mx-[-2px]' />
                </div>

                <div className='flex flex-row items-center justify-center'>
                  <a className='text-[13px] text-[#303030] font-normal underline'
                  href="#">
                      Terms of Use
                  </a>
                  <RxDividerVertical className='mx-[-2px]' />
                </div>

                <div className='flex flex-row items-center justify-center'>
                  <a className='text-[13px] text-[#303030] font-normal underline'
                  href="#">
                      Privacy Policy
                  </a>
                </div>

            </div>
        </div>


        <div className='flex flex-col items-start justify-center w-full mt-4 md:mt-0 md:w-[60%] lg:w-[62%]'>
            <div className='flex flex-col items-start justify-center w-full'>
                <p className='text-[16px] text-[#303030] md:text-[21px] md:font-medium'>
                    About WAEC
                </p>
                <p className='text-[13px] text-[#303030] font-light mt-2'>
                    The West African Examinations Council is West Africa's foremost examining board established by law to determine the examinations required in 
                    the public interest in English-speaking West African countries, to conduct the examinations, and to award certificates comparable to those of
                    equivalent examining authorities internationally.
                </p>
            </div>

            <div className='mt-7'>
                <p className='flex flex-row items-start justify-start flex-wrap text-[13px] text-[#303030] font-light'>
                   POWERED BY
                   <span className='pl-1 font-medium'>
                      BOTOSOFT TECHNOLOGIES
                   </span>
                   <span className='pl-1 font-medium mx-[-9px]'>
                      <RxDividerVertical className='w-5 h-5' />
                   </span>
                   <span className='pl-1 font-light'>
                     © 2023
                   </span>
                </p>
            </div>
        </div>

    </div>
  )
}

export default Footer