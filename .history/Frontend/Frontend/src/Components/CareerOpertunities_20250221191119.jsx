import React from "react";

const CareerOpportunities = () => {
  // Career opportunities data
  const opportunities = [
    { title: "Full Stack Developer", salary: "PKR:60,000/Month", icon: "🖥️" },
    { title: "Frontend Developer", salary: "PKR:100,000/Month", icon: "💻" },
    { title: "Backend Developer", salary: "PKR:120,000/Month", icon: "🔧" },
    { title: "Database Developer", salary: "PKR:150,000/Month", icon: "📊" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#A06CD5] to-[#9163CB]  text-black py-16 px-4 w-full flex justify-center">
      <section className="md:w-[50vw]">
        <h2 className="text-2xl font-bold text-center mb-8">
          Career Opportunities & Earning Potential After Completing the Course
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-gradient-to-r  from-[#C19EE0] to-[#DAC3E8] text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 md:w-[20vw]"
            >
              <div className="text-4xl mb-4">{opportunity.icon}</div>
              <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
              <p className="text-lg font-semibold">{opportunity.salary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerOpportunities;
