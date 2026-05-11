
// import React from "react";
// import Image from "../Assets/Image.jpg";
// import { Typewriter } from "react-simple-typewriter";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";

// const Intro = () => {
//   return (
//     <section className="mt-10 md:px-8">
//       <div className="rounded-2xl p-6 md:p-10 shadow-2xl">

//         {/* Main Content */}
//         <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">

//           {/* Text Section */}
//           <div className="text-center lg:text-left max-w-xl">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//               Hello, I’m <br />
//               <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//                 Shruti Bachale
//               </span>
//             </h2>

//             <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8245ec] mt-4">
//               <span>And I'm a </span>
//               <Typewriter
//                 words={[
//                   "Frontend Developer",
//                   "Backend Developer",
//                   "Fullstack Developer",
//                   "Coder",
//                 ]}
//                 loop={0}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={100}
//                 deleteSpeed={50}
//                 delaySpeed={2000}
//               />
//             </h3>

//             <p className="text-slate-300 mt-4 text-sm sm:text-base">
//               I build modern, responsive web interfaces using React and Tailwind CSS.
//               I love turning designs into functional, accessible and delightful user
//               experiences.
//             </p>

//             {/* Download Button */}
//             <div className="flex justify-center lg:justify-start mt-6">
//               <a
//                 href="/shrutibachaleCV.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition font-medium animate-pulse flex items-center gap-2"
//               >
//                 <FontAwesomeIcon icon={faDownload} />
//                 Download CV
//               </a>
//             </div>

//             {/* Skills */}
//             <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400">
//               {[
//                 "React Js",
//                 "Tailwind CSS",
//                 "JavaScript (ES6+)",
//                 "HTML5",
//                 "CSS3",
//               ].map((skill) => (
//                 <div
//                   key={skill}
//                   className="px-4 py-2 bg-slate-800/50 rounded-md"
//                 >
//                   {skill}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl shadow-2xl shadow-purple-500/30 p-3 border border-purple-700 bg-purple-900/40 hover:shadow-purple-500 hover:animate-pulse flex items-center justify-center">
//             <img
//               src={Image}
//               alt="Shruti Bachale"
//               className="rounded-xl object-cover w-full h-full"
//             />
//           </div>
//         </div>

//         {/* Highlights */}
//         <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//           <div className="p-4 bg-gradient-to-br from-pink-600/10 to-transparent rounded-md border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition shadow-md hover:shadow-purple-500">
//             <h3 className="text-2xl font-semibold">10+</h3>
//             <p className="text-xs text-slate-400 mt-1">Projects Live</p>
//           </div>

//           <div className="p-4 bg-gradient-to-br from-purple-600/10 to-transparent rounded-md border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition shadow-md hover:shadow-purple-500">
//             <h3 className="text-2xl font-semibold">React.Js</h3>
//             <p className="text-xs text-slate-400 mt-1">Primary Framework</p>
//           </div>

//           <div className="p-4 bg-gradient-to-br from-blue-600/10 to-transparent rounded-md border border-slate-800 hover:border-purple-500 hover:text-purple-400 transition shadow-md hover:shadow-purple-500">
//             <h3 className="text-2xl font-semibold">Netlify</h3>
//             <p className="text-xs text-slate-400 mt-1">Deployment</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Intro;





// import React from "react";
// import Image from "../Assets/Image.jpg";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// const Intro = () => {
//   return (
//     <section id="home" className="py-20 flex items-center px-6 md:px-12 relative overflow-hidden">

//       {/* 🔥 BACKGROUND GLOW */}
//       <div className="absolute w-[400px] h-[400px] bg-purple-600/30 blur-[120px] top-10 left-10"></div>
//       <div className="absolute w-[300px] h-[300px] bg-pink-500/30 blur-[120px] bottom-10 right-10"></div>

//       <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="text-purple-400 mb-2">👋 Hello, I'm</p>

//           {/* 🔥 MAIN HEADING */}
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
//             Shruti Bachale <br />
//             <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//               React Developer
//             </span>
//           </h1>

//           {/* TYPEWRITER */}
//           <h2 className="text-xl sm:text-2xl mt-4 text-slate-300">
//             <Typewriter
//               words={[
//                 "I build modern web apps",
//                 "I create beautiful UI",
//                 "I solve real-world problems",
//               ]}
//               loop={0}
//               cursor
//             />
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="mt-4 text-slate-400 max-w-md">
//             Passionate frontend developer focused on building fast,
//             responsive and user-friendly web applications using React.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex gap-4 mt-6">
//             <a
//               href="#projects"
//               className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
//             >
//               View Work
//             </a>

//             <a
//               href="#contact"
//               className="px-6 py-3 rounded-lg border border-slate-600 hover:border-purple-400 transition"
//             >
//               Contact
//             </a>
//           </div>

//           {/* SOCIAL */}
//           {/* <div className="flex gap-5 mt-6 text-xl">
//             <a href="https://github.com/shrutibachale" target="_blank">
//               <FontAwesomeIcon icon={faGithub} />
//             </a>
//             <a href="https://www.linkedin.com/in/shruti-bachale" target="_blank">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//           </div> */}
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center"
//         >
//           <div className="relative">

//             {/* GLOW RING */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-40"></div>

//             {/* IMAGE CARD */}
//             <div className="relative p-3 rounded-2xl bg-slate-900 border border-slate-700 backdrop-blur-xl">
//               <img
//                 src={Image}
//                 alt="Shruti"
//                 className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl"
//               />
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Intro;




// import React from "react";
// import Image from "../Assets/Image.jpg";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

// const Intro = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
//     >
      
//       {/* 🔥 Animated Background Grid */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="w-full h-full bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:30px_30px]"></div>
//       </div>

//       {/* 🔥 Gradient Glow Orbs */}
//       <motion.div
//         animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute w-[400px] h-[400px] bg-purple-600/30 blur-[120px] top-0 left-0"
//       />
//       <motion.div
//         animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute w-[300px] h-[300px] bg-pink-500/30 blur-[120px] bottom-0 right-0"
//       />

//       <div className="grid lg:grid-cols-2 gap-12 items-center z-10 max-w-6xl w-full">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <p className="text-purple-400 mb-3 tracking-widest text-sm">
//             FRONTEND DEVELOPER
//           </p>

//           {/* 🔥 HEADLINE */}
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//             I design & build <br />
//             <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-pulse">
//               stunning web experiences
//             </span>
//           </h1>

//           {/* TYPEWRITER */}
//           <h2 className="text-xl mt-5 text-slate-300">
//             <Typewriter
//               words={[
//                 "React Developer 🚀",
//                 "UI/UX Focused 🎨",
//                 "Building Real Products 💻",
//               ]}
//               loop={0}
//               cursor
//             />
//           </h2>

//           {/* DESCRIPTION */}
//           <p className="mt-5 text-slate-400 max-w-md">
//             Hi, I’m Shruti — I craft fast, modern, and scalable web apps
//             with a strong focus on design, performance, and user experience.
//           </p>

//           {/* CTA */}
//           <div className="flex gap-4 mt-8">
//             <a
//               href="#projects"
//               className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-110 transition font-semibold shadow-lg shadow-purple-500/30"
//             >
//               🚀 View Work
//             </a>

//             <a
//               href="#contact"
//               className="px-7 py-3 rounded-xl border border-slate-600 hover:border-purple-400 hover:scale-105 transition"
//             >
//               ✨ Hire Me
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE IMAGE (3D STYLE) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//           animate={{ opacity: 1, scale: 1, rotate: 0 }}
//           transition={{ duration: 1 }}
//           className="flex justify-center"
//         >
//           <div className="relative group">

//             {/* Glow Ring */}
//             <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-50 group-hover:opacity-80 transition"></div>

//             {/* Card */}
//             <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 p-3 rounded-2xl transform group-hover:rotate-1 transition">
//               <img
//                 src={Image}
//                 alt="Shruti"
//                 className="w-72 h-72 object-cover rounded-xl"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Intro;





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
              href="/shrutibachaleCV.pdf"
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
