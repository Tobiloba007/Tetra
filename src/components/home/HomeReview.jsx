import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import stars from '../../assets/icons/stars.svg'

const HomeReview = () => {
     const review = [
          {
               message: 'We have found the WAEC Digital Platform to be convenient and secure. The ease with which we can access and verify certificates has streamlined our process, which makes for a better applicant experience',
               name: 'University of North Texas',
          },
          {
               message: 'I recently lost my WAEC certificate. You can imagine my excitement when I logged on to http://waec.org and was able to easily access the digital copy of my certificate. Kudos to WAEC for the new digital certificate platform!',
               name: 'Ayana',
          },
          {
               message: "I just got my WAEC Certificate online in minutes!!!!! Something I planned a whole trip for!! If you know me, you will know I don't like stress. Thank you @waecnigeria",
               name: 'Ifeoma',
          },
          {
               message: 'Awesome, easy to use. I was able to obtain my 2003 GCE certificate immediately at my first try. I especially like the identity verification feature like BVN & NIN for privacy protection. KUDOS!',
               name: 'Chibuike Nwokoma',
          },
          {
               message: 'Simple interface and nice initiative. I was able to recover my exam number and access my certificate.',
               name: 'Atinuke Popoola',
          },
          {
               message: 'I just accessed my certificate on the WAEC digital certificate platform. It was so easy. Thank you for this development. #waecdigitalcertificate',
               name: 'lifegiver_',
          },
          {
               message: "The digital certificate experience has been nothing short of pleasant and seamless. I was able to access and share my certificate with no hassles. 1 advice, take your time and fill up the form don't rush to avoid mistakes, as it might be costly #waecdigitalcertificate",
               name: 'Namang Blackie',
          }
     ]

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
            {review.map((item, index) => (
            <div key={index} className='relative w-[328px] mx-[14px] md:mx-[30px] lg:w-[358px] lg:mx-[35px] xl:w-[512px]'>
               <div className='flex flex-col items-start justify-start p-5 w-[328px] h-[228px] bg-[#D9D9D9] rounded-[5px] pt-7 md:h-[300px] md:p-8 lg:w-[358px] 
                               lg:h-[367px] lg:py-[60px] lg:px-[51px] xl:w-[512px] xl:h-[325px] xl:p-[60px]'>
                    <img className='w-[123px] h-[15px]'
                    src={stars} alt="stars" />
                    <p className='text-xs font-light mt-6 text-[#000000] leading-[18px] md:text-sm xl:leading-[23px]'>
                         {item.message}
                    </p>
                    <p className='absolute bottom-6 text-base font-bold text-[#11105B] md:bottom-8 lg:text-[21px] lg:bottom-14'>
                         {item.name}
                    </p>
               </div>
            </div>
            ))}

            
        </div>

    </div>
  )
}

export default HomeReview