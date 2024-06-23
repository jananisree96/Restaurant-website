import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className='text-white mt-20'>
                <div className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
                    {/* header section */}
                    <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>

                    {/* grid section */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>
                        {/* Address section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <IoLocationSharp className='text-5xl' />
                            </div>
                            <p>#92, 3rd Main, Tech City
                                <br /> Miami, Florida, USA
                            </p>
                        </div>

                        {/* Email section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <MdEmail className='text-5xl' />
                            </div>
                            <div>
                                <p>info@goodfood.com</p>
                                <p>hr@goodfood.com</p>
                            </div>
                        </div>

                        {/* Phone section */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <FaPhone className='text-5xl' />
                            </div>
                            <div>
                                <p>+91 0452859671 - Reception</p>
                                <p>+91 7518624839 - Hiring Queries</p>
                                <p>+91 9283187649 - Whatsapp</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* copyright and links section */}
                    <div className='flex flex-col sm:flex-row justify-between items-center p-4 space-y-4 sm:space-y-0'>
                        <p>&copy; 2024 GoodFood. All rights reserved</p>
                        <div className='flex flex-col sm:flex-row items-center gap-6'>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
