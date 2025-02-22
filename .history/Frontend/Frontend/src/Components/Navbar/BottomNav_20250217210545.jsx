import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaSearch, FaBars } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { coursesData } from './Bottom';
import tech from './Images/tech.png';

export const BottomNav = () => {
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-[100vw] h-[16vh] bg-[#DAC3E8] flex justify-center items-center text-black font-bold text-[1.4rem]'>
      <div className='w-[80vw] flex justify-around bottom'>
        {/* Logo Section */}
        <div className='w-[280px] h-[150px] lg:h-[130px] p-[15px] flex justify-center items-center'>
          <img src={tech} alt="Logo" className='h-[100%]' />
        </div>

        {/* Navigation Links */}
        <div className='hidden lg:flex justify-center items-center gap-7 left-nav'>
          <Link to="/">
            <span className='text-black hover:text-[#A06CD5] transition-colors'>Home</span>
          </Link>

          {/* Courses Dropdown */}
          <div className="relative group">
            <button className="text-black px-4 py-2 rounded-md flex justify-center items-center gap-2">
              Courses <MdOutlineKeyboardArrowDown />
            </button>
            <div className="group-hover:flex hidden bg-[#C19EE0] text-black lg:w-[22vw] md:w-[17vw] border h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <ul className="flex flex-col gap-3">
                {coursesData.map((category) => (
                  <li
                    key={category.category}
                    className="relative"
                    onMouseEnter={() => setOpenCategory(category.category)}
                    onMouseLeave={() => setOpenCategory(null)}
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <span className="text-lg font-semibold">{category.category}</span>
                      <MdOutlineKeyboardArrowRight />
                    </div>
                    {openCategory === category.category && (
                      <div className="absolute top-0 left-full ml-2 w-[450px] bg-[#C19EE0] border p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                        <ul className="flex flex-col gap-2">
                          {category.courses.map((course) => (
                            <Link to={`/course/${course.route}`} key={course.name}>
                              <li className="flex items-center gap-2 cursor-pointer font-medium text-black hover:text-[#A06CD5] transition-colors">
                                <course.icon /> {course.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Navigation Links */}
          <Link to="/opportunities">
            <span className='text-black hover:text-[#A06CD5] transition-colors'>Opportunities</span>
          </Link>

          <Link to="/about">
            <span className='text-black hover:text-[#A06CD5] transition-colors'>About Us</span>
          </Link>

          <Link to="/contact">
            <span className='text-black hover:text-[#A06CD5] transition-colors'>Contact Us</span>
          </Link>

          <Link to="/findProgram">
            <div className='flex gap-1 justify-center items-center bg-[#C19EE0] px-7 py-4 rounded-full hover:bg-[#A06CD5] transition-colors'>
              <PiGraduationCapBold className='text-[1.6rem] text-black' />
              <PiLineVerticalLight className='text-[2rem] text-black' />
              <span className='text-[1rem] text-black'>Find Program</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="d-lg-none text-[2rem] text-black bar cursor-pointer" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas for Mobile View */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-black bg-white border-b border-gray-700">
            <div className="w-[150px] mx-auto">
              <img src={tech} alt="logo" className="w-full object-contain" />
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className='p-0'>
            <div className="bg-[#C19EE0] w-full text-black h-full flex flex-col items-start px-5 py-8 gap-4">
              {/* Mobile Navigation Links */}
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1.2rem]">
                  <Link to="/" onClick={handleClose}>
                    <li className="hover:text-[#A06CD5] text-black cursor-pointer">Home</li>
                  </Link>

                  {/* Dropdown for Courses */}
                  <li
                    className="flex items-center justify-between text-black cursor-pointer"
                    onClick={() => setMobileDropdown(mobileDropdown === "courses" ? null : "courses")}
                  >
                    <span>Courses</span><FaPlus />
                  </li>
                  {mobileDropdown === "courses" && (
                    <ul className="pl-5 text-[1rem]">
                      {coursesData.map((category) => (
                        <li key={category.category}>
                          <span className="font-semibold">{category.category}</span>
                          <ul className="pl-4">
                            {category.courses.map((course) => (
                              <Link to={`/course/${course.route}`} key={course.name} onClick={handleClose}>
                                <li className="hover:text-[#A06CD5]">{course.name}</li>
                              </Link>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link to="/opportunities" onClick={handleClose}>
                    <li className="hover:text-[#A06CD5] text-black cursor-pointer">Opportunities</li>
                  </Link>

                  <Link to="/about" onClick={handleClose}>
                    <li className="hover:text-[#A06CD5] text-black cursor-pointer">About Us</li>
                  </Link>

                  <Link to="/findProgram" onClick={handleClose}>
                    <li className="cursor-pointer text-black">Find Program</li>
                  </Link>

                  <Link to="/contact" onClick={handleClose}>
                    <li className="cursor-pointer text-black">Contact Us</li>
                  </Link>
                </ul>
              </nav>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};
