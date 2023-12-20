import React, { useEffect, useState } from 'react'
import { GrClose } from "react-icons/gr";
import logo from '../../../assets/images/wcLogo.svg'
import { FaCheckCircle } from "react-icons/fa";




const Modal = ({setVerify, selectedFile}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate an asynchronous operation (e.g., fetching data)
      const fetchData = async () => {
        // Simulate a delay (replace this with your actual asynchronous operation)
        await new Promise((resolve) => setTimeout(resolve, 5000));
  
        // Once the operation is complete, set loading to false
        setLoading(false);
      };
  
      fetchData();
    }, []);

  return (
    <>
       <div className='h-screen flex items-center justify-center w-full fixed inset-0 bg-black opacity-50'></div>
       <div className='absolute top-20 h-[35rem] w-[80%] bg-[#ffffff] shadow-md opacity-100 p-3 md:w-[60%] lg:w-[40%] lg:top-28 xl:top-44 xl:w-[35%]'>
           <div className='flex items-start justify-end w-full p-3'>
               <GrClose onClick={()=>setVerify(false)}
                className='text-xl' />
           </div>

        {loading ? (
        <div className="flex flex-col items-center justify-center mt-20 xl:mt-12">
          <div className="animate-spin rounded-full h-20 w-20 border-t-[5px]  border-blue-500 border-t-blue-500"></div>
          <p className='text-sm text-gray-600 font-light font mt-7 lg:text-base xl:mt-10 xl:text-xl'>
                 This process may take a while...
           </p>
          <p className='text-sm text-red-600 font-light font mt-7 xl:text-base xl:mt-8'>
                 Do not terminate the loading process
           </p>
           <img className='h-[140px] w-[140px] mt-12 lg:h-[120px] lg:w-[120px] xl:h-[130px] xl:w-[130px]'
               src={logo} alt="logo" />
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
            <FaCheckCircle className='text-[100px] text-green-600' />
            <p className='text-lg text-[#11105B] font-medium mt-4 lg:text-xl lg:font-semibold lg:mt-6 xl:text-2xl'>
                Result Verified
            </p>
            <p className='text-xs text-[#303030] font-light text-center px-5 mt-8 lg:text-sm xl:px-12'>
                This result <b className='font-semibold'>{selectedFile.name}</b> has been verified as a valid certificate and can be tendered legally as an original certificate by the owner.
            </p>
            <p className='text-xs text-[#303030] font-light text-center px-5 mt-4 lg:text-sm xl:px-12'>
                  Should you require any additional details or documentation, please do not hesitate to contact our examination office.
            </p>
            <img className='h-[120px] w-[120px] mt-12 lg:h-[120px] lg:mt-8 lg:w-[120px] xl:h-[130px] xl:w-[130px]'
               src={logo} alt="logo" />
        </div>
      )
      }
       </div>
    </>
  )
}

export default Modal