import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { PiGraduationCapBold } from "react-icons/pi";
import { PiLineVerticalLight } from "react-icons/pi";
import { FaBars, FaPlus } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { coursesData } from './Bottom';
import tech from './Images/tech.jpeg';

export const BottomNav = () => {
  // State for offcanvas and dropdowns
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-[100vw] h-[16vh] bg-white flex justify-center items-center text-[#6A0DAD] font-bold text-[1.4rem]'>
      <div className='w-[80vw] flex justify-around bottom'>
        {/* Logo Section */}
        <div className='w-[280px] md:h-[180px] lg:h-[150px] p-[15px] text-[#6A0DAD] flex justify-center items-center'>
          <img src={tech} alt="Logo" className='h-[100%] ' />
        </div>

        {/* Navigation Links */}
        <div className='flex justify-center items-center gap-7 left-nav'>
          {/* Home Link */}
          <Link to="/">
            <span className='text-[#6A0DAD] hover:text-[#FFD700] transition-colors'>Home</span>
          </Link>

          {/* Courses Dropdown */}
          <button className="text-[#6A0DAD] px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
            Courses
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex hidden bg-[#6A0DAD] text-white lg:w-[78vw] md:w-[40vw]  border h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <div className="flex justify-between gap-6">
                {coursesData.map((category) => (
                  <div className="flex flex-col gap-3" key={category.category}>
                    <h3 className="text-lg font-semibold text-[#FFD700]">{category.category}</h3>
                    <ul className="flex flex-col gap-2">
                      {category.courses.map((course) => (
                        <Link to={`/course/${course.route}`} key={course.name}>
                          <li className="flex items-center gap-2 cursor-pointer text-white font-medium hover:text-[#FFD700] transition-colors">
                            <course.icon /> {course.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </button>

          {/* Opportunities Dropdown */}
          <div className="flex gap-2 justify-center items-center relative group cursor-pointer text-[#6A0DAD]">
            <span>Opportunities</span>
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex hidden bg-[#6A0DAD] border text-white lg:w-[13vw] h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-2 cursor-pointer shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <div className="flex flex-col gap-3">
                <ul className="flex flex-col gap-2 ">
                  <Link to="/internship">
                    <li className="py-2 hover:text-[#FFD700] transition-colors text-white">Internship Offer</li>
                  </Link>
                  <Link to="/tutor">
                    <li className="py-2 hover:text-[#FFD700] transition-colors text-white">Become Tutor</li>
                  </Link>
                  <Link to="/job">
                    <li className="py-2 hover:text-[#FFD700] transition-colors text-white">Job Offer</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="text-[#6A0DAD] px-4 py-2 rounded-md flex items-center gap-2">
              About Us
              <MdOutlineKeyboardArrowDown />
            </button>
            <div className="absolute top-full left-0 mt-2 bg-[#6A0DAD] text-white lg:w-[14vw] md:w-[13vw] sm:w-auto border p-4 rounded-md shadow-lg hidden group-hover:block z-10 transition-all duration-300 ease-in-out">
              <ul>
                <Link to="/choose">
                  <li className="py-2 text-white hover:text-[#FFD700]  transition-colors">Why TechFighters</li>
                </Link>
                <Link to="/instructors">
                  <li className="py-2 text-white hover:text-[#FFD700]  transition-colors">Our Instructors</li>
                </Link>
                <li
                  className="py-2 flex justify-between items-center cursor-pointer hover:text-[#FFD700] transition-colors"
                  onMouseEnter={() => setBranchesOpen(true)}
                  onMouseLeave={() => setBranchesOpen(false)}
                >
                  Our Branches
                  <MdOutlineKeyboardArrowRight />
                  {branchesOpen && (
                    <div className="absolute top-14 left-full ml-2 bg-[#6A0DAD] md:w-[13vw] w-auto border p-4 rounded-md shadow-lg transition-all duration-300 ease-in-out">
                      <ul>
                        <li className="py-2 hover:text-[#FFD700] transition-colors">Bahawalpur</li>
                        <li className="py-2 hover:text-[#FFD700] transition-colors">Hatheji</li>
                        <li className="py-2 hover:text-[#FFD700] transition-colors">Jalalpur Pirwala</li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us Link */}
          <Link to="/contact">
            <span className='text-[#6A0DAD] hover:text-[#FFD700] transition-colors'>Contact Us</span>
          </Link>

          {/* Search Icon */}
          <span className='hide'>
            <FaSearch className='text-[#6A0DAD] hover:text-[#FFD700] transition-colors' />
          </span>

          {/* Find Program Button */}
          <Link to="/findProgram">
            <div className='flex gap-1 justify-center items-center bg-[#6A0DAD] px-7 py-4 rounded-full hide hover:bg-[#FFD700] transition-colors'>
              <span>
                <PiGraduationCapBold className='text-[1.6rem] text-white' />
              </span>
              <span>
                <PiLineVerticalLight className='text-[2rem] text-white' />
              </span>
              <span className='text-[1rem] text-white'>Find Program</span>
            </div>
          </Link>
        </div>

        {/* Toggle for Mobile View */}
        <div variant="primary" className="d-lg-none text-[2rem] text-[#6A0DAD] bar" onClick={handleShow}>
          <FaBars />
        </div>

        {/* Offcanvas for Mobile View */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-[1.5rem] font-semibold text-[#6A0DAD] bg-white border-b border-gray-700">
            <div className="w-[250px] mx-auto">
              <img
                src="logo.png"
                alt="logo"
                className="w-full object-contain"
              />
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body className='p-0'>
            <div className="bg-[#6A0DAD] w-full text-white h-full flex flex-col items-start px-5 py-8 gap-4">
              {/* Navigation Links */}
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1.2rem]">
                  <Link to="/">
                    <li className="hover:text-[#FFD700] cursor-pointer">Home</li>
                  </Link>
                  <Link to="/internship">
                    <li className="flex items-center justify-between cursor-pointer">
                      <span>Opportunities</span><FaPlus />
                    </li>
                  </Link>
                  <Link to="/choose">
                    <li className="flex items-center justify-between cursor-pointer">
                      <span>About Us</span> <FaPlus />
                    </li>
                  </Link>
                  <Link to="/findProgram">
                    <li className="cursor-pointer">Find Program</li>
                  </Link>
                  <Link to="/contact">
                    <li className="cursor-pointer">Contact Us</li>
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
