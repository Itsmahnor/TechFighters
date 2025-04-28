import React from 'react';

const BecomeInstructorSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] text-black px-8 py-10 w-[100vw] flex justify-center items-center">
      <div className="w-[70vw]  px-8 py-10 ">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">Become an Instructor</h2>
          <h3 className="text-3xl font-bold mb-6 text-black">Start Teaching with SkillsEducation</h3>
          <p className="text-lg text-[#4A4A4A]">
            Join SkillsEducation to make a positive impact on students' lives. As an instructor, you'll have the
            chance to teach a variety of subjects and engage with a global audience through our platform. We offer
            a flexible teaching environment and competitive compensation for your expertise.
          </p>
        </div>

        {/* Requirements Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">Requirements to Become an Instructor:</h2>
          <ul className="list-none space-y-3 text-lg text-[#4A4A4A]">
            <li>
              <span className="text-black mr-2">✔</span>
              A degree or certification in your area of expertise
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Proven teaching experience or a passion for teaching
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Strong communication skills and the ability to engage students
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Access to a reliable internet connection for online classes
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Ability to create high-quality course materials
            </li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">Benefits of Becoming an Instructor:</h2>
          <ul className="list-none space-y-3 text-lg text-[#4A4A4A]">
            <li>
              <span className="text-black mr-2">✔</span>
              Earn a competitive salary based on the courses you teach
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Flexible working hours and remote teaching opportunities
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Be part of a global educational community
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Access to tools and resources to enhance your teaching experience
            </li>
            <li>
              <span className="text-black mr-2">✔</span>
              Get recognition for your expertise and grow your professional profile
            </li>
          </ul>
        </div>

        {/* Salary Section */}
        <div>
          <h2 className="text-2xl font-bold uppercase mb-4 text-black">Instructor Salary:</h2>
          <p className="text-lg text-[#4A4A4A]">
            Instructors are compensated based on the number of courses they offer and the number of students
            enrolled. We offer competitive rates that reward your hard work and dedication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructorSection;
