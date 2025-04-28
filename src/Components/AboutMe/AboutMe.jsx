import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import img2 from '../Navbar/Images/img2.jpeg';

export const AboutMe = () => {
  return (
    <div className="w-[100vw] md:h-auto sm:h-auto   pt-32 bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] flex justify-center text-black text-[1.2rem] py-20 ">
      <div className="w-100 lg:mx-28 mx-13 h-auto flex flex-wrap">
        {/* Image Section */}
        <div className="md:w-[50%] md:h-[100%] flex gap-7 flex-wrap justify-center items-center">
          <div className="w-100 h-100 pt-20 relative overflow-hidden text-center flex justify-center items-center">
            <img 
              src={img2} 
              alt="image" 
              className=" w-[90%] h-[100%] rounded-3xl lg:object-contain filter brightness-75 transition duration-300 hover:brightness-50" 
            />
            {/* <p className="absolute -bottom-3 right-48 flex justify-center items-center bg-gradient-to-r from-[#B185DB] to-[#C19EE0] px-3 rounded-lg text-black md:font-bold">
              5 years of experience in teaching
            </p>
            <p className="absolute top-0 left-48 flex justify-center items-center bg-gradient-to-r from-[#B185DB] to-[#C19EE0] px-3 rounded-lg text-black md:font-bold">
              Ahsan Malik
            </p> */}
          </div>
        </div>
        {/* Text Section */}
        <div className="md:w-[50%] p-5 h-auto flex flex-col justify-center">
          <h3 className="text-[20px] font-bold text-black">About me</h3>
          <h1 className="md:w-[30vw] text-[3rem] font-bold text-black">
            Educated Over 30,000+ Students In Pakistan
          </h1>
          <p className="mt-2 text-[#4A4A4A]">
            Over 30,000 students have learned under my guidance, many of whom are now successfully employed across Pakistan. I have also completed 300+ projects and collaborated with industry experts.
          </p>
          <div className="mt-2 flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#A06CD5] to-[#9163CB] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-black" />
            </div>
            <p className="mt-3 text-black">Helping students build their careers</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#A06CD5] to-[#9163CB] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-black" />
            </div>
            <p className="mt-3 text-black">Over 300+ successful projects</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-[#A06CD5] to-[#9163CB] rounded-full flex items-center justify-center">
              <BsArrowRightCircle className="text-black" />
            </div>
            <p className="mt-3 text-black">Industry collaboration with experts</p>
          </div>
          <div className="flex gap-4 items-center mt-3">
            <Link to="/instructors">
              <div className="bg-gradient-to-r from-[#A06CD5] to-[#9163CB] rounded-full p-3 flex items-center justify-center">
                <IoIosArrowDropright className="text-black" />
              </div>
            </Link>
            <p className="mt-3 text-black">Get more Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};
