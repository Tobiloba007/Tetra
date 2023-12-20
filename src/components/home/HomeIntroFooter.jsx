import React from 'react'
import wes from '../../assets/icons/wes.svg'
import trent from '../../assets/icons/trent.png'
import play from '../../assets/icons/playstore.png'
import app from '../../assets/icons/appstore.png'
import star from '../../assets/icons/starIcon.svg'
import arrow from '../../assets/icons/arrow.svg'
import verify from '../../assets/icons/verify.svg'
import refresh from '../../assets/icons/refresh.svg'

const HomeIntroFooter = () => {
  return (
    <div className='flex flex-col item-start justify-center font-lexend lg:relative lg:top-12 lg:flex-col lg:items-center lg:justify-center lg:w-full lg:px-24 xl:mt-2'>
           <div className='hidden lg:flex items-center justify-start w-full'>
               <div className='flex items-start justify-center'>
                   <img className='w-[65px] h-[65px]'
                   src={wes} alt="wes_logo" 
                   />
                   <div className='ml-3 w-60 xl:w-[23rem]'>
                       <i className='text-[12px] font-medium leading-5 lg:font-normal lg:leading-[10px]'>
                          "The entire process of the Platform, from initial signup to receipt of WAEC certificates, has been smooth and user-friendly."
                       </i>
                       <p className='text-[10px] font-extrabold mt-2'>
                           World Education Services (WES)
                       </p>
                   </div>
               </div>

               {/* TRENT */}
               <div className='flex items-start justify-center ml-10 xl:ml-12'>
                   <img className='w-[65px] h-[65px]'
                   src={trent} alt="wes_logo" 
                   />
                   <div className='ml-3 w-60 xl:w-[23rem]'>
                       <i className='text-[12px] font-medium'>
                           "We can promptly receive and securely verify candidate’s certificates, digitally. The new process speeds up the application process.”
                       </i>
                       <p className='text-[10px] font-extrabold mt-2'>
                            Nottingham Trent University
                       </p>
                   </div>
               </div>

               {/* DOWNLOAD */}
               <div className='flex items-start justify-start w-full ml-12'>
                  <div className='border-[1px] border-[#BFBFBF] h-36 xl:h-32'></div>
                  <div className='flex-col items-start justify-start w-60 ml-12 mt-5'>
                    <p className='text-xs font-medium'>
                        ALSO AVAILABLE ON
                    </p>

                    <div className='flex flex-row items-center justify-center mt-5 xl:ml-20'>
                       <img className='h-[35px]n w-[116px] xl:h-[40px] xl:w-[135px]'
                       src={play} alt="playstore" />
                       <img className='h-[35px]n w-[116px] ml-3 xl:ml-16 xl:h-[40px] xl:w-[135px]'
                       src={app} alt="appstore" />
                    </div>
                  </div>
               </div>

           </div>



           {/* FOOTER CARDS */}
           <div className='flex flex-row items-center justify-between w-[100%] overflow-x-scroll mb-24 mt-12 px-3 no-scrollbar md:mt-28 md:flex-wrap md:px-9 lg:my-32 lg:px-0'>
            
               <div className='flex-col items-start justify-start rounded-[20px] bg-[#E0E0EA] h-[15rem] w-[300px] md:w-[48.8%] md:h-[14rem] lg:w-[23.5%] lg:h-[20rem] xl:h-[16rem]'>
                  <div className='flex-col items-start justify-start py-[35px] pl-[30px] w-[300px]'>
                    <img className='h-6 w-6'
                    src={star} alt="star_icon" />
                    <p className='text-[21px] text-[#11105B] font-bold mt-4 xl:mt-3'>
                       Access
                    </p>
                    <p className='text-[14px] mt-6 text-[#212529] w-[88%] md:w-[100%] lg:w-[45%] xl:w-[80%] font-light'>
                       Obtaining your Certificate has never been easier! Get started with easy steps.
                    </p>
                  </div>

               </div>

               <div className='flex-col items-start justify-start rounded-[20px] bg-[#FAF2B7] h-[15rem] w-[300px] ml-4 md:ml-0 md:w-[48.8%] md:h-[14rem] lg:w-[23.5%] lg:h-[20rem] xl:h-[16rem]'>
                  <div className='flex-col items-start justify-start py-[35px] pl-[30px] w-[300px]'>
                    <img className='h-6 w-6'
                    src={arrow} alt="star_icon" />
                    <p className='text-[21px] text-[#11105B] font-bold mt-4 xl:mt-3'>
                       Share
                    </p>
                    <p className='text-[14px] mt-6 text-[#212529] w-[85%] md:w-[100%] lg:w-[45%] xl:w-[90%] font-light'>
                       Share your Certificate effortlessly with institutions, Organizations & Individuals.
                    </p>
                  </div>

               </div>

               <div className='flex-col items-start justify-start rounded-[20px] bg-[#E6EBF6] h-[15rem] w-[300px] ml-4 md:ml-0 md:w-[48.8%] mt-4 md:h-[14rem] lg:w-[23.5%] lg:h-[20rem] xl:h-[16rem]'>
                  <div className='flex-col items-start justify-start py-[35px] pl-[30px] w-[300px] '>
                    <img className='h-6 w-6'
                    src={verify} alt="star_icon" />
                    <p className='text-[21px] text-[#11105B] font-bold mt-4 xl:mt-3'>
                        Verification
                    </p>
                    <p className='text-[14px] mt-6 text-[#212529] w-[85%] md:w-[100%] lg:w-[47%] xl:w-[80%] font-light'>
                        A smart and secure way for institutions and organizations to confirm certificates.
                    </p>
                  </div>

               </div>

               <div className='flex-col items-start justify-start rounded-[20px] bg-[#E0E0EA] h-[15rem] w-[300px] ml-4 md:ml-0 md:w-[48.8%] mt-4 md:h-[14rem] lg:w-[23.5%] lg:h-[20rem] xl:h-[16rem]'>
                  <div className='flex-col items-start justify-start py-[35px] pl-[30px] w-[300px]'>
                    <img className='h-6 w-6'
                    src={refresh} alt="star_icon" />
                    <p className='text-[21px] text-[#11105B] font-bold mt-4 xl:mt-3'>
                        Recovery
                    </p>
                    <p className='text-[14px] mt-6 text-[#212529] w-[85%] md:w-[100%] lg:w-[48%] xl:w-[85%] font-light'>
                        Recover forgotten Candidate Examination Number in seconds!
                    </p>
                  </div>

               </div>

           </div>
    </div>
  )
}

export default HomeIntroFooter