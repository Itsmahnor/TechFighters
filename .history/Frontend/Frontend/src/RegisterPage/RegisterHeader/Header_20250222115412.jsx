import React from 'react';

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper h-[50vh] flex justify-center items-center flex-col bg-[#C19EE0]">
      <h1 className="text-black font-bold">Course Enrollment</h1>
      <p className="w-[70vw] text-black">
        At <span className="bg-[#A06CD5] text-black p-1">techFighters</span>, enrolling in a course is your first step toward building a brighter future. Our streamlined enrollment process ensures you can quickly join the course of your choice and begin your learning journey. Explore our offerings and find the perfect course to match your ambitions and goals.
      </p>
    </div>
  );
};
