import React from 'react';

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col bg-[#04211e]">
      <h1 className="text-[#ffffff] font-bold text-2xl">Tech Fighters – Elevating Your Tech Career</h1>
      <p className="w-[70vw] text-[#b8b8b8] text-center mt-2">
        At 
        <span className="bg-[#098E68] text-white p-1 mx-1 rounded">Tech Fighters</span>,  
        we provide top-tier training and connect skilled developers with **leading tech companies**.  
        Whether you're seeking an **internship**, **freelance**, or **full-time role**,  
        we're here to help you grow in the tech industry.
      </p>
    </div>
  );
};
