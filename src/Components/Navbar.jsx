
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../Assets/shrutiLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinks = [
    ["Home", "/"],
    ["Skills", "/skills"],
    ["About Me", "/aboutme"],
    ["Experience", "/experience"],
    ["Projects", "/projects"],
    ["Education", "/education"],
    ["Contact Me", "/contactme"],
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent/10 backdrop-blur-xl backdrop-saturate-150 shadow-sm">
      <div className="flex items-center justify-between px-5 md:px-10 py-3">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-20 md:w-24 lg:w-28 border border-white/20 rounded hover:scale-105 transition"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-slate-100 font-medium">
          {navLinks.map(([name, link]) => {
            const isActive = location.pathname === link;
            return (
              <Link key={name} to={link}>
                <li
                  className={`cursor-pointer transition-all hover:-translate-y-1
                  ${
                    isActive
                      ? "text-pink-400 border-b-2 border-pink-400"
                      : "hover:text-purple-400"
                  }`}
                >
                  {name}
                </li>
              </Link>
            );
          })}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex gap-4 text-2xl">
          <a
            href="https://github.com/shrutibachale"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 hover:border-purple-500 hover:text-purple-400 transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/shruti-bachale"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 hover:border-blue-500 hover:text-blue-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full bg-slate-900/90 backdrop-blur-xl
        transition-all duration-300 ease-in-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center space-y-4 py-6 text-slate-100 ">
          {navLinks.map(([name, link]) => {
            const isActive = location.pathname === link;
            return (
              <Link key={name} to={link}>
                <p
                  className={`text-lg py-2 transition
                  ${
                    isActive
                      ? "text-pink-400 font-semibold"
                      : "hover:text-pink-400"
                  }`}
                >
                  {name}
                </p>
              </Link>
            );
          })}

          {/* Mobile Social Icons */}
          <div className="flex gap-6 text-3xl pt-4">
            <a
              href="https://github.com/shrutibachale"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/shruti-bachale"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
