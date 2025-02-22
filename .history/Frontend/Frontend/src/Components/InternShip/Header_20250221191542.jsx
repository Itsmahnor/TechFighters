import React from 'react'

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col bg-gradient-to-r from-[#B185DB] to-[#A06CD5] p-8">
      <h1 className="text-black font-bold text-4xl">Internship Offer</h1>
      <p className="w-full max-w-[70vw] text-[1.2rem] text-black text-center mt-4">
        Enhance your learning experience with an exciting
        <span className="bg-[#9163CB] text-white p-1 mx-2 rounded">Internship Offer</span>
        at leading companies. This internship will provide you hands-on experience with real-world projects, improving your skills and building your professional network.
        Join our internship program to apply your learning, gain practical exposure, and kickstart your career in web development.
      </p>
    </div>
  );
};

 