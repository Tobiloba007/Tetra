import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HomeIntro from '../components/home/HomeIntro'
import HomeIntroFooter from '../components/home/HomeIntroFooter'
import HomeVideo from '../components/home/HomeVideo'
import HomeSecurity from '../components/home/HomeSecurity'
import HomeReview from '../components/home/HomeReview'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <>
        <Navbar />
        <HomeIntro />
        <HomeIntroFooter />
        <div id='howItWorks'>
          <HomeVideo />
        </div>
        <HomeSecurity />
        <HomeReview />
        <Footer />
    </>
  )
}

export default Home