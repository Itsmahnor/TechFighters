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
  // State for offcanvas and dropdowns
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  // New state for courses submenu
  const [openCategory, setOpenCategory] = useState(null);
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-[100vw] h-[16vh] bg-[#DAC3E8] flex justify-center items-center text-black font-bold text-[1.4rem]'>
      <div className='w-[80vw] flex justify-around bottom'>
        {/* Logo Section */}
        <div className='w-[280px] h-[120px]  lg:h-[130px] p-[15px] flex justify-center items-center'>
          <img src={tech} alt="Logo" className='h-[100%]' />
        </div>

        {/* Navigation Links */}
        <div className='flex justify-center items-center gap-7 left-nav'>
          {/* Home Link */}
          <Link to="/">
            <span className='text-black hover:text-[#A06CD5] transition-colors'>Home</span>
          </Link>

          {/* Courses Dropdown */}
          <button className="text-black px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
            Courses
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex justify-center items-center hidden bg-[#C19EE0] text-black lg:w-[22vw] md:w-[17vw] border h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
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
          </button>

          {/* Opportunities Dropdown */}
          <div className="flex gap-2 justify-center items-center relative group cursor-pointer text-black">
            <span>Opportunities</span>
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex hidden bg-[#C19EE0] border text-black lg:w-[13vw] h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-2 cursor-pointer shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-2">
                  <Link to="/internship">
                    <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Internship Offer</li>
                  </Link>
                  <Link to="/tutor">
                    <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Become Tutor</li>
                  </Link>
                  <Link to="/job">
                    <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Job Offer</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="text-black px-4 py-2 rounded-md flex items-center gap-2">
              About Us
              <MdOutlineKeyboardArrowDown />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-[#C19EE0] text-black lg:w-[14vw] border p-4 rounded-md shadow-lg hidden group-hover:block z-10 transition-all duration-300 ease-in-out">
              <ul>
                <Link to="/choose">
                  <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Why TechFighters</li>
                </Link>
                <Link to="/instructors">
                  <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Our Instructors</li>
                </Link>
                <li
                  className="py-2 flex justify-between items-center cursor-pointer hover:text-[#A06CD5] transition-colors"
                  onMouseEnter={() => setBranchesOpen(true)}
                  onMouseLeave={() => setBranchesOpen(false)}
                >
                  Our Branches
                  <MdOutlineKeyboardArrowRight />
                  {branchesOpen && (
                    <div className="absolute top-14 left-full ml-2 bg-[#C19EE0] lg:w-[14vw] border p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                      <ul>
                        <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Bahawalpur</li>
                        <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Hatheji</li>
                        <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Jalalpur Pirwala</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us Link */}
          <Link to="/contact">
            <span className='text-black hover:text-[#A06CD5] transition-colors'>Contact Us</span>
          </Link>

          {/* Search Icon */}
          <span className='hide'>
            <FaSearch className='text-black hover:text-[#A06CD5] transition-colors' />
          </span>

          {/* Find Program Button */}
          <Link to="/findProgram">
            <div className='flex gap-1 justify-center items-center bg-[#C19EE0] px-7 py-4 rounded-full hide hover:bg-[#A06CD5] transition-colors'>
              <span>
                <PiGraduationCapBold className='text-[1.6rem] text-black' />
              </span>
              <span>
                <PiLineVerticalLight className='text-[2rem] text-black' />
              </span>
              <span className='text-[1rem] text-black'>Find Program</span>
            </div>
          </Link>
        </div>

        {/* Toggle for Mobile View */}
        <div variant="primary" className="d-lg-none text-[2rem] text-black bar" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas for Mobile View */}
        {/* Offcanvas for Mobile View */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-black bg-white border-b border-gray-700">
            <div className="w-[150px] mx-auto">
              <img src={tech} alt="logo" className="w-full object-contain" />
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className='p-0'>
            <div className="bg-[#C19EE0] w-full text-black h-full flex flex-col items-start px-5 py-8 gap-4">
              {/* Navigation Links */}
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1.2rem]">
                  <Link to="/">
                    <li className="hover:text-[#A06CD5] text-black cursor-pointer">Home</li>
                  </Link>

                  {/* Courses Dropdown */}
                  <li className="flex flex-col w-full">
                    <div className="flex items-center justify-between text-black cursor-pointer" onClick={() => setShowCourses(!showCourses)}>
                      <span>Courses</span>
                      {showCourses ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                    </div>
                    {showCourses && (
                      <ul className="pl-4 mt-2 text-[1rem] flex flex-col gap-2">
                        {coursesData.map((category) => (
                          <li key={category.category} className="flex flex-col w-full"
                          onClick={() => setOpenCategory(category.category)}
                          onMouseLeave={() => setOpenCategory(null)}>
                            <div className="flex items-center gap-2 cursor-pointer text-black">
                              <span className="font-medium">{category.category}</span>
                            </div>
                            {openCategory === category.category && (
                           <ul className="pl-4 mt-2 text-[0.9rem] flex flex-col gap-1">
                              {category.courses.map((course) => (
                                <Link to={`/course/${course.route}`} key={course.name}>
                                  <li className="py-1 hover:text-[#A06CD5] text-black transition-colors">{course.name}</li>
                                </Link>
                              ))}
                            </ul>) }
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Opportunities Dropdown */}
                  <li className="flex flex-col w-full">
                    <div className="flex items-center justify-between text-black cursor-pointer" onClick={() => setShowOpportunities(!showOpportunities)}>
                      <span>Opportunities</span>
                      {showOpportunities ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                    </div>
                    {showOpportunities && (
                      <ul className="pl-4 mt-2 text-[1rem] flex flex-col gap-2">
                        <Link to="/internship">
                          <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Internship Offer</li>
                        </Link>
                        <Link to="/tutor">
                          <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Become Tutor</li>
                        </Link>
                        <Link to="/job">
                          <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Job Offer</li>
                        </Link>
                      </ul>
                    )}
                  </li>

                  {/* About Us Dropdown */}
                  <li className="flex flex-col w-full">
                    <div className="flex items-center justify-between text-black cursor-pointer" onClick={() => setShowAboutUs(!showAboutUs)}>
                      <span>About Us</span>
                      {showAboutUs ? <MdOutlineKeyboardArrowDown /> : <FaPlus />}
                    </div>
                    {showAboutUs && (
                      <ul className="pl-4 mt-2 text-[1rem] flex flex-col gap-2">
                        <Link to="/choose">
                          <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Why TechFighters</li>
                        </Link>
                        <Link to="/instructors">
                          <li className="py-2 hover:text-[#A06CD5] text-black transition-colors">Our Instructors</li>
                        </Link>
                       
                      </ul>
                    )}
                  </li>

                  {/* Contact Us */}
                  <Link to="/contact">
                    <li className="hover:text-[#A06CD5] text-black cursor-pointer">Contact Us</li>
                  </Link>
                  <Link to="/findProgram">
            <div className='flex gap-1 justify-center items-center bg-[#A06CD5] px-7 py-4 rounded-full hide hover:bg-[#A06CD5] transition-colors'>
              <span>
                <PiGraduationCapBold className='text-[1.6rem] text-black' />
              </span>
              <span>
                <PiLineVerticalLight className='text-[2rem] text-black' />
              </span>
              <span className='text-[1rem] text-black'>Find Program</span>
            </div>
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
