import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";


const Ticket = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    }

    const accordion = [
        {
            id: 1,
            title: 'Where is the enquiry menu located on the platform?',
            message: 'The enquiry menu is located on the profile dropdown menu under (Account name).',
        },
        {
            id: 2,
            title: 'How do I open a ticket on the WAEC Digital Certificate Platform?',
            message: 'It is easy!  Go to your profile and click enquiry from the dropdown menu. Select a category of complaint, enter the title and description of the complaint then submit. ',
        },
        {
            id: 3,
            title: 'How long do I have to wait to get a response?',
            message: "Our representatives are available: Mondays through Fridays, from 9: 00 am to 6:00 pm WAT, and responses are provided within 24 hours. Be sure to include the enquiry category, this will expedite your request.",
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

export default Ticket