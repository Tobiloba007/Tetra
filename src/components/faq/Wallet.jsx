import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";


const Wallet = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    }

    const accordion = [
        {
            id: 1,
            title: 'How do I fund my wallet?',
            message: 'To fund your wallet is easy! Simply go to your profile and click on the wallet menu. Next, click the fund wallet button and include the number of units you would like to add',
        },
        {
            id: 2,
            title: 'Is my transaction secure?',
            message: 'Yes. All transactions on The WAEC Digital Certificate are secure. Information sent over the internet is encrypted using the latest technology',
        },
        {
            id: 3,
            title: 'What payment option is available on the platform?',
            message: "The wallet can be funded with a valid MasterCard or Visa debit card.",
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

export default Wallet