import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#07060A] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Shruti Bachale
            </h2>

            <p className="text-sm text-slate-400 mt-2 max-w-md leading-relaxed">
              Frontend Developer focused on building scalable,
              responsive, and modern web applications with
              seamless user experiences.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/shrutibachale"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10
              text-slate-300 hover:text-purple-400 hover:border-purple-500
              transition duration-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/shruti-bachale"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10
              text-slate-300 hover:text-blue-400 hover:border-blue-500
              transition duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            {/* SCROLL TOP */}
            <a
              href="#home"
              className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500
              text-white hover:scale-105 transition duration-300"
            >
              <FaArrowUp size={16} />
            </a>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-slate-500 text-center md:text-left">
            © 2026 Shruti Bachale. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-slate-400">

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="hover:text-white transition"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;