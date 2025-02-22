import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TopNav } from "../Navbar/TopNav";
import { BottomNav } from "../Navbar/BottomNav";
import Footer from "../Footer/Footer";
import CareerOpportunities from "../CareerOpertunities";
import { Link } from "react-router-dom";

export const MainContent = ({ courses }) => {
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openOutlineItems, setOpenOutlineItems] = useState({});

  useEffect(() => {
    const course = courses.find((course) => course.courseId === courseId);
    setSelectedCourse(course);
  }, [courseId, courses]);

  const toggleOutlineItem = (index) => {
    setOpenOutlineItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <TopNav />
      <BottomNav />
      <div className="w-full bg-gradient-to-r from-[#C19EE0] to-[#DAC3E8] text-black">
        {selectedCourse ? (
          <>
            <div className="breadcrumb-wrapper md:h-[50vh] flex justify-center items-center flex-col text-center p-4">
              <h1 className="text-black font-bold text-4xl">
                {selectedCourse.header.title}
              </h1>
              <p
                className="w-full max-w-[70vw] text-lg text-black mt-4"
                dangerouslySetInnerHTML={{
                  __html: selectedCourse.header.description,
                }}
              ></p>
            </div>

            <div className="w-full flex justify-center items-center pt-16 text-black flex-col px-4">
              <div className="max-w-[95vw] w-full flex flex-col lg:flex-row gap-7 justify-between">
                <div className="lg:w-[60%] w-full">
                  <h1 className="text-4xl font-extrabold text-black">
                    {selectedCourse.firstHeading}
                  </h1>
                  <p className="text-lg text-black mt-4">
                    {selectedCourse.firstHeadingDescription}
                  </p>

                  <div className="pt-7">
                    <h2 className="text-2xl font-semibold">Overview</h2>
                    <p className="text-lg mt-4">{selectedCourse.overview}</p>

                    <div className="pt-7">
                      <h2 className="text-xl font-semibold">What You Will Learn</h2>
                      <ul className="list-disc pl-5 space-y-2 text-black">
                        {selectedCourse.whatYouWillLearn.map((learningPoint, index) => (
                          <li key={index}>{learningPoint}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Course Outline</h2>
                    {selectedCourse.outline.map((item, index) => (
                      <div key={index} className="m-4">
                        <div
                          className="font-semibold text-lg transition-all duration-500 overflow-hidden outline py-2 px-2 rounded bg-gradient-to-r from-[#A06CD5] to-[#9163CB] flex justify-between items-center cursor-pointer text-white"
                          onClick={() => toggleOutlineItem(index)}
                        >
                          <p>{item.month}: {item.title}</p>
                          <span
                            className={`transition-transform duration-300 ${
                              openOutlineItems[index] ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            ▲
                          </span>
                        </div>

                        <div
                          className={`pl-6 pt-3 space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${
                            openOutlineItems[index] ? "max-h-[500px]" : "max-h-0"
                          } text-black`}
                        >
                          <div>
                            <h3 className="font-bold text-lg text-black">
                              {item.subTitle1}
                            </h3>
                            <p className="text-sm">
                              {item.subTitle1Content}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-black">
                              {item.subTitle2}
                            </h3>
                            <p className="text-sm">
                              {item.subTitle2Content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-[35%] w-full bg-white rounded-lg flex flex-col justify-center items-center text-black font-bold md:text-[1.1rem] p-5 shadow-lg">
                  <div className="w-full space-y-4">
                    <h3 className="text-xl text-black font-semibold">Course Details</h3>
                    <div className="space-y-4 mt-6">
                      <div className="flex justify-between">
                        <p className="font-bold">Duration:</p>
                        <p>{selectedCourse.details?.duration}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Weekend Classes:</p>
                        <p>{selectedCourse.details?.classHours}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Students:</p>
                        <p>{selectedCourse.details?.students}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="font-bold">Course Type:</p>
                        <p>{selectedCourse.details?.courseType}</p>
                      </div>
                      <Link to="/register">
                        <div className="bg-gradient-to-r from-[#A06CD5] to-[#9163CB] rounded-lg text-white p-3 text-center cursor-pointer">
                          Course Enrollment
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-black mt-16">Course not found.</div>
        )}
      </div>
      <CareerOpportunities />
      <Footer />
    </>
  );
};
