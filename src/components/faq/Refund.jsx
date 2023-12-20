import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";


const Refund = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    }

    const accordion = [
        {
            id: 1,
            title: 'I have accessed a certificate, but I am unable to view. Can I get a refund?',
            message: 'As prompted on the platform, before attempted access, there is a non-refundable charge for any attempt to access a certificate with no matching identity or parameter. You should ensure that the information provided by you is accurate: before proceeding to access a certificate.',
        },
        {
            id: 2,
            title: 'My wallet is funded, but I cannot access my certificate. Can I get a refund?',
            message: ' A refund will be processed ONLY if no corresponding match was found for your certificate.',
        },
        {
            id: 3,
            title: 'I overfunded my wallet, can I get a refund?',
            message: "Funds paid into the wallet are non-refundable and can only be used for transactions on the platform except in some rare exceptional cases, it is always advisable that you fund your wallet the exact amount that is needed by you.",
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

export default Refund