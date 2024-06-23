import React, { useState, useEffect } from 'react'
import './index.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import { Popup } from './components/Popup/Popup';
import AOS from 'aos';
import "aos/dist/aos.css";
import { WhyChoose } from './components/WhyChoose/WhyChoose';
import {About} from './components/About/About';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const TogglePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    }),
    AOS.refresh();
  }, [])
  return (
    <div className='overflow-x-hidden'>

      <Navbar TogglePopup ={TogglePopup}/>
      <Hero />
      <Banner />
      <WhyChoose/>
      <About/>
      <Footer />
      <Popup showPopup ={showPopup } setShowPopup = { setShowPopup} />
    </div>  

  );
};

export default App;