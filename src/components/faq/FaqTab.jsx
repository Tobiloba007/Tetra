import React, { useState } from 'react'
import { TiStarburst } from "react-icons/ti";
import { SlGlobe } from "react-icons/sl";
import { MdVerified } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoIosWallet } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import General from './General';
import Access from './Access';
import Confirmation from './Confirmation';
import Share from './Share';
import Wallet from './Wallet';
import Refund from './Refund';
import Ticket from './Ticket';



const FaqTab = () => {
    const [hover, setHover]  = useState(null);
    const [heading, setHeading]  = useState(null);


    const handleMouseEnter = (index) => {
        setHover(index);
        console.log(index.title);
      };

      const handleMouseLeave = () => {
        setHover(null);
      };
      
      const handleClick = (index) => {
        setHeading(index);
      };

    const tab = [
        {
            id: 1,
            icon: SlGlobe,
            title: 'General',
            accordion: <General />
        },
        {
            id: 2,
            icon: TiStarburst,
            title: 'Access',
            accordion: <Access />,
        },
        {
            id: 3,
            icon: MdVerified,
            title: 'Confirmation',
            accordion: <Confirmation />,
        },
        {
            id: 4,
            icon: IoArrowRedoSharp,
            title: 'Share',
            accordion: <Share />,
        }, 
        {
            id: 5,
            icon: IoIosWallet,
            title: 'Wallet',
            accordion: <Wallet />,
        },
        {
            id: 6,
            icon: RiRefund2Line,
            title: 'Refund',
            accordion: <Refund />,
        },
        {
            id: 7,
            icon: AiFillQuestionCircle,
            title: 'Ticket',
            accordion: <Ticket />,
        },
    ]


  return (
    <div className='flex flex-col items-center justify-start font-lexend w-full pt-8 mb-48 md:pt-3 md:mb-40 lg:px-16 lg:mb-0 xl:px-24 xl:mb-[-30px]'>
        <div className='flex flex-row items-center justify-start w-full flex-wrap px-3 md:px-8'>
        {
            tab.map((item, index) => (
                <>
                  <div 
                  onClick={()=>handleClick(index)}
                  onMouseEnter={()=>handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                  className={`flex flex-col items-center justify-center w-[43.5px] h-[50px] ml-5 mt-2 md:w-[100px] md:h-[140px] md:mt-6 md:ml-4 
                              lg:w-[120px] lg:h-[140px] xl:w-[180px] xl:ml-[12.5px] ${hover === index ? 'bg-[#11105B]' : 'bg-[#F7F8FD]'}`}>
                          <item.icon className={`w-5 h-5 text-[#11105B] ${hover === index && 'text-[#ffffff]'} md:w-12 md:h-12`} />
                      <p className={`hidden md:flex text-[14.5px] text-[#212529] font-medium mt-5 ${hover === index && 'text-[#ffffff]'}`}>
                          {item.title}
                      </p>
                  </div>
                  {
                    heading === index && (
                  <div className='absolute flex flex-col items-start justify-start w-full px-6 mt-72 h-full top-40 md:top-[29rem] lg:top-[26rem] xl:w-[100%]'>
                      <p className='text-[16px] font-semibold text-[#11105B] md:text-[18px]  lg:font-bold'>
                          {item.title}
                      </p>
                      <div className='w-full lg:w-[85%]'>
                         {item.accordion}
                      </div>
                  </div>
                     )
                  }
                  </>
            ))
        }
        </div>


    </div>
  )
}

export default FaqTab