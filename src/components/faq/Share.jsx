import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";


const Share = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    }

    const accordion = [
        {
            id: 1,
            title: 'How do I share my WAEC certificate?',
            message: 'After accessing your certificate, you are now ready to share. Select the certificate you would like to share, enter the recipient’s email address and click on the share button. For a confirmation request, click on the Request for Confirmation button, select the certificate you would like to share, enter the details of the institution- the name of the institution, email address, country, and institution location address and proceed to share.ate.',
        },
        {
            id: 2,
            title: 'How much does it cost to share a certificate?',
            message: 'Sharing a WAEC certificate costs ₦3,500 and $14 for international transaction.',
        },
        {
            id: 3,
            title: 'How many times can I share the certificate with contacts?',
            message: "You can share your accessed WAEC certificate to your contacts as many times as possible, provided your wallet is funded.",
        },
        {
            id: 4,
            title: 'Can I share certificates with multiple contacts at once?',
            message: "No. The platform allows you to share accessed certificates per contact one at a time.ded.",
        },
        {
            id: 5,
            title: "What happens when someone doesn't receive the share certificate?",
            message: "You can reshare a certificate.",
        },
        {
            id: 6,
            title: 'How much does it cost to request confirmation the WAEC certificate?',
            message: "Confirming the WAEC certificate costs ₦3,500 and $14 for international transaction.",
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

export default Share