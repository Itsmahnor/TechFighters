import React from 'react'

export const Header = () => {
  return (
    <div className="breadcrumb-wrapper h-[50vh] flex justify-center items-center flex-col bg-[#C19EE0]">
      <h1 className="text-black font-bold">Explore Our Courses</h1>
      <p className="w-[70vw] text-black">
        At <span className="bg-[#A06CD5] text-black p-1">techFighters</span>, we empower you with a wide range of courses tailored for the tech industry. Whether you're launching a career in web development, mobile app development, digital marketing, or data analytics, our expert-led courses are designed to equip you with real-world skills and innovative strategies for tomorrow’s challenges!
      </p>
    </div>
  )
}
