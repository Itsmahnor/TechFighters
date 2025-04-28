import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TutorData from './Tutor.json';
import { IoMdStar } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

export const Tutor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1507,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 610,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-[100vw] h-auto pt-16 pb-7 bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] flex justify-center text-black">
      <div className="w-[80vw] sm:w-100 h-auto flex justify-around flex-wrap gap-10">
        {/* Section Header */}
        <HeaderSection />
        {/* Slider */}
        <div className="w-[80vw] sm:w-100">
          <CategorySlider settings={settings} />
        </div>
      </div>
    </div>
  );
};

// Header Section Component
const HeaderSection = () => (
  <div>
    <p className="text-center animate text-black font-bold">EXPERT TECHFIGHTER TUTORS</p>
    <h1 className="md:text-[3rem] font-bold text-center animate text-black">
      Empowering Future Tech Leaders
    </h1>
  </div>
);

// Slider Component
const CategorySlider = ({ settings }) => (
  <Slider {...settings}>
    {TutorData.map((item, index) => (
      <div key={index} className="px-2">
        <div
          className="h-auto flex flex-col justify-center items-center 
          bg-[#B185DB] rounded-3xl cursor-pointer text-center p-4 hover:border hover:border-black transition-all"
        >
          {/* Replace tutor name with "XYZ" */}
          <h2 className="text-black mb-2">XYZ</h2>
          <p className="text-gray-600 font-bold mb-2 text-[1.2rem]">{item.subject}</p>
          <p
            className="text-black font-bold border border-black transition-all 
            mx-auto py-2 px-12 rounded mb-2"
          >
            {item.course} COURSE
          </p>
          <div className="flex justify-center items-center w-full mt-7">
            {/* Use random placeholder image from RandomUser API */}
            <img
              src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'men' : 'women'}/${index + 10}.jpg`}
              alt="XYZ"
              className="rounded-full w-[200px] h-[200px] object-cover"
            />
          </div>
          <h3 className="text-black mb-2">{item.no}</h3>
          <p className="text-gray-600 font-bold mb-3 text-[1.2rem]">{item.experience}</p>
          <div className="flex justify-center items-center mt-3">
            <span className="text-[#6247AA] text-[1.5rem] mx-1"><IoMdStar /></span>
            <span className="text-[#6247AA] text-[1.5rem] mx-1"><IoMdStar /></span>
            <span className="text-[#6247AA] text-[1.5rem] mx-1"><IoMdStar /></span>
          </div>
          <div className="mt-3 flex gap-1 text-black">
            <span><FaRegUserCircle className="mt-1" /></span>
            <span>By: XYZ</span>
          </div>
          <div className="flex gap-1 text-black">
            <span><IoMdTime className="mt-1" /></span>
            <span>{item.duration} Month</span>
          </div>
        </div>
      </div>
    ))}
  </Slider>
);
