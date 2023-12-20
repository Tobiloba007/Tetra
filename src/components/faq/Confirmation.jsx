import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";


const Confirmation = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    }

    const accordion = [
        {
            id: 1,
            title: 'How do I confirm my WAEC certificate?',
            message: 'To confirm a certificate, click on the confirm certificate button after logging into your account. It will request the details of the certificate you want to confirm. Fill in the information to view the certificate.',
        },
        {
            id: 2,
            title: 'How much does it cost to confirm certificate?',
            message: 'Confirming a WAEC digital certificate costs ₦3,500 and $14 for international transaction',
        },
        {
            id: 3,
            title: 'Who can confirm certificate?',
            message: "Approved institutions and organizations with candidates'/individuals' consent can confirm the WAEC Digital Certificates.",
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

export default Confirmation