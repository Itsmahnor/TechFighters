import React from 'react';
import { FaFacebook, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-8 text-lg bg-gradient-to-r bg-[#B185DB] text-black">
      {/* Footer Content */}
      <div className="container mx-auto p-10">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Logo and Description */}
          <div className="w-full md:w-1/3 mb-8">
            <div className="mb-4">
              <p className="font-extrabold text-[2.4rem]">TechFighters</p>
            </div>
            <p className="mb-4">
              TechFighters empowers future tech leaders with cutting-edge training in Information Technology and digital innovation. We bridge the gap between education and industry to create opportunities for growth and success.
            </p>
            <p className="flex items-center mb-2">
              <i className="bi bi-telephone-fill mr-2"></i> +923276381819
            </p>
            <p className="flex items-center">
              <i className="bi bi-envelope-fill mr-2"></i> info@TechFighters.pk
            </p>
          </div>

          {/* Middle Section: Study Links */}
          <div className="w-full md:w-1/6 mb-8">
            <h5 className="mb-4 ml-5" style={{ color: "black" }}>Study Links</h5>
            <ul className="list-none space-y-3">
              <li><a href="#" className="text-black hover:text-gray-600 transition-colors">Opportunities</a></li>
              <li><a href="#" className="text-black hover:text-gray-600 transition-colors">All Courses</a></li>
              <li><a href="#" className="text-black hover:text-gray-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-black hover:text-gray-600 transition-colors">Become Tutor</a></li>
            </ul>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/6 mb-8">
            <h5 className="mb-4 ml-5" style={{ color: "black" }}>Quick Links</h5>
            <ul className="list-none space-y-3">
              <li><a href="#" className="text-black hover:text-gray-600 transition-colors">Community</a></li>
              <li><a href="#" className="text-black hover:text-gray-600 transition-colors">Support</a></li>
              <li><a href="#" className="text-black hover:text-gray-600 transition-colors">Terms | Privacy</a></li>
            </ul>
          </div>

          {/* Right Section: Accreditations */}
          <div className="w-full md:w-1/3">
            <h5 className="mb-4" style={{ color: "black" }}>Accreditations:</h5>

            {/* FBR Section */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-shrink-0 w-16 sm:w-24 md:w-28 lg:w-32">
                <img
                  src="https://skillseducation.pk/assets/skillsimages/nav-courses-images/fbr%20logo.png"
                  alt="FBR Logo"
                  className="w-full h-auto"
                />
              </div>
              <p className="m-0">Accredited by FBR</p>
            </div>

            {/* SECP Section */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-16 sm:w-24 md:w-28 lg:w-28">
                <img
                  src="https://skillseducation.pk/assets/skillsimages/nav-courses-images/sssss.png"
                  alt="SECP Logo"
                  className="w-full h-auto"
                />
              </div>
              <p className="m-0">Accredited by SECP</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4 text-[1.2rem] bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] text-black">
        <div className="container mx-auto flex justify-between items-center">
          <p className="mb-0">
            © 2024 TechFighters. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-black hover:text-gray-600 transition-colors"><FaFacebook /></a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors"><FaInstagramSquare /></a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
