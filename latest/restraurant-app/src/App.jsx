import React, { useState } from 'react'
import './index.css';

import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import { Popup } from './components/Popup/Popup';


const App = () => {
  const [show, setShow] = useState(false);
  const togglePopup = () => {
    setShow(true);
  }
  return (
    <div className='overflow-x-hidden'>

      <Navbar TogglePopup ={togglePopup}/>
      <Hero />
      <Banner />
      <Footer />
      <Popup show ={show } setShow = { setShow} />
    </div>  

  )
}

export default App;