import React from 'react';
import { FaBus } from "react-icons/fa";

export const WhyChoose = () => {
  return (
    <div>
      <div className='py-14 md:py-28 bg-gray-50'>
        <div className='container mx-auto'>
          <h1 className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us</h1>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
             
              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem sit.</p>
              <p className='text-5xl rotate-90 text-secondary translate-x-5'>.....</p>
               <FaBus className='text-5xl text-secondary' />
            </div>
              <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
             
             <FaBus className='text-5xl text-primary' />
              <p className='text-5xl rotate-90 text-primary translate-x-5'>.....</p>
              <p className='text-dark/70 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni exercitationem sit.</p>
             
               
            </div>
              <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
             
              <p className='text-dark/70 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni exercitationem sit.</p>
              <p className='text-5xl rotate-90 text-secondary translate-x-5'>.....</p>
               <FaBus className='text-5xl text-secondary' />
            </div>
              <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
             <FaBus className='text-5xl text-primary' />
             <p className='text-5xl rotate-90 text-primary translate-x-5'>.....</p>
              <p className='text-dark/70 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni exercitationem sit.</p>
              
            </div>
            {/* Repeat the above block as needed for other icons/text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
