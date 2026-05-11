// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../Assets/shrutiLogo.png";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const links = [
//     ["Home", "home"],
//     ["Skills", "skills"],
//     ["Projects", "projects"],
//     ["Experience", "experience"],
//     ["About", "about"],
//     ["Education", "education"],
//     ["Contact", "contact"],
//   ];


//   return (
//     <nav className="sticky top-0 w-full z-50 bg-transparent/10 backdrop-blur-xl backdrop-saturate-150 shadow-sm">
//       <div className="flex items-center justify-between px-5 md:px-10 py-3">

//         {/* Logo */}
//           <img
//             src={logo}
//             alt="logo"
//             className="w-20 md:w-24 lg:w-28 border border-white/20 rounded hover:scale-105 transition"
//           />

//         {/* Desktop Menu */}
//         {/* <ul className="hidden lg:flex gap-8 text-slate-100 font-medium">
//           {navLinks.map(([name, link]) => {
//             const isActive = location.pathname === link;
//             return (
//               <Link key={name} to={link}>
//                 <li
//                   className={`cursor-pointer transition-all hover:-translate-y-1
//                   ${
//                     isActive
//                       ? "text-pink-400 border-b-2 border-pink-400"
//                       : "hover:text-purple-400"
//                   }`}
//                 >
//                   {name}
//                 </li>
//               </Link>
//             );
//           })}
//         </ul> */}

//         <ul className="hidden md:flex gap-6">
//           {links.map(([name, id]) => (
//             <a key={id} href={`#${id}`} className="hover:text-purple-400">
//               {name}
//             </a>
//           ))}
//         </ul>

//         {/* Desktop Social Icons */}
//         <div className="hidden lg:flex gap-4 text-2xl">
//           <a
//             href="https://github.com/shrutibachale"
//             target="_blank"
//             rel="noreferrer"
//             className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 hover:border-purple-500 hover:text-purple-400 transition"
//           >
//             <FontAwesomeIcon icon={faGithub} />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/shruti-bachale"
//             target="_blank"
//             rel="noreferrer"
//             className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 hover:border-blue-500 hover:text-blue-400 transition"
//           >
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-3xl text-white"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`lg:hidden fixed top-16 left-0 w-full bg-slate-900/90 backdrop-blur-xl
//         transition-all duration-300 ease-in-out
//         ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
//         `}
//       >
//         <div className="flex flex-col items-center space-y-4 py-6 text-slate-100 ">
//           <ul className="hidden md:flex gap-6">
//           {links.map(([name, id]) => (
//             <a key={id} href={`#${id}`} className="hover:text-purple-400">
//               {name}
//             </a>
//           ))}
//         </ul>

//           {/* Mobile Social Icons */}
//           <div className="flex gap-6 text-3xl pt-4">
//             <a
//               href="https://github.com/shrutibachale"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 transition"
//             >
//               <FontAwesomeIcon icon={faGithub} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/shruti-bachale"
//               target="_blank"
//               rel="noreferrer"
//               className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-black/60 transition"
//             >
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../Assets/shrutiLogo.png";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   const links = [
//     ["Home", "home"],
//     ["Skills", "skills"],
//     ["Projects", "projects"],
//     ["Experience", "experience"],
//     ["About", "about"],
//     ["Education", "education"],
//     ["Contact", "contact"],
//   ];

  

// useEffect(() => {
//   const handleScroll = () => {
//     const sections = [
//       "home",
//       "skills",
//       "projects",
//       "experience",
//       "about",
//       "education",
//       "contact",
//     ];

//     let current = "home";

//     sections.forEach((id) => {
//       const section = document.getElementById(id);
//       if (section) {
//         const top = section.offsetTop - 100;
//         if (window.scrollY >= top) {
//           current = id;
//         }
//       }
//     });

//     setActive(current);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   return (
//     <nav className="sticky top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
//       <div className="flex items-center justify-between px-6 md:px-10 py-3">

//         {/* Logo */}
//         <a href="#home">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-20 md:w-24 hover:scale-105 transition"
//           />
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 text-slate-200 font-medium">
//           {links.map(([name, id]) => (
//             <a
//               key={id}
//               href={`#${id}`}
//               className={`relative group transition ${
//                 active === id ? "text-purple-400" : ""
//               }`}
//             >
//               {name}

//               {/* underline animation */}
//               <span
//                 className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all duration-300
//                 ${active === id ? "w-full" : "w-0 group-hover:w-full"}`}
//               ></span>
//             </a>
//           ))}
//         </ul>     

//         {/* Social Icons */}
//         <div className="hidden lg:flex gap-4 text-xl">
//           <a
//             href="https://github.com/shrutibachale"
//             target="_blank"
//             rel="noreferrer"
//             className="p-2 rounded-full bg-white/10 hover:bg-purple-500/20 transition"
//           >
//             <FontAwesomeIcon icon={faGithub} />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/shruti-bachale"
//             target="_blank"
//             rel="noreferrer"
//             className="p-2 rounded-full bg-white/10 hover:bg-blue-500/20 transition"
//           >
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//         </div>

//         {/* Mobile Button */}
//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-slate-900/95 backdrop-blur-lg flex flex-col items-center gap-6 py-6">
//           {links.map(([name, id]) => (
//             <a
//               key={id}
//               href={`#${id}`}
//               onClick={() => setOpen(false)}
//               className="text-lg hover:text-purple-400"
//             >
//               {name}
//             </a>
//           ))}

//           {/* Social Icons */}
//           <div className="flex gap-6 text-2xl">
//             <a href="https://github.com/shrutibachale" target="_blank">
//               <FontAwesomeIcon icon={faGithub} />
//             </a>
//             <a href="https://www.linkedin.com/in/shruti-bachale" target="_blank">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





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
        <div>
          <h1 className="text-base md:text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Shruti Bachale
          </h1>

          <p className="text-[10px] text-slate-500 tracking-[2px] uppercase">
            Frontend Developer
          </p>
        </div>

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

