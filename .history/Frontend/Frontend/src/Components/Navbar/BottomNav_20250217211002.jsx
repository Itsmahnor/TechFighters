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
  const [showOpportunities, setShowOpportunities] = useState(false); // New state for Offcanvas dropdown

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
        <div className='flex justify-center items-center gap-7 left-nav'>
          <Link to="/" className='text-black hover:text-[#A06CD5] transition-colors'>Home</Link>

          {/* Courses Dropdown */}
          <button className="text-black px-4 py-2 rounded-md flex justify-center items-center gap-2 relative group">
            Courses
            <MdOutlineKeyboardArrowDown />
            <div className="group-hover:flex justify-center items-center hidden bg-[#C19EE0] text-black lg:w-[22vw] md:w-[17vw] border h-auto absolute top-[50px] left-1/2 transform -translate-x-1/2 p-6 shadow-lg rounded-md z-10 flex-col transition-all duration-300 ease-in-out">
              <ul className="flex flex-col gap-3">
                {coursesData.map((category) => (
                  <li key={category.category} className="relative"
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

          <Link to="/contact" className='text-black hover:text-[#A06CD5] transition-colors'>Contact Us</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div variant="primary" className="d-lg-none text-[2rem] text-black bar" onClick={handleShow}>
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
              {/* Navigation Links */}
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-[1.2rem]">
                  <Link to="/">
                    <li className="hover:text-[#A06CD5] text-black cursor-pointer">Home</li>
                  </Link>

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

                  <Link to="/findProgram">
                    <li className="cursor-pointer text-black">Find Program</li>
                  </Link>
                  <Link to="/contact">
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
