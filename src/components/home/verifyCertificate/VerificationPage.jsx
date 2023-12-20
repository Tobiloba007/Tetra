import React, { useRef, useState } from 'react'
import { PiUploadSimpleLight } from "react-icons/pi";
import Modal from './Modal';


const VerificationPage = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [verify, setVerify] = useState(false);
  
    const handleFileChange = (event) => {
      // Access the selected file
      const file = event.target.files[0];
  
      // Update the state with the selected file
      setSelectedFile(file);
    };
  
    const handleRemoveButtonClick = () => {
      // Clear the selected file
      setSelectedFile(null);
  
      // Clear the file input value
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    const handleVerify = () => {
        if(selectedFile !== null){
            setVerify(true)
            console.log(selectedFile.name);
        }else if (selectedFile === null){
            console.log('no selected file');
        }
    }


  return (
    <div className='flex flex-col items-center justify-start w-full font-lexend px-6 mt-14 mb-16 md:px-12 md:mt-16 lg:px-24 lg:mt-24 lg:mb-0 xl:px-28'>
        <div className='fle flex-col items-start justify-start w-full'>
            <p className='text-base font-semibold text-[#11105B] md:text-lg lg:text-xl lg:font-bold xl:text-3xl'>
                VERIFY CERTIFICATE
            </p>
            <p className='text-sm text-[#303030] font-normal lg:text-base lg:mt-2 xl:text-lg'>
                Verification of results are encouraged to prevent scam and forgery.
            </p>
        </div>

        <div className='flex flex-col items-center justify-center w-full lg:flex-row lg:justify-between lg:mt-12'>
        <div className='flex flex-col items-center justify-center rounded-xl shadow-lg h-[24rem] w-[100%] bg-[#F7F7F7] mt-10 px-4 py-4 lg:w-[60%] xl:h-[31rem] xl:px-8'>
            <div className='flex flex-col items-center justify-start w-full mt-2 mb-4'>
                <p className='text-lg text-[#11105B] font-medium md:text-xl xl:text-[26px]'>
                    Upload Certificate
                </p>
                <p className='text-sm text-gray-600 font-light font mt-1 xl:text-base xl:mt-3'>
                    File should be in JPG,PNG,PDF
                </p>
            </div>

            <div className='flex flex-col items-center justify-center w-[90%] border-[1.2px] border-dashed border-[#11105B] rounded-3xl h-[15rem] xl:mt-3 xl:border-2 xl:h-[16rem]'>
                 <PiUploadSimpleLight className='text-[60px] text-[#11105B]' />
                 <p className='text-[10px] text-gray-500 font-light mt-2 xl:text-sm'>
                    Max. file size 15MB 
                 </p>
                 <p className='text-sm text-gray-500 font-light xl:text-base'>
                    Drag & Drop your file 0r
                 </p>
                   <div className='flex items-center justify-center flex-wrap w-full px-12 mt-4 md:px-40 lg:px-20 xl:mt-4'>
                      <input 
                      className={`border-[1.5px] border-solid ${selectedFile === null ? 'border-red-500' : 'border-[#11105B]'}`}
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      />
                    </div>
            </div>

        </div>


        <div className='flex flex-col items-center justify-center w-[60%] mt-12 md:flex-row md:w-full md:justify-between md:items-center lg:flex-col'>
            <button onClick={handleVerify}
            className='text-sm text-[#ffffff] bg-green-600 rounded-md h-12 w-full md:w-[40%] lg:w-[60%] lg:h-14 xl:h-[70px] xl:text-lg'>
                Verify
            </button>
                  {/* Remove button */}
            {selectedFile && (
              <button onClick={handleRemoveButtonClick}
              className='text-sm text-[#ffffff] bg-red-600 rounded-md h-12 w-full mt-6 md:mt-0 md:w-[40%] lg:w-[60%] lg:mt-12 lg:h-14 xl:h-[70px] xl:text-lg xl:mt-16'>
                  Remove File
              </button>
            )}
        </div>
        </div>

    {verify && <Modal setVerify={setVerify} selectedFile={selectedFile} /> }

    </div>
  )
}

export default VerificationPage