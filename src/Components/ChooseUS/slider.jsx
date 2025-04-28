import React, { useState } from "react";
import { ICONS } from "./Icons";

const Opportunities = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (index) => {
    setOpenPanel(openPanel === index ? null : index);
  };

  const panelData = [
    {
      title: "Jobs Opportunities",
      content: `
Unlock access to exclusive job opportunities tailored to your skills and interests. 
Our platform connects you with top employers in various industries, including tech, healthcare, education, and more.
Whether you’re a fresher or an experienced professional, explore openings that match your career aspirations. 
Benefit from resume building tips, interview preparation guides, and networking events to land your dream job.
      `,
    },
    {
      title: "Internship Opportunities",
      content: `
Gain practical experience with internships designed to enhance your learning and skillset. 
Our curated internship programs cover fields like software development, graphic design, data analytics, marketing, and more. 
Get mentorship from industry experts and real-world projects to prepare you for future challenges. 
Apply now to kickstart your professional journey with internships that offer invaluable hands-on training.
      `,
    },
    {
      title: "Career Opportunities",
      content: `
Explore personalized career paths that align with your long-term goals. 
Our career counseling sessions guide you through industry trends, required skillsets, and potential job roles. 
We also offer career development workshops focusing on communication skills, leadership training, and professional branding. 
Discover opportunities to grow your career through strategic planning and actionable insights.
      `,
    },
    {
      title: "Certification Opportunities",
      content: `
Enhance your credentials with globally recognized certifications in various domains. 
Our courses provide certifications in fields such as IT, project management, data science, and digital marketing. 
Each certification is tailored to industry standards and helps validate your skills to employers worldwide. 
Join our training programs to prepare for certification exams and take your expertise to the next level.
      `,
    },
    {
      title: "Free Freelancing Course Opportunities",
      content: `
Learn how to succeed in the freelancing world with our free courses designed for beginners and professionals. 
From building your online profile to securing clients, our courses cover everything you need to know. 
Topics include effective communication, pricing strategies, time management, and building a consistent client base. 
Start your freelancing journey today with expert-led modules and real-life success stories.
      `,
    },
    {
      title: "Free Courses & Workshops",
      content: `
Expand your knowledge with our free courses and workshops conducted by industry leaders. 
Subjects range from web development, cloud computing, and AI to public speaking and personal finance management. 
These workshops are interactive, hands-on, and designed to cater to learners of all levels. 
Take advantage of this opportunity to upskill and stay ahead in your professional journey.
      `,
    },
  ];

  return (
    <section className="bg-[#C19EE0] text-black py-16 px-6">
      <div className="container mx-auto">
        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
          {[
            { value: "4+", label: "Centres", desc: "With over 4 local training centres worldwide." },
            { value: "20+", label: "Courses", desc: "Our unique training, based on practical activity." },
            { value: "7+", label: "Years", desc: "Our heritage and longevity as a leading institute." },
            { value: "30K+", label: "Students", desc: "Our heritage and longevity with over 30,000 students." },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white border border-[#A06CD5] rounded-lg shadow p-4">
              <div className="text-4xl font-bold text-[#A06CD5]">{stat.value}</div>
              <p className="mt-2 text-lg">{stat.label}</p>
              <p className="text-sm text-black">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Opportunities Accordion */}
        <div className="space-y-4">
          {panelData.map((panel, index) => (
            <div key={index} className="rounded-lg shadow overflow-hidden">
              <button
                onClick={() => togglePanel(index)}
                className="flex items-center justify-between w-full px-6 py-4 bg-[#A06CD5] hover:bg-[#8c59b8] transition-colors duration-300 font-semibold text-black"
              >
                <span>{panel.title}</span>
                <span className="text-2xl transform transition-transform duration-300">
                  {openPanel === index ? "−" : "+"}
                </span>
              </button>
              {openPanel === index && (
                <div className="px-6 py-4 bg-white text-black transition-all duration-300">
                  <p className="text-sm whitespace-pre-line">{panel.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
