import React from 'react';
import { FaUser } from "react-icons/fa";
import BgPolygon from "../../assets/polygon.png";
import Vector from '../../assets/vector-wave.png';
import Banner from '../Banner/Banner';

const bgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  position: 'relative'
};

export const About = () => {
  return (
    <>
      <div style={bgStyle} className='py-14'>
        <div className='container min-h-[500px] relative z-10'>
          <h1 data-aos="fade" className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About Us</h1>

          <div data-aos="fade" data-aos-delay="300" className='bg-white/80 p-10 my-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium molestias rerum quos, provident, porro, magnam corporis eligendi doloribus iure corrupti! Aspernatur, neque nobis ipsam iusto reprehenderit laborum voluptatum inventore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ratione a praesentium quis nam unde iste mollitia fugit soluta quidem, aliquam possimus sint molestiae! Quasi atque numquam vel! Quis, iure?
          </div>
          <div className='pt-10 flex justify-center'>
            <button className='flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
              <FaUser />
              My Account
            </button>
          </div>
        </div>

        <img src={Vector} alt="Vector Wave" className='absolute top-0 right-0 w-full' />
      </div>
      <Banner />
    </>
  );
};

export default About;
