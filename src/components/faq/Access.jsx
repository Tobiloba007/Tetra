import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";


const Access = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    }

    const accordion = [
        {
            id: 1,
            title: 'How do I access my certificate?',
            message: 'Log in to your account to get started. Next, fill in the information required to access the WAEC certificate. ',
        },
        {
            id: 2,
            title: 'What do I need to provide to access my WAEC certificate?',
            message: 'Information required to access the WAEC certificate are; the examination year, examination type, and candidate examination number. ',
        },
        {
            id: 3,
            title: 'How much does it cost to access the WAEC certificate?',
            message: 'Accessing the WAEC certificate costs ₦ 7,500, and $ 30 for international transaction.',
        },
        {
            id: 4,
            title: 'What happens to the WAEC certificate in my account after accessing it?',
            message: 'Accessed certificates are saved in your account for future use. This allows you to download and share whenever you wish to.',
        },
        {
            id: 5,
            title: 'Who can access the WAEC certificate?',
            message: 'Accessed certificates are saved in your account for future use. This allows you to download and share whenever you wish to. ',
        },
        {
            id: 6,
            title: 'Can I download my accessed certificate on my device?',
            message: 'Yes. Accessed certificates are saved in the candidate’s profile on the platform. It can also be downloaded on your web and mobile device. and shared to individuals, institution and organizations.',
        },
        {
            id: 7,
            title: 'Can I recover my examination number?',
            message: 'Yes, you can. The WAEC digital certificate platform allows a candidate to recover a forgotten WAEC examination numbe',
        },
        {
            id: 8,
            title: 'How do I recover my WAEC examination number?',
            message: 'To retrieve the forgotten WAEC examination number, please click on the "recover examination number" button and provide the name you registered with when you took the WAEC exam. Your examination number will be displayed.',
        },
        {
            id: 9,
            title: 'How much does it cost to retrieve a forgotten WAEC examination number?',
            message: 'Retrieval of WAEC examination number costs 12 units (₦3,000) or ($ 12) for international transaction.',
        },
    ]

  return (
    <div className={`flex flex-col items-start justify-start font-lexend w-full h-full mt-5 pr-5 md:pr-12 ${open && ''}`}>
        {accordion.map((items, index) => (
        <div  key={index} className='w-full'>
        <div onClick={()=>handleClick(index)}
        className='flex flex-row items-center justify-start w-full bg-[#F7F8FD] px-4 py-3 rounded-sm md:px-10 md:py-5'>
            <div>
                {
                  open === index
                  ?<BiSolidDownArrow className='text-[#4A4A4B] text-xs' />
                  :<BiSolidRightArrow className='text-[#4A4A4B] text-xs' />
                }
            </div>
            <div className='ml-3 md:ml-9'>
                <p className='text-xs text-[#333333] md:text-base'>
                  {items.title}
                </p>
            </div>
        </div>

        {
          open === index
          ?<div className='mt-4 mb-3'>
               <p className='text-sm text-[#000000] px-5 md:px-10'>
                  {items.message}
               </p>
           </div>
           : ''
        }
        </div>
        ))
        }


    </div>
  )
}

export default Access