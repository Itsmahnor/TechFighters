import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <div className='bg-[#1B1B1B] w-[100vw] flex justify-center items-center m-0 p-0 TopNavRes'>
      <div className='w-[80vw] flex justify-between items-center topnavwidth'>
        {/* Contact Info */}
        <div className='hideRes flex'>
          <p className='text-[1rem] pt-2 text-white'>
            +923276381819 | info@ProLernoX.pk
          </p>
        </div>
        {/* Register Link & Social Icons */}
        <div className='flex gap-8 justify-center items-center'>
          <Link to="/register">
            <div className="flex gap-2 justify-center items-center text-[#39FF14] hover:text-[#4B0082] transition-colors duration-300 register1">
              <FaRegUserCircle />
              <p className='text-[1rem] pt-2 register1'>Register</p>
            </div>
          </Link>
          <div className="flex gap-2 justify-center items-center">
            <FaFacebookF className='text-[#39FF14] hover:text-[#4B0082] transition-colors duration-300' />
            <FaInstagram className='text-[#39FF14] hover:text-[#4B0082] transition-colors duration-300' />
            <FaWhatsapp className='text-[#39FF14] hover:text-[#4B0082] transition-colors duration-300' />
            <SiGmail className='text-[#39FF14] hover:text-[#4B0082] transition-colors duration-300' />
          </div>
        </div>
      </div>
    </div>
  )
}
