import React from 'react';

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8]">
      <h1 className="text-black font-bold">Become a Tutor</h1>
      <p className="w-[70vw] text-[#4A4A4A]">
        Are you an expert in your field and passionate about sharing knowledge? Join our platform and 
        <span className="bg-[#A06CD5] text-white p-1"> Become a Tutor. </span>
        This opportunity allows you to teach, mentor, and inspire students while gaining valuable teaching experience. By becoming a tutor, you'll have the chance to help others succeed while enhancing your own skills and building your reputation.
      </p>
    </div>
  );
};
