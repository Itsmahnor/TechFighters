import React from 'react';

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col bg-[#C19EE0]">
      <h1 className="text-black font-bold">Our Tutors</h1>
      <p className="w-[70vw] text-black">
        At{" "}
        <span className="bg-[#A06CD5] text-black p-1">
         TechFighters
        </span>{" "}
        we are proud to have a team of expert tutors who are passionate about helping students achieve their goals. Our tutors bring years of experience, industry knowledge, and a commitment to delivering high-quality education. Whether you're learning online or in person, you can trust that our tutors will provide personalized support and guidance throughout your learning journey.
      </p>
    </div>
  );
};
