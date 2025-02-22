import React from 'react';

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col bg-[#1e1e2f]">
      <h1 className="text-[#e0e0e0] font-bold">Offering Job Opportunities to Our Students</h1>
      <p className="w-[70vw] text-[#b0b0b0]">
        At 
        <span className="bg-[#ff6f61] text-[#e0e0e0] p-1 mx-1">Code Pioneers</span>, we are committed to helping our students build successful careers. We offer a variety of job opportunities across different industries, connecting our graduates with top employers. Whether you're looking for an internship, part-time, or full-time position, we are here to assist you in finding a job that matches your skills and aspirations.
      </p>
    </div>
  );
};
