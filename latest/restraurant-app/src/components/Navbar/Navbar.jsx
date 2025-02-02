import React from 'react';
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "About",
    link: "/#"
  },
  {
    id: 3,
    name: "Contact",
    link: "/#"
  }
];

const Navbar = ({ TogglePopup }) => {
  return (
    <>
      <div data-aos="fade" className='bg-white shadow-md'>
        <div className="container flex justify-between py-4 sm:py-3">
          {/* ----------Navbar-------- */}
          <div className='font-bold text-3xl'>GoodFood</div>
          <div>
            <ul className='sm:flex items-center gap-10'>
              {NavLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className='hidden sm:inline-block hover:text-primary text-xl font-semibold'>{name}</a>
                </li>
              ))}

              <li className='hidden md:block cursor-pointer group'>
                <a href="/#" className='inline-block hover:text-primary text-xl font-semibold'>
                  <div className='flex items-center gap-[2px] py-2'>
                    Categories
                    <FaCaretDown className='group-hover:rotate-180 duration-300 ml-1' />
                  </div>
                </a>

                <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2'>
                  <ul>
                    <li>
                      <a href="/#" className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                        Vegetables
                      </a>
                    </li>
                    <li>
                      <a href="/#" className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                        Frutis
                      </a>
                    </li>
                    <li>
                      <a href="/#" className='text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                        Grains
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </li>
              <li>
                <button onClick={TogglePopup} className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-5 py-2 hover:scale-105 duration-300'>
                  <FaUser />
                   My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
