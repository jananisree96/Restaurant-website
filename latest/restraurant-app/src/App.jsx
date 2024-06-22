import React from 'react'
import './index.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner/Banner';
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Banner />
    </div>
  )
}

export default App