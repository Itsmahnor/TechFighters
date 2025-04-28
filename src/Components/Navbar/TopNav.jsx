import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className='bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] w-[100vw] flex justify-center items-center m-0 p-0 TopNavRes'>
      <div className='w-[80vw] flex justify-around items-center topnavwidth'>
        {/* Contact Info */}
        <div className='hideRes flex'>
          <p className='text-[1rem] pt-2 text-black'>
            +92302702238 | ahsanmalik6229@gmail.com
          </p>
        </div>

        {/* Register and Social Icons */}
        <div className='flex gap-8 justify-center items-center'>
          {/* Register Link */}
          <Link to="/register">
            <div className="flex gap-2 justify-center text-black items-center register1 hover:text-[#A06CD5] transition-colors">
              <FaRegUserCircle />
              <p className='text-[1rem] pt-2 text-black register1 hover:text-[#A06CD5] transition-colors'>
                Register
              </p>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-2 justify-center items-center">
            <FaFacebookF className='text-black hover:text-[#A06CD5] transition-colors' />
            <FaInstagram className='text-black hover:text-[#A06CD5] transition-colors' />
            <FaWhatsapp className='text-black hover:text-[#A06CD5] transition-colors' />
            <SiGmail className='text-black hover:text-[#A06CD5] transition-colors' />
          </div>
        </div>
      </div>
    </div>
  );
};
