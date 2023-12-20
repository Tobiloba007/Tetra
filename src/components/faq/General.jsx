import React, { useState } from 'react'
import { BiSolidRightArrow, BiSolidDownArrow } from "react-icons/bi";


const General = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (index) => {
        setOpen((prevIndex) => (prevIndex === index ? null : index));
    }

    const accordion = [
        {
            id: 1,
            title: 'What is The WAEC Digital Certificate platform and what does it do?',
            message: 'The WAEC Digital Certificate is an online platform that allows you to Access, Share, Request Confirmation, Recover Candidate Number, and Confirm the WAEC certificate on your web and mobile device.',
        },
        {
            id: 2,
            title: 'What is smart about the WAEC Digital Certificate platform?',
            message: 'It allows you to instantly access, share, request confirmation, and confirm your WAEC certificate with ease while ensuring the full privacy of personal data.',
        },
        {
            id: 3,
            title: 'Who should use the WAEC Digital Certificate platform?',
            message: 'The WAEC Digital Certificate Platform allows individuals to access and share WAEC certificates. It also allows institution/organizations to confirm certificate of candidates securely and promptly.',
        },
        {
            id: 4,
            title: 'How does it work?',
            message: 'Through a seamless and secure registration process, individuals can access and share certificates. Once signed up, accessed certificates are secured in the candidates’ account where certificates can be downloaded and shared with individuals or institutions/ organizations who can, in turn easily confirm certificates.',
        },
        {
            id: 5,
            title: 'How can I create an account?',
            message: 'Click ‘Create Account’ on the home page of the WAEC Digital Certificate platform and fill in your information to create your account. Once activated you can proceed to accessing, sharing, and confirming the WAEC certificate.',
        },
        {
            id: 6,
            title: 'Is my data privacy protected?',
            message: 'All certificates are encrypted using cutting-edge technology. Permission to access or share a candidate’s certificate is only granted with the candidate’s consent. ',
        },
        {
            id: 7,
            title: 'How secured is the platform?',
            message: 'WAEC Digital Certificate uses the highest standards in data security to provide reliable digital certificates to educational organizations and institutions. ',
        },
        {
            id: 8,
            title: 'I cannot remember my password.',
            message: 'On the login page, click forgot password. A link will be sent to your registered email for you to create a new password. ',
        },
        {
            id: 9,
            title: 'How do I change my password?',
            message: 'Go to your profile, and click on change of name under your account information. You will be required to enter your current password and the new password you would like to change to.',
        },
        {
            id: 10,
            title: 'I did not receive link to reset password.',
            message: 'If you did not receive the link to reset your password after a few minutes, kindly try again. Else, send us an email at support@waec.org.',
        },
        {
            id: 11,
            title: 'I did not receive OTP on my phone, what should I do?',
            message: 'Please check the phone number in your profile if it is correct, else, please contact us at support@waec.org',
        },
        {
            id: 12,
            title: 'Can I install the app on my phone for easy access?',
            message: 'Yes. You can install The WAEC Digital Certificate App on your phone. Simply go to your Google play or Apple store and search for WAEC DigiCert. Simply download and install.',
        },
        {
            id: 13,
            title: 'How can I get more help on how to access, share, and confirm the WAEC certificate?',
            message: 'You can always watch our help videos for further explanation on how to access, share, request confirmation, recover examination number, and confirm certificates. For more questions, please send a message to support@waec.o',
        },
        {
            id: 14,
            title: 'Are the units priced in my local currency?',
            message: 'Units are converted to your local currency.',
        },
        {
            id: 15,
            title: 'Will I be charged for using this platform?',
            message: 'Yes. You will be charged for any service request on the WAEC Digital Certificate platform either successful or unsuccessful. Kindly ensure you carefully input the correct details used in registering for the examination.',
        },
        {
            id: 16,
            title: 'Can I access or confirm a withheld WAEC certificate?',
            message: 'No, all withheld certificates cannot be accessed or confirmed on this platform.',
        },
        {
            id: 17,
            title: 'I cannot access the login page.',
            message: 'Please clear your browser cache or try another device. Your network may be blocking your access. ',
        },
        {
            id: 18,
            title: 'Is the platform free to use?',
            message: 'Yes. You will only be billed when accessing, sharing, recovering a candidate number, or confirming a certificate.',
        },
        {
            id: 19,
            title: 'Where can I see the privacy policy?',
            message: 'Please click the link https://www.waec.org/privacy-policy to see the privacy policy.',
        },
        {
            id: 20,
            title: 'I cannot find an answer to my question in the resources provided, what should I do?',
            message: 'Please share your question with us via email at support@waec.org and we will respond within 24 hours.',
        },
        {
            id: 21,
            title: 'Where can I see the terms and conditions policy?',
            message: 'You can here: https://www.waec.org/terms-of-use',
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

export default General