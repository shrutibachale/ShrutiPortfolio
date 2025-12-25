
import React from "react";
import Image from "../Assets/Image.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <section className="mt-10 md:px-8">
      <div className="rounded-2xl p-6 md:p-10 shadow-2xl">

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">

          {/* Text Section */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hello, I’m <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Shruti Bachale
              </span>
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8245ec] mt-4">
              <span>And I'm a </span>
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "Fullstack Developer",
                  "Coder",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h3>

            <p className="text-slate-300 mt-4 text-sm sm:text-base">
              I build modern, responsive web interfaces using React and Tailwind CSS.
              I love turning designs into functional, accessible and delightful user
              experiences.
            </p>

            {/* Download Button */}
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href="/Shruti_Bachale.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition font-medium animate-pulse flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </a>
            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400">
              {[
                "React Js",
                "Tailwind CSS",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-slate-800/50 rounded-md"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl shadow-2xl shadow-purple-500/30 p-3 border border-purple-700 bg-purple-900/40 hover:shadow-purple-500 hover:animate-pulse flex items-center justify-center">
            <img
              src={Image}
              alt="Shruti Bachale"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-gradient-to-br from-pink-600/10 to-transparent rounded-md border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition shadow-md hover:shadow-purple-500">
            <h3 className="text-2xl font-semibold">10+</h3>
            <p className="text-xs text-slate-400 mt-1">Projects Live</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-600/10 to-transparent rounded-md border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition shadow-md hover:shadow-purple-500">
            <h3 className="text-2xl font-semibold">React.Js</h3>
            <p className="text-xs text-slate-400 mt-1">Primary Framework</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-600/10 to-transparent rounded-md border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition shadow-md hover:shadow-purple-500">
            <h3 className="text-2xl font-semibold">Netlify</h3>
            <p className="text-xs text-slate-400 mt-1">Deployment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
