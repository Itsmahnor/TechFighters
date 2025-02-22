import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className='bg-[#6A0DAD] w-[100vw] flex justify-center items-center m-0 p-0 TopNavRes'>
      <div className='w-[80vw] flex justify-around items-center topnavwidth'>
        {/* Contact Info */}
        <div className='hideRes flex'>
          <p className='text-[1rem] pt-2 text-white'>
            +92302702238 | ahsanmalik6229@gmail.com
          </p>
        </div>

        {/* Register and Social Icons */}
        <div className='flex gap-8 justify-center items-center'>
          {/* Register Link */}
          <Link to="/register">
            <div className="flex gap-2 justify-center text-white items-center register1 hover:text-[#FFD700] transition-colors">
              <FaRegUserCircle />
              <p className='text-[1rem] pt-2 text-white register1 hover:text-[#FFD700] transition-colors'>
                Register
              </p>
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-2 justify-center items-center">
            <FaFacebookF className='text-white hover:text-[#FFD700] transition-colors' />
            <FaInstagram className='text-white hover:text-[#FFD700] transition-colors' />
            <FaWhatsapp className='text-white hover:text-[#FFD700] transition-colors' />
            <SiGmail className='text-white hover:text-[#FFD700] transition-colors' />
          </div>
        </div>
      </div>
    </div>
  );
};