import React, { useState } from "react";
import axios from "axios";
import { ICONS } from "../Icons/Icons";

const JobOpportunities = () => {
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "New York, USA",
      description:
        "Develop responsive and user-friendly web interfaces with React, Tailwind CSS, and modern web technologies.",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeWave",
      location: "San Francisco, USA",
      description:
        "Design and maintain scalable backend services with a focus on performance and security.",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Innovatech",
      location: "Remote",
      description:
        "Work across the full stack to build seamless web applications using React and Node.js.",
      skills: ["React", "Node.js", "JavaScript", "CSS", "MongoDB"],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Creative Labs",
      location: "London, UK",
      description:
        "Design user-friendly interfaces and experiences for web and mobile applications with a focus on user-centered design.",
      skills: ["Figma", "Sketch", "Adobe XD", "CSS"],
    },
    {
      id: 5,
      title: "Product Manager",
      company: "TechCorp",
      location: "Berlin, Germany",
      description:
        "Oversee product development lifecycle and collaborate with cross-functional teams to launch new features and products.",
      skills: ["Agile", "Scrum", "Project Management", "JIRA"],
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "DataSolutions",
      location: "Toronto, Canada",
      description:
        "Analyze large datasets to extract valuable insights and help improve business decisions using Python and machine learning.",
      skills: ["Python", "Machine Learning", "Pandas", "SQL"],
    },
    {
      id: 7,
      title: "Mobile Developer",
      company: "AppCraft",
      location: "Austin, USA",
      description:
        "Develop cross-platform mobile applications for iOS and Android using React Native and Expo.",
      skills: ["React Native", "JavaScript", "Expo", "Mobile Development"],
    },
    {
      id: 8,
      title: "DevOps Engineer",
      company: "CloudWorks",
      location: "Sydney, Australia",
      description:
        "Automate infrastructure and streamline deployment processes using tools like Docker, Kubernetes, and AWS.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      id: 9,
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      location: "Paris, France",
      description:
        "Build and train machine learning models to solve real-world problems and enhance user experiences.",
      skills: ["Python", "TensorFlow", "Scikit-learn", "AI"],
    },
    {
      id: 10,
      title: "QA Engineer",
      company: "TestLabs",
      location: "Seattle, USA",
      description:
        "Ensure software quality by designing and executing automated tests for various platforms and technologies.",
      skills: ["Selenium", "JUnit", "Automation", "Testing"],
    },
    // Add more jobs as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [openForm, setOpenForm] = useState(null);
  const [formData, setFormData] = useState({
    applicantName: "",
    email: "",
    resume: null,
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      alert("Please enter a valid email ending with @gmail.com");
      return;
    }

    const form = new FormData();
    form.append("jobTitle", openForm.title);
    form.append("applicantName", formData.applicantName);
    form.append("email", formData.email);
    if (formData.resume) {
      form.append("resume", formData.resume);
    }

    try {
      const response = await axios.post(
        `${window.location.origin}/api/apply`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Application submitted successfully!");
      setOpenForm(null);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit the application. Please try again.");
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.location.toLowerCase().includes(searchTerm)
  );

  return (
    <>
    <section className="bg-[#C19EE0] min-h-screen py-10  ">
      {/* Header */}
      <div className="text-center mb-12 ">
        <h1 className="text-5xl font-bold text-black">Find Your Dream Job</h1>
        <p className="text-lg mt-2 text-black">
          Explore exciting opportunities and grow your career.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search jobs by title, company, or location..."
          className="w-3/4 md:w-1/2 px-4 py-3 bg-white border border-[#A06CD5] text-black rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#A06CD5]"
          onChange={handleSearch}
        />
        <button className="bg-[#A06CD5] px-8 py-3 rounded-r-full text-black font-bold hover:bg-[#8757b8] transition-all">
          Search
        </button>
      </div>

      {/* Job Section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white text-black border border-[#A06CD5] rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform"
              >
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <p className="font-medium">{job.company}</p>
                <p className="text-sm">{job.location}</p>
                <p className="mt-4">{job.description}</p>
                <button
                  className="mt-6 bg-[#A06CD5] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#8757b8] transition-all"
                  onClick={() => setOpenForm(job)}
                >
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-black col-span-full">
              No jobs found. Try a different search term!
            </p>
          )}
        </div>
      </div>

      {/* Application Form Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 border border-[#A06CD5] relative">
            <h2 className="text-2xl font-bold mb-4">
              Apply for {openForm.title}
            </h2>
            <button
              className="absolute top-4 right-4 text-[#A06CD5] font-bold text-xl"
              onClick={() => setOpenForm(null)}
            >
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white text-black border border-[#A06CD5] rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white text-black border border-[#A06CD5] rounded focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-2">
                  Resume (optional)
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 bg-white text-black border border-[#A06CD5] rounded focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#A06CD5] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#8757b8] transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

    
    </section>
      <ICONS />
     </>
  );
};

export default JobOpportunities;
