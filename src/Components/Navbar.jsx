import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  ["Home", "home"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["About", "about"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) => l[1]);

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (
          section &&
          window.scrollY >= section.offsetTop - 120 &&
          window.scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [open]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300  ${
        scrolled
          ? "bg-[#07060a]/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-12 py-3 md:py-4">

        {/* LOGO */}
        <a href="#home">
          <h1 className="text-base md:text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Shruti Bachale
          </h1>

          <p className="text-[10px] text-slate-500 tracking-[2px] uppercase">
            Frontend Developer
          </p>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">

          <ul className="flex gap-8 text-sm">

            {links.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative pb-1 transition-all duration-300 ${
                  active === id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {name}

                {active === id && (
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
                )}
              </a>
            ))}

          </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-4 text-lg">
          <a
            href="https://github.com/shrutibachale"
            target="_blank"
            rel="noreferrer"
            className=" text-gray-500 hover:bg-black/60  w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/shruti-bachale"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:bg-black/60  w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}

      {open && (
        <div className="md:hidden bg-[#07060a]/95 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col items-center justify-center gap-5 py-8">

            {links.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`text-base transition duration-300 ${
                  active === id
                    ? "text-purple-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {name}
              </a>
            ))}

            {/* Divider */}
            <div className="w-24 h-[1px] bg-white/10 my-2"></div>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-5">

              <a
                href="https://github.com/shrutibachale"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex justify-center items-center rounded-full text-lg bg-white/5 border border-purple-500 text-purple-400 transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-bachale"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 flex justify-center items-center rounded-full text-lg bg-white/5 border border-blue-500 text-blue-400 transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

