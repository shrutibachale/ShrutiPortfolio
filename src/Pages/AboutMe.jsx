
import React from "react";
import image1 from "../Assets/Images/aboutImage.jpeg";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="mt-10 sm:px-2 lg:px-12 mb-12"
    >
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold">About Me</h3>
        <div className="w-16 sm:w-24 h-1 bg-purple-600 mx-auto mt-2 rounded-full" />
      </div>

      {/* Content */}
      <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto">

        {/* Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="p-3 rounded-2xl border border-purple-700 bg-purple-900/40 shadow-lg hover:shadow-purple-500 hover:animate-pulse transition">
            <img
              src={image1}
              alt="Shruti Bachale"
              className="w-52 sm:w-64 lg:w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6 text-center lg:text-left">
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I am a frontend developer with hands-on experience building
            responsive web applications. My focus is on writing clean,
            maintainable code and creating user interfaces that are both
            beautiful and accessible. I enjoy learning new tools and improving
            user experience through thoughtful UI design.
          </p>

          {/* Skills */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {[
              "React.js, Tailwind CSS",
              "Responsive Design & Accessibility",
              "API Integration & Async Data",
              "Debugging & Cross-browser Testing",
            ].map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-slate-400
                  bg-slate-900/40 px-3 sm:px-4 py-2 rounded-lg
                  border border-slate-800"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
