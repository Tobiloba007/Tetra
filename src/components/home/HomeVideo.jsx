import React from 'react'
import tabImg from '../../assets/images/video_tab.svg'
import play from '../../assets/icons/play.svg'
import youtube from '../../assets/icons/youtubeLogo.svg'

const HomeVideo = () => {
  return (
    <div className='font-lexend px-5 md:px-11 lg:relative lg:top-20 lg:px-24'>
        <div className='flex flex-col items-start justify-start w-full lg:hidden'>
            <p className='text-[25px] text-[#11105B] font-medium md:text-[40px]'>
               Video Resource Center
            </p>
            <p className='text-[14px] text-[#212529] font-medium mt-4'>
               Explore our video tutorials for step-by-step guidance on Accessing, Sharing, Verifying Certificates and Recovering examination numbers.
            </p>
        </div>

        <div className='flex flex-col items-center justify-start w-full mt-5 lg:flex-row lg:items-start'>
            <div className='flex flex-col items-center justify-center w-full lg:w-[35%] lg:mr-14 xl:w-[32%]'>
               <iframe className='w-full h-72 lg:h-[33.5rem] xl:h-[32rem]'
               src="https://www.youtube.com/embed/QpN_VEWasWQ" title="youtubee_video" frameborder="0" allowfullscreen />
            </div>


            <div className='flex flex-col items-start justify-start w-full lg:w-[55%]'>

               <div className='hidden lg:flex flex-col items-start justify-start w-full mt-[-15px] lg:w-[90%]'>
                  <p className='text-[25px] text-[#11105B] font-medium md:text-[40px]'>
                     Video Resource Center
                  </p>
                  <p className='text-[14px] text-[#212529] font-medium mt-4'>
                     Explore our video tutorials for step-by-step guidance on Accessing, Sharing, Verifying Certificates and Recovering examination numbers.
                  </p>
               </div>

               <div className='flex flex-row items-center justify-start w-full mt-14 overflow-x-scroll no-scrollbar lg:w-[100%] xl:ml-4'>
                   <div className='w-[125px] h-[65px] mr-1 md:w-[210px] rounded-[5px] md:mr-3 lg:w-[123px] lg:mr-8 xl:w-[203px]'>
                      <div className='flex flex-row items-center justify-start pl-1.5 w-[125px] h-[65px] bg-no-repeat rounded-[5px] md:w-[210px] md:rounded-br-md lg:w-[123px] xl:w-[203px]' 
                           style={{backgroundImage: `url(${tabImg})`}}>
                          <img className='w-6 h-5'
                          src={play} alt="play" />
                          <p className='text-sm text-[#ffffff] font-extralight ml-2 leading-5 lg:w-[75%]'>
                             Create your Account
                          </p>
                      </div>
                   </div>
                   <div className='w-[125px] h-[65px] mr-1 md:w-[210px] rounded-[5px] md:mr-3 lg:w-[123px] lg:mr-8 xl:w-[203px]'>
                      <div className='flex flex-row items-center justify-start pl-1.5 w-[125px] h-[65px] bg-no-repeat rounded-[5px] md:w-[210px] md:rounded-br-md lg:w-[123px] xl:w-[203px]' 
                           style={{backgroundImage: `url(${tabImg})`}}>
                          <img className='w-6 h-5'
                          src={play} alt="play" />
                          <p className='text-sm text-[#ffffff] font-extralight ml-2 leading-5 lg:w-[75%]'>
                             Create your Account
                          </p>
                      </div>
                   </div>
                   <div className='w-[125px] h-[65px] mr-1 md:w-[210px] rounded-[5px] md:mr-3 lg:w-[123px] lg:mr-8 xl:w-[203px]'>
                      <div className='flex flex-row items-center justify-start pl-1.5 w-[125px] h-[65px] bg-no-repeat rounded-[5px] md:w-[210px] md:rounded-br-md lg:w-[123px] xl:w-[203px]' 
                           style={{backgroundImage: `url(${tabImg})`}}>
                          <img className='w-6 h-5'
                          src={play} alt="play" />
                          <p className='text-sm text-[#ffffff] font-extralight ml-2 leading-5 lg:w-[75%]'>
                             Create your Account
                          </p>
                      </div>
                   </div>
                   <div className='w-[125px] h-[65px] mr-1 md:w-[210px] rounded-[5px] md:mr-3 lg:w-[123px] lg:mr-8 xl:w-[203px]'>
                      <div className='flex flex-row items-center justify-start pl-1.5 w-[125px] h-[65px] bg-no-repeat rounded-[5px] md:w-[210px] md:rounded-br-md lg:w-[123px] xl:w-[203px]' 
                           style={{backgroundImage: `url(${tabImg})`}}>
                          <img className='w-6 h-5'
                          src={play} alt="play" />
                          <p className='text-sm text-[#ffffff] font-extralight ml-2 leading-5 lg:w-[75%]'>
                             Create your Account
                          </p>
                      </div>
                   </div>
                   <div className='w-[125px] h-[65px] mr-1 md:w-[210px] rounded-[5px] md:mr-3 lg:w-[123px] lg:mr-8 xl:w-[203px]'>
                      <div className='flex flex-row items-center justify-start pl-1.5 w-[125px] h-[65px] bg-no-repeat rounded-[5px] md:w-[210px] md:rounded-br-md lg:w-[123px] xl:w-[203px]' 
                           style={{backgroundImage: `url(${tabImg})`}}>
                          <img className='w-6 h-5'
                          src={play} alt="play" />
                          <p className='text-sm text-[#ffffff] font-extralight ml-2 leading-5 lg:w-[75%]'>
                             Create your Account
                          </p>
                      </div>
                   </div>

               </div>

               <div className='flex flex-col items-start justify-start w-full mt-14 lg:mt-12'>
                  <p className='text-[25px] text-[#11105B] font-medium md:text-[40px]'>
                     Create your Account
                  </p>
                  <p className='text-[14px] text-[#212529] font-light mt-2 md:text-[16px]'>
                     This is the first step to accessing and confirming candidates’ certificate. Create an account, access your certificate or confirm an existing certificate.To create account, kindly provide the required information to identify and allow you personalize your account.
                  </p>
               </div>

               <div className='flex flex-row items-center justify-start w-full mt-11 lg:justify-between lg:items-start'>
                 <button className='text-[13px] text-[#ffffff] bg-[#33458D] w-[148px] h-[45px] rounded-[6px]'>
                    Create Account
                 </button>
                 <img className='hidden lg:flex'
                 src={youtube} alt="youtube_logo" />
               </div>
            
            </div>

        </div>
    </div>
  )
}

export default HomeVideo