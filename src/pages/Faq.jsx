import React from 'react'
import FaqIntro from '../components/faq/FaqIntro'
import Navbar from '../components/Navbar'
import FaqTab from '../components/faq/FaqTab'
import Footer from '../components/Footer'

const Faq = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <FaqIntro />
      <FaqTab />
      <div className='relative bottom-[-54rem] w-full md:bottom-[-85rem] lg:bottom-[-82rem] xl:bottom-[-87rem]'>
        <Footer />
      </div>
    </div>
  )
}

export default Faq