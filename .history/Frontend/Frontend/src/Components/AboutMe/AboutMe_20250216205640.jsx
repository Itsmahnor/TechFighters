import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import img2 from '../Navbar/Images/img2.jpeg'

export const AboutMe = () => {
  return (
    <div className="w-[100vw] md:h-auto lg:h-[80vh] pt-20 bg-gradient-to-r bg-[#6A0DAD]  flex justify-center text-white text-[1.2rem]">
      <div className="w-100 lg:mx-28 mx-13 h-auto flex flex-wrap">
        {/* Image Section */}
        <div className="md:w-[50%] md:h-[70%] flex gap-7 flex-wrap justify-center items-center">
          <div className="w-100 h-100 p-2 relative overflow-hidden text-center">
            <img 
              src={img2} 
              alt="image" 
              className="h-full w-full lg:object-contain filter brightness-75 transition duration-300 hover:brightness-50" 
            />
            <p className="absolute -bottom-3 right-36 flex justify-center items-center bg-gradient-to-r from-[#6A0DAD] to-[#8B4513] px-3 rounded-lg text-white md:font-bold">
              5 years of experience in teaching
            </p>
            <p className="absolute top-0 left-36 flex justify-center items-center bg-gradient-to-r from-[#6A0DAD] to-[#8B4513] px-3 rounded-lg text-white md:font-bold">
              Ahsan Ali
            </p>
          </div>
        </div>
        {/* Text Section */}
        <div className="md:w-[50%] p-5 h-auto flex flex-col justify-start">
          <h3 className="text-[20px] font-bold text-white">About me</h3>
          <h1 className="md:w-[30vw] md:text-[3rem] font-bold text-white">
            Educated Over 30,000+ Students In Pakistan
          </h1>
          <p className="mt-2 text-[#b8b8b8]">
            Over 30,000 students have learned under my guidance, many of whom are now successfully employed across Pakistan. I have also completed 300+ projects and collaborated with industry experts.
          </p>
          <div className="mt-2 flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-[#6A0DAD]" />
            </div>
            <p className="mt-3 text-white">Helping students build their careers</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-[#6A0DAD]" />
            </div>
            <p className="mt-3 text-white">Over 300+ successful projects</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-[#6A0DAD]" />
            </div>
            <p className="mt-3 text-white">Industry collaboration with experts</p>
          </div>
          <div className="flex gap-4 items-center mt-3">
            <Link to="/instructors">
              <div className="bg-gradient-to-r from-[#FFD700] to-[#FFC107] rounded-full p-3 flex items-center justify-center">
                <IoIosArrowDropright className="text-[#6A0DAD]" />
              </div>
            </Link>
            <p className="mt-3 text-white">Get more Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};
