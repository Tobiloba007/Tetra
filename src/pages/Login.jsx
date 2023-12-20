import React, { useState } from 'react'
import logo from '../assets/images/wcLogo.svg'
import { LiaUserSolid } from "react-icons/lia";
import { RiLockLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { TiStarburst } from "react-icons/ti";
import { MdVerified } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";




const Login = () => {
    const [secure, setSecure] = useState(false);

    
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const [errors, setErrors] = useState({});

      const navigation = useNavigate();
    
      const validateForm = () => {
        let formErrors = {};
    
        // Email validation
        if (!email.trim()) {
          formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          formErrors.email = 'Invalid email address';
        }
    
        // Password validation
        if (!password.trim()) {
          formErrors.password = 'Password is required';
        } else if (password.length < 6) {
          formErrors.password = 'Password must be at least 6 characters long';
        }
    
        setErrors(formErrors);
    
        // Return true if there are no errors
        return Object.keys(formErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
          e.preventDefault();
          
          if (validateForm()) {
              // Form submission logic goes here
              console.log('Form submitted:', email, password);
              console.log("successfull");
              navigation('/verify-Certificate');
        } else {
          console.log('Form has errors. Please correct them.');
        }
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      }
      
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      }



  return (
    <div className='flex flex-col items-center justify-start w-full h-[100vh] bg-gradient-to-b from-[#ffffff] to-[#F3E9BF] xl:mt-2'>
         <div className='flex flex-row items-center justify-center w-full h-[80px] mt-14 xl:h-[130px]'>
            <Link to='/'>
               <img className='h-[77px] w-[75px] lg:h-[90px] lg:w-[90px] xl:h-[130px] xl:w-[130px]'
               src={logo} alt="logo" />
            </Link>
            <div className='border-[0.1px] border-solid border-gray-200 h-full ml-2 xl:ml-4'></div>
            <div className='flex flex-col items-start justify-center ml-4 xl:ml-9'>
                <p className='text-[15px] leading-[18px] font-bold text-[#11105B] lg:text-[16px] lg:leading-[20px] xl:text-[26px] xl:leading-8'>
                    DIGITAL <br /> CERTIFICATE
                </p>
                <p className='text-[6px] font-light text-[#11105B] mt-1 lg:font-normal xl:text-[10px]'>
                    Access. Share. Confirm
                </p>
            </div>
         </div>
        

        <div className='flex flex-col items-center justify-start w-[90%] h-[390px] py-10 px-5 bg-[#F7F7F7] mt-3 rounded-lg shadow-lg md:w-[50%] xl:w-[35%] xl:mt-6'>
            <p className='text-sm text-[#11105B] font-bold lg:text-[18px]'>
               LOG IN TO YOUR ACCOUNT
            </p>

            <form onSubmit={handleSubmit} className='mt-5 w-full'>
                 {/* EMAIL */}
                <div className='relative'>
                    <input className={`w-full h-10 border-[1.2px] border-solid border-[#D9D9D9] pl-10 ${errors.email && 'border-[#FF4D4F]'}`}
                    type="text" 
                    placeholder='Email Address'
                    value={email}
                    // onChange={handleInputChange}
                    onChange={handleEmailChange}
                    />
                    <div className='flex items-start justify-start w-full h-6'>
                     {errors.email && <span className='text-xs text-[#FF4D4F]'>{errors.email}</span>}
                    </div>
                    <div className='absolute top-[10px] left-3'>
                      <LiaUserSolid className={`text-[22px] ${errors.email && 'text-[#FF4D4F]'}`} />
                    </div>
                </div>


                {/* PASSWORD */}
                <div className='relative mt-1'>
                    <input className={`w-full h-10 border-[1.2px] border-solid border-[#D9D9D9] pl-10 ${errors.password && 'border-[#FF4D4F]'}`}
                    type={secure ? 'text' : 'password'} 
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}        
                    />
                    <div className='flex items-start justify-start w-full h-6'>
                       {errors.password && <span className='text-xs text-[#FF4D4F]'>{errors.password}</span>}
                    </div>
                    <div className='absolute top-[10px] left-3'>
                      <RiLockLine className={`text-[22px] ${errors.email && 'text-[#FF4D4F]'}`}  />
                    </div>
                    <div className='absolute top-[10px] right-3'>
                        {
                         secure
                         ?<AiOutlineEye onClick={()=>setSecure(!secure)} className='text-[22px]' />
                         :<AiOutlineEyeInvisible onClick={()=>setSecure(!secure)} className='text-[22px]' />
                        }
                    </div>
                </div>

                <div className='flex flex-row items-center justify-between w-full mt-2'>
                    <label className='flex flex-row items-center justify-center text-[13px] text-[#100F5A]'>
                       <input
                         className='mr-2'
                         type="checkbox"
                       />
                       REMEMBER ME
                    </label>
                    <i className='text-xs text-[#8E8EB1]'>
                       Forgotten your password?
                    </i>
                </div>

                <div className='flex items-center justify-center w-full mt-7'>
                    <button type="submit" 
                            className='text-base font-bold text-[#000148] w-full h-10 bg-[#FFDC04] border-[1px] 
                                       border-solid border-gray-300'>
                        LOG IN
                    </button>
                </div>

                <div className='flex items-center justify-center w-full mt-7'>
                    <i className='text-xs text-[#7A79A0]'>
                      Don't have an Account? 
                    </i>
                    <p className='text-sm text-[#100F5A] font-bold ml-1'>
                       CREATE ACCOUNT
                    </p>
                </div>

            </form>
        </div>

        <div className='flex flex-row items-center justify-center w-full mt-4 md:mt-6'>
            <p className='text-[10px] text-[#8E8EB1] font-medium xl:text-sm'>
               TERMS AND CONDITIONS 
            </p>

            <div className='flex flex-row items-center justify-center ml-6'>
                <Link to='/faq'>
                   <TiStarburst className='text-[#11105B] text-[28px] mr-2' />
                </Link>
                <Link to='/faq'>
                   <MdVerified className='text-[#11105B] text-[24px] mr-2' />
                </Link>
                <Link to='/faq'>
                   <IoArrowRedoSharp className='text-[#11105B] text-[25px] mr-1' />
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Login