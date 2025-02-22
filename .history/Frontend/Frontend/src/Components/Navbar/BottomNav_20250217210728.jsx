import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaSearch, FaBars } from "react-icons/fa";
import { PiGraduationCapBold, PiLineVerticalLight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { coursesData } from './Bottom';
import tech from './Images/tech.png';

export const BottomNav = () => {
  const [show, setShow] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="w-full h-[16vh] bg-[#DAC3E8] flex justify-center items-center text-black font-semibold text-lg shadow-md">
      <div className="w-[85vw] flex justify-between items-center">
        
        {/* Logo */}
        <div className="w-[200px] h-auto flex items-center">
          <img src={tech} alt="Logo" className="h-[90%] object-contain" />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8 hidden lg:flex">
          <Link to="/" className="hover:text-[#A06CD5] transition">Home</Link>

          {/* Courses Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2">
              Courses <MdOutlineKeyboardArrowDown />
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-[#C19EE0] text-black w-[240px] border p-4 rounded-md shadow-md z-20">
              {coursesData.map((category) => (
                <div key={category.category} className="relative">
                  <div
                    className="flex items-center justify-between cursor-pointer hover:text-[#A06CD5] transition"
                    onMouseEnter={() => setOpenCategory(category.category)}
                    onMouseLeave={() => setOpenCategory(null)}
                  >
                    {category.category} <MdOutlineKeyboardArrowRight />
                  </div>
                  {openCategory === category.category && (
                    <div className="absolute top-0 left-full ml-2 bg-[#C19EE0] border p-4 rounded-md shadow-md w-[250px]">
                      {category.courses.map((course) => (
                        <Link to={`/course/${course.route}`} key={course.name} className="flex items-center gap-2 hover:text-[#A06CD5] transition">
                          <course.icon /> {course.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2">
              Opportunities <MdOutlineKeyboardArrowDown />
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-[#C19EE0] text-black w-[180px] border p-4 rounded-md shadow-md z-20">
              <Link to="/internship" className="hover:text-[#A06CD5] transition">Internship Offer</Link>
              <Link to="/tutor" className="hover:text-[#A06CD5] transition">Become Tutor</Link>
              <Link to="/job" className="hover:text-[#A06CD5] transition">Job Offer</Link>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2">
              About Us <MdOutlineKeyboardArrowDown />
            </button>
            <div className="absolute hidden group-hover:flex flex-col bg-[#C19EE0] text-black w-[180px] border p-4 rounded-md shadow-md z-20">
              <Link to="/choose" className="hover:text-[#A06CD5] transition">Why TechFighters</Link>
              <Link to="/instructors" className="hover:text-[#A06CD5] transition">Our Instructors</Link>
              <div
                className="flex justify-between items-center hover:text-[#A06CD5] transition cursor-pointer"
                onMouseEnter={() => setBranchesOpen(true)}
                onMouseLeave={() => setBranchesOpen(false)}
              >
                Our Branches <MdOutlineKeyboardArrowRight />
              </div>
              {branchesOpen && (
                <div className="absolute top-14 left-full ml-2 bg-[#C19EE0] w-[180px] border p-4 rounded-md shadow-md">
                  <p className="hover:text-[#A06CD5] transition">Bahawalpur</p>
                  <p className="hover:text-[#A06CD5] transition">Hatheji</p>
                  <p className="hover:text-[#A06CD5] transition">Jalalpur Pirwala</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us */}
          <Link to="/contact" className="hover:text-[#A06CD5] transition">Contact Us</Link>

          {/* Search Icon */}
          <FaSearch className="text-black hover:text-[#A06CD5] transition cursor-pointer" />

          {/* Find Program Button */}
          <Link to="/findProgram" className="flex items-center bg-[#C19EE0] px-6 py-3 rounded-full hover:bg-[#A06CD5] transition">
            <PiGraduationCapBold className="text-xl text-black" />
            <PiLineVerticalLight className="text-2xl text-black" />
            <span className="text-sm text-black">Find Program</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <FaBars className="text-2xl text-black lg:hidden cursor-pointer" onClick={handleShow} />

        {/* Offcanvas Menu */}
        <Offcanvas show={show} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton className="text-xl font-semibold text-black bg-white border-b border-gray-700">
            <div className="w-[150px] mx-auto">
              <img src={tech} alt="logo" className="w-full object-contain" />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className="p-0">
            <div className="bg-[#C19EE0] w-full text-black h-full flex flex-col items-start px-5 py-8 gap-4">
              <nav className="w-full">
                <ul className="flex flex-col gap-6 text-lg">
                  <Link to="/" className="hover:text-[#A06CD5] transition">Home</Link>
                  <Link to="/internship" className="flex items-center justify-between cursor-pointer">
                    Opportunities <FaPlus />
                  </Link>
                  <Link to="/choose" className="flex items-center justify-between cursor-pointer">
                    About Us <FaPlus />
                  </Link>
                  <Link to="/findProgram">Find Program</Link>
                  <Link to="/contact">Contact Us</Link>
                </ul>
              </nav>
            </div>
          </Offcanvas.Body>
        </Offcanvas>

      </div>
    </nav>
  );
};
