import React from 'react'
import ghana from '../../assets/icons/Ghana.png'
import gambia from '../../assets/icons/Gambia.png'
import sierrialeone from '../../assets/icons/SierriaLeone.png'
import liberia from '../../assets/icons/Liberia.png'
import nigeria from '../../assets/icons/Nigeria.png'
import slide_pic2 from '../../assets/images/verifier_img.svg'
import slide_pic1 from '../../assets/images/homepage_BG.png'
import bgImg from '../../assets/images/bg.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom'

const HomeIntro = () => {
  return (
    <div className='w-full flex items-center justify-center font-lexend mt-20 lg:mt-0'>
       <Swiper
        spaceBetween={0}
        centeredSlides={true}
        direction={"horizontal"}
        loop={true}
       >

      <SwiperSlide>
        <div className='flex flex-col items-center justify-center w-full lg:justify-end xl:flex-row'>
        <div className='w-full items-center justify-start px-5 md:px-8 lg:absolute lg:left-[70px] lg:top-[5rem] lg:z-50 lg:mt-11 lg:pl-8 lg:w-[60%] xl:w-[50%] xl:left-[95px]'>
            <div className='flex items-center justify-start mb-7 lg:z-40'>
                <img className='w-[26px] h-[15px] mr-[8px]'
                src={ghana} alt="Ghana" />

                <img className='w-[26px] h-[15px] mx-[8px] md:w-[22px]'
                src={gambia} alt="Ghana" />
                
                <img className='w-[21px] h-[15px] mx-[10px] md:w-[22px]'
                src={sierrialeone} alt="Ghana" />

                <img className='w-[26px] h-[15px] mx-[8px] md:w-[27px]'
                src={liberia} alt="Ghana" />

                <img className='w-[26px] h-[15px] mx-[8px] md:w-[27px]'
                src={nigeria} alt="Ghana" />
            </div>
            <div>
                <p className='text-sm md:text-base'>
                   THE WEST AFRICAN EXAMINATIONS COUNCIL
                </p>
                <p className='text-[33px] text-[#11105B] font-bold tracking-wide mt-6 md:text-[45px] pr-28 leading-11 lg:pr-36 lg:leading-[60px] xl:pr-0'>
                    Certificate Confirmation made Easy!
                </p>
                <Link to='/login'>
                   <button className='text-white bg-[#11105B] w-40 h-9 text-[13px] mt-7 md:h-[38px] md:w-[10.5rem] lg:mt-9 lg:h-[40px] xl:text-[15px]'>
                       Log In
                   </button>
                </Link>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-[50%] bg-cover bg-center mt-4 lg:top-0 lg:h-full lg:mt-2 lg:ml-60 lg:w-[78%] 
                         xl:ml-[720px] xl:w-[55%] xl:h-[65%] xl:mt-[30px]"  style={{backgroundImage: `url(${bgImg})`}}>
           <div className='flex items-start mt-16 h-[25rem] ml-[-80px] md:h-[26rem] lg:h-[27rem] lg:ml-0 lg:absolute lg:top-7 lg:w-[63%] lg:right-0 xl:w-[50%] xl:top-7'>
               <img className='w-full h-full object-cover xl:object-contain'
               src={slide_pic2} alt="carousel-1" />
           </div>
        </div>

        </div>
        </SwiperSlide>




        <SwiperSlide>
        <div className='flex flex-col items-center justify-center w-full lg:flex-row lg:justify-end'>
        <div className='w-full items-center justify-start px-5 md:px-8 lg:absolute lg:left-[80px] lg:top-[7.5rem] lg:z-50 lg:pl-8 lg:w-[60%] xl:w-[45%]'>
            <div className='flex items-center justify-start mb-7 lg:z-40'>
                <img className='w-[26px] h-[15px] mr-[8px]'
                src={ghana} alt="Ghana" />

                <img className='w-[26px] h-[15px] mx-[8px] md:w-[22px]'
                src={gambia} alt="Ghana" />
                
                <img className='w-[21px] h-[15px] mx-[10px] md:w-[22px]'
                src={sierrialeone} alt="Ghana" />

                <img className='w-[26px] h-[15px] mx-[8px] md:w-[27px]'
                src={liberia} alt="Ghana" />

                <img className='w-[26px] h-[15px] mx-[8px] md:w-[27px]'
                src={nigeria} alt="Ghana" />
            </div>
            <div>
                <p className='text-sm md:text-base'>
                   THE WEST AFRICAN EXAMINATIONS COUNCIL
                </p>
                <p className='text-[33px] text-[#11105B] font-bold mt-6 md:text-[45px] md:pr-28 leading-11 lg:font-semibold lg:pr-0 lg:leading-[60px]'>
                    Access and Share Certificate with Ease!
                </p>
                <button className='text-white bg-[#11105B] w-40 h-9 text-[13px] mt-7 md:h-[38px] md:w-[10.5rem] lg:mt-9 lg:h-[40px] xl:text-[15px]'>
                    Learn More
                </button>
            </div>
        </div>

        <div className='flex items-start mt-16 h-[25rem] md:h-[30rem] ml-[-175px] md:ml-[-130px] lg:h-[31rem] lg:mt-[-7px] lg:justify-end xl:h-[32rem] xl:mt-[-10px]'>
            <img className='w-full h-full object-cover lg:object-contain xl:object-contain'
            src={slide_pic1} alt="carousel-1" />
        </div>
        </div>
        </SwiperSlide>

        </Swiper>
   </div>
  )
}

export default HomeIntro