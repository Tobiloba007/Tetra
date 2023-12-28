import React, { useState } from 'react'
import logo from '../../src/assets/images/wcLogo.svg'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [toggle, setToggle]= useState(false);

  return (
    <div className='w-full flex items-center justify-center font-lexend'>
        <div className={`flex flex-row relative w-full justify-center items-center bg-[#F8F9FA] px-4 ${toggle ? 'h-[22.6rem]' : 'h-[90px] lg:z-50' }`}>

             {/* LOGO */}
            <Link to='/' className='absolute top-6 left-4 md:left-10 lg:left-[6.5rem] lg:z-50 xl:left-32'>
              <img className='w-[106px] h-[100px]'
              src={logo} alt="logo" 
              />
            </Link>

            {/* HAMBURGER */}
            <div className={`absolute flex items-center justify-center right-5 top-8 h-10 w-[55px] border-[1px] rounded-md border-gray-300 md:right-12 lg:hidden
                            ${toggle && 'border-[4px] border-gray-500 h-[47px] w-[60px] rounded-[10px]'}`}>
                <FiMenu onClick={()=>setToggle(!toggle)}
                className='w-8 h-8 text-gray-600' />
            </div>

            {/* MOBILE DROPDOWN */}
            {
            toggle &&
            (<div className='w-ful absolute top-32 justify-start left-5  md:left-12'>
                <div className='mb-3.5'>
                  <Link to='/' className='text-sm text-[#707070] font-normal font-lexend'>
                      Home
                  </Link>
                </div>
                <div className='mb-3.5'>
                   <Link to={{ pathname: '/', search: '?sectionId=howItWorks'}} 
                         className='text-sm text-[#707070] font-normal font-lexend'>
                       How It Works
                   </Link>
                </div>
                {/* <div className='mb-3.5'>
                   <Link className='text-sm text-[#707070] font-normal font-lexend'>
                       Blog
                   </Link>
                </div> */}
                <div className='mb-2.5'>
                   <Link to='/faq'
                        className='text-sm text-[#707070] font-normal font-lexend'>
                       FAQs
                   </Link>
                </div>

                <Link to='/login' className='flex items-center justify-center text-white bg-[#11105B] w-[8.5rem] h-8 text-[13px] font-lexend'>
                    Log In
                </Link>
            </div>)
            }

            {/* WEB */}
            <div className='hidden lg:flex w-[50%] absolute right-28 justify-between font-lexend items-center xl:w-[37%] xl:right-40'>
                <Link to='/' className='text-sm text-[#707070] font-medium lg:font-normal hover:text-[#212529] active:text-[#212529]'>
                    Home
                </Link>
                <Link to={{ pathname: '/', search: '?sectionId=howItWorks'}} 
                     className='text-sm text-[#707070] font-medium lg:font-normal hover:text-[#212529] active:text-[#212529]'>
                    How It Works
                </Link>
                {/* <Link className='text-sm text-[#707070] font-medium lg:font-normal hover:text-[#212529] active:text-[#212529]'>
                    Blog
                </Link> */}
                <Link to='/faq'
                     className='text-sm text-[#707070] font-medium lg:font-normal hover:text-[#212529] active:text-[#212529]'>
                    FAQs
                </Link>

                <Link to='/login' className='flex items-center justify-center text-white bg-[#11105B] w-36 h-8 text-[13px] mb-2'>
                    Log In
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar