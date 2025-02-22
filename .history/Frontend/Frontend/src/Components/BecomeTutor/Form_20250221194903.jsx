import React, { useState } from "react";
import axios from "axios";

const InstructorFormSection = () => {
  const [activeSection, setActiveSection] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseExpertise: "",
    bio: "",
  });
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    courseExpertise: "",
    bio: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? "" : section);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Full Name Validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.fullName)) {
      newErrors.fullName = "Name should contain only letters (A-Z)";
      isValid = false;
    } else if (formData.fullName.length <= 2) {
      newErrors.fullName = "Name is too short";
      isValid = false;
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Phone Number Validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }

    // Course Expertise Validation
    if (!formData.courseExpertise) {
      newErrors.courseExpertise = "Course expertise is required";
      isValid = false;
    }

    // Bio Validation
    if (!formData.bio) {
      newErrors.bio = "Bio is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          `${window.location.origin}/api/instructors`,
          formData
        );
        setSubmitMessage("Form submitted successfully!");
        console.log("Response:", response.data);
      } catch (error) {
        setSubmitMessage("Error submitting the form. Please try again.");
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] text-black flex flex-wrap justify-center items-start py-10 px-6 gap-6">
      {/* Left Button & Info Section */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-lg space-y-4">
        <button
          className={`w-full py-4 px-6 bg-[#A06CD5] text-white font-bold text-lg hover:bg-[#9163CB] transition ${activeSection === "profile" ? "underline" : ""}`}
          onClick={() => toggleSection("profile")}
        >
          Create Your Profile
        </button>
        <button
          className="w-full py-4 px-6 bg-[#A06CD5] text-white font-bold text-lg hover:bg-[#9163CB] transition"
          onClick={() => toggleSection("course")}
        >
          Set Up Your Course
        </button>
        <button
          className="w-full py-4 px-6 bg-[#A06CD5] text-white font-bold text-lg hover:bg-[#9163CB] transition"
          onClick={() => toggleSection("teach")}
        >
          Teach and Earn
        </button>
        <button
          className="w-full py-4 px-6 bg-[#A06CD5] text-white font-bold text-lg hover:bg-[#9163CB] transition"
          onClick={() => toggleSection("grow")}
        >
          Get Paid and Grow
        </button>

        {/* Display Additional Info */}
        <div className="mt-6">
          {activeSection === "profile" && (
            <div className="bg-[#F5F5F5] text-[#4A4A4A] p-4 rounded-md border-l-4 border-[#A06CD5]">
              <h2 className="text-xl font-bold mb-2">Create Your Profile</h2>
              <p>Provide your personal details, expertise, and a brief bio to create a professional instructor profile.</p>
            </div>
          )}
          {activeSection === "course" && (
            <div className="bg-[#F5F5F5] text-[#4A4A4A] p-4 rounded-md border-l-4 border-[#A06CD5]">
              <h2 className="text-xl font-bold mb-2">Set Up Your Course</h2>
              <p>Add engaging content, quizzes, and resources to set up your course.</p>
            </div>
          )}
          {activeSection === "teach" && (
            <div className="bg-[#F5F5F5] text-[#4A4A4A] p-4 rounded-md border-l-4 border-[#A06CD5]">
              <h2 className="text-xl font-bold mb-2">Teach and Earn</h2>
              <p>Teach students across the globe and get rewarded for sharing your expertise.</p>
            </div>
          )}
          {activeSection === "grow" && (
            <div className="bg-[#F5F5F5] text-[#4A4A4A] p-4 rounded-md border-l-4 border-[#A06CD5]">
              <h2 className="text-xl font-bold mb-2">Get Paid and Grow</h2>
              <p>Receive payments on time and grow your reputation with SkillsEducation.</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-4">Create Your Instructor Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold text-black">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full p-2 bg-white text-black placeholder-[#b8b8b8] rounded border border-gray-300"
            />
            {formErrors.fullName && <p className="text-red-500 text-sm">{formErrors.fullName}</p>}
          </div>
          <div>
            <label className="block font-bold text-black">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-2 bg-white text-black placeholder-[#b8b8b8] rounded border border-gray-300"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
          </div>
          <div>
            <label className="block font-bold text-black">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Your Phone Number"
              className="w-full p-2 bg-white text-black placeholder-[#b8b8b8] rounded border border-gray-300"
            />
            {formErrors.phoneNumber && <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block font-bold text-black">Course Expertise</label>
            <input
              type="text"
              name="courseExpertise"
              value={formData.courseExpertise}
              onChange={handleInputChange}
              placeholder="Your Course Expertise"
              className="w-full p-2 bg-white text-black placeholder-[#b8b8b8] rounded border border-gray-300"
            />
            {formErrors.courseExpertise && <p className="text-red-500 text-sm">{formErrors.courseExpertise}</p>}
          </div>
          <div>
            <label className="block font-bold text-black">Brief Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Write a brief bio about yourself"
              className="w-full p-2 bg-white text-black placeholder-[#b8b8b8] rounded border border-gray-300"
            />
            {formErrors.bio && <p className="text-red-500 text-sm">{formErrors.bio}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#A06CD5] text-white font-bold py-2 px-4 rounded hover:bg-[#9163CB] transition"
          >
            Enroll Now
          </button>
        </form>
        {submitMessage && <p className="mt-4 text-black">{submitMessage}</p>}
      </div>
    </div>
  );
};

export default InstructorFormSection;
