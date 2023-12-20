import React from 'react'
import padlock from '../../assets/icons/padlock.svg'

const HomeSecurity = () => {
  return (
    <div className='flex flex-col items-start justify-start font-lexend w-full px-5 mt-6 mb-20 md:px-11 md:mt-28 lg:px-24 lg:relative lg:top-44 lg:flex-row 
                    lg:justify-start'>
        <img className='w-[125px] h-[250px] md:w-[164px] md:h-[275px] lg:hidden'
        src={padlock} alt="padlock" />

        <div className='flex flex-col items-start justify-start w-full mt-[-35px] lg:mt-0 lg:w-[48%] xl:w-[46.5%]'>
            <p className='text-[25px] text-[#11105B] font-medium md:text-[40px] lg:text-[35px] lg:leading-[45px]'>
               Security is our top priority
            </p>
            <p className='text-[14px] text-[#212529] font-light mt-2 md:text-[16px] xl:mt-16'>
               Our platform implements strict access controls, empowering you to retain full control over certificate visibility and accessibility. Experience real-time 
               availability for review, saving, and downloading of certificates, guaranteeing a secure validation process.
            </p>

       </div>
            <img className='hidden lg:flex w-[125px] h-[250px] md:w-[164px] md:h-[275px] lg:ml-40 lg:mt-[-40px] xl:ml-80'
            src={padlock} alt="padlock" />
    </div>
  )
}

export default HomeSecurity