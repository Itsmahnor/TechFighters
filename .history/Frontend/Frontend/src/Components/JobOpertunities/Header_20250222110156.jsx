import React from 'react';

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col bg-[#04211e]">
      <h1 className="text-[#098E68] font-bold text-2xl">Empowering Developers with Real-World Opportunities</h1>
      <p className="w-[70vw] text-white text-center mt-2">
        At 
        <span className="bg-[#098E68] text-white p-1 mx-1 rounded">Tech Fighters</span>, 
        we bridge the gap between **learning and industry** by offering hands-on experience.  
        Whether you're looking for an **internship**, **part-time**, or **full-time role**,  
        we connect talented developers with **top tech companies**.
      </p>
    </div>
  );
};
