import React from "react";
import Image from "../Assets/Image.jpg";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#07060A] text-white pt-10 md:pt-10 px-6 md:px-16 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[320px] h-[320px] bg-purple-600/10 blur-3xl rounded-full top-[-120px] left-[-120px]" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* SMALL TAG */}
          <p className="text-sm tracking-[3px] uppercase text-purple-400 mt-10 mb-5">
            Frontend Developer
          </p>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
            Building modern,
            scalable and{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              user-focused
            </span>{" "}
            web applications.
          </h1>

          {/* NAME */}
          <p className="mt-5 text-xl text-slate-300">
            SHRUTI BACHALE • React.js Developer
          </p>

          {/* DESCRIPTION */}
          <p className="mt-6 text-slate-400 leading-relaxed max-w-xl text-sm sm:text-base">
            Frontend developer focused on building scalable,
            responsive and high-performance web applications
            with modern UI and seamless user experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300 text-sm font-medium shadow-lg shadow-purple-500/20"
            >
              View Projects
            </a>

            <a
              href="/ShrutiResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500 hover:bg-white/10 transition duration-300 text-sm font-medium backdrop-blur-xl"
            >
              Download Resume
            </a>

          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold">
                10+
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Live Projects
              </p>
            </div>

            <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold">
                7+
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Months Experience
              </p>
            </div>

            <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-semibold">
                React.js
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Primary Stack
              </p>
            </div>

          </div>

          {/* SOCIAL
          <div className="flex gap-5 mt-10 text-lg text-slate-400">

            <a
              href="https://github.com/shrutibachale"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 hover:-translate-y-1 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shruti-bachale"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 hover:-translate-y-1 transition"
            >
              <FaLinkedin />
            </a>

          </div> */}
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center lg:justify-end relative"
        >

          {/* IMAGE GLOW */}
          <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full"></div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

            <img
              src={Image}
              alt="Shruti Bachale"
              className="w-72 h-80 md:w-[360px] md:h-[460px] object-cover rounded-2xl grayscale-[10%] hover:grayscale-0 transition duration-500"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Intro;
