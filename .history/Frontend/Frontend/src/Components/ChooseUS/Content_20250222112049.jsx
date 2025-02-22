import React from "react";

const WhyChoose = () => {
  return (
    <section className="bg-gradient-to-b from-[#1E1E2F] to-[#2D2D3F] text-[#ffffff] py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image and Key Features */}
        <div className="relative bg-[#2D2D3F] rounded-xl shadow-xl p-6 border border-[#A06CD5] hover:shadow-2xl transition-all duration-300">
          <img
            src="https://cdn.vectorstock.com/i/500p/55/61/why-choose-us-speech-bubble-vector-24175561.jpg"
            alt="Why Choose Us"
            className="rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-3xl font-bold text-[#A06CD5] mt-6">Key Features</h3>
          <ul className="mt-4 space-y-3 text-[#ffffff] font-medium">
            <li className="flex items-center gap-2">
              ✅ <span>Scholarships Available</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Flexible Time Slots</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Career Counseling & Mentorship</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Modern Teaching Methods</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>24/7 Digital Access</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Lifetime Learning Support</span>
            </li>
          </ul>
        </div>

        {/* Right Side - Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#A06CD5] leading-tight">
            Elevate Your Career with TechFighters 🚀
          </h2>
          <h3 className="text-2xl font-semibold text-[#ffffff] mt-4">
            Learn Web & App Development with Experts
          </h3>
          <p className="mt-6 leading-relaxed text-[#b8b8b8]">
            TechFighters offers top-tier online courses in web and app
            development. Our cutting-edge programs are designed to help you
            master the latest skills, gain industry experience, and stay ahead in
            the competitive tech world.
          </p>
          <ul className="mt-6 space-y-2 text-[#A06CD5] font-medium">
            <li>🚀 Specialized certifications for developers</li>
            <li>🕒 Flexible online programs for busy learners</li>
            <li>⚡ Accelerated courses for rapid career growth</li>
            <li>🎓 Dual degree and industry-recognized certifications</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
