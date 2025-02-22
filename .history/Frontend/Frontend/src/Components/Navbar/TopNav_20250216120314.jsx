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
      <div className='w-[80vw] flex justify-around items-center topnavwidth'>
        <div className='hideRes flex'>
          {/* White text on a dark background for clarity */}
          <p className='text-[1rem] pt-2 text-white'>
            +923276381819 | info@ProLernoX.pk
          </p>
        </div>
        <div className='flex gap-8 justify-center items-center'>
          <Link to="/register">
            {/* Neon green for Register link + icon */}
            <div className="flex gap-2 justify-center items-center text-[#39FF14] register1">
              <FaRegUserCircle />
              <p className='text-[1rem] pt-2 register1'>Register</p>
            </div>
          </Link>
          <div className="flex gap-2 justify-center items-center">
            {/* Neon green for social icons */}
            <FaFacebookF className='text-[#39FF14]' />
            <FaInstagram className='text-[#39FF14]' />
            <FaWhatsapp className='text-[#39FF14]' />
            <SiGmail className='text-[#39FF14]' />
          </div>
        </div>
      </div>
    </div>
  )
}
