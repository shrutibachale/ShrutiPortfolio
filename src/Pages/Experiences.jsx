
import React from "react";
import image1 from "../Assets/image1.jpg";

const Experiences = () => {
  return (
    <section
      id="experience"
      className="mt-10 sm:px-2 lg:px-12 mb-12"
    >
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold">Experience</h3>
        <div className="w-16 sm:w-24 h-1 bg-purple-600 mx-auto mt-2 rounded-full" />
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

        {/* Experience Card 1 */}
        <div
          className="group rounded-2xl border-2 border-slate-800 
          bg-gradient-to-b from-slate-900/40 to-transparent
          p-5 sm:p-6 hover:border-purple-500/40
          hover:shadow-lg hover:shadow-purple-500
          transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-700 mb-4">
              <img
                src={image1}
                alt="office"
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <h1 className="text-base sm:text-lg font-semibold text-purple-400">
              Frontend Developer
            </h1>
            <h2 className="mt-1 text-sm sm:text-base font-medium text-slate-200">
              Blue Vision Softech Pvt. Ltd.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Oct 2025 – Present
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Developing responsive, user-friendly interfaces with React,
              delivering clean and efficient frontend solutions.
            </p>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div
          className="group rounded-2xl border-2 border-slate-800 
          bg-gradient-to-b from-slate-900/40 to-transparent
          p-5 sm:p-6 hover:border-purple-500/40
          hover:shadow-lg hover:shadow-purple-500
          transition-all duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-700 mb-4">
              <img
                src="https://nutankanyaschool.weebly.com/uploads/1/6/1/3/16130586/published/home_3.jpg?1482938200"
                alt="school"
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>

            <h1 className="text-base sm:text-lg font-semibold text-purple-400">
              High School Teacher
            </h1>
            <h2 className="mt-1 text-sm sm:text-base font-medium text-slate-200">
              Nutan Kanya School, Bhandara
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              June 2022 – May 2024
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Developed strong communication, organization, problem-solving
              skills, and managed classroom activities effectively.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experiences;
