import React from 'react';
import { FaBookOpen } from "react-icons/fa";
import img4 from '../Navbar/Images/img4.jpeg'
export const Hero = () => {
  return (
    // Main container: Full width, responsive height, primary color-based color scheme for TechFighters
    <div className='w-[100vw] lg:h-[80vh] bg-[#6A0DAD] flex justify-center items-center text-white font-bold text-[1.2rem] py-5'>
      <div className='w-[80vw] flex justify-around flex-wrap lg:h-[70vh] gap-3'>

        {/* Left section for text content */}
        <div className='lg:flex-1 flex flex-col justify-center px-3'>
          {/* Icon and headline */}
          <div className='flex gap-2 items-center text-white'> 
            <FaBookOpen size={24} className="text-[#FFD700]" />
            <span>100% LEARN ONLINE</span>
          </div>

          {/* Main heading */}
          <h1 className='md:text-[4rem] font-bold text-white'>
            TechFighters: Empowering Tech Talent
          </h1>

          {/* Subtext paragraph */}
          <p className='text-[#b8b8b8] mt-4'>
            Join TechFighters and learn from industry experts. Experience live, interactive, and cutting-edge training designed to prepare you for the tech-driven future.
          </p>

          {/* List of technology icons */}
          <div className='p-3 justify-start'>
            <ul className="relative flex justify-start">
              {[
                "html", "python", "express", "laravel", 
                "django", "php", "Machine_Learning", 
                "java", "wordpress"
              ].map((tech, index) => (
                <li key={index} className={`relative z-[${index + 1}] -ml-[15px]`}>
                  <img
                    src={`https://skillseducation.pk/assets/skillsimages/nav-icons/${tech}.png`}
                    alt={tech}
                    className="w-[50px]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right section for hero image */}
        <div className='lg:flex-1 h-full'>
          <img
            src={img4}
            alt="TechFighters Hero"
            className='h-full rounded-full shadow-lg filter brightness-75 transition duration-300 hover:brightness-50'
          />
        </div>
      </div>
    </div>
  );
};
