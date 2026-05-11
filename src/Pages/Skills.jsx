
// import {
//   faCss,
//   faGithub,
//   faHtml5,
//   faJs,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Skills = () => {
//   return (
//     <section id="skills" className="mt-10 sm:px-2 lg:px-12 mb-12">
//       {/* Section Title */}
//       <div className="text-center max-w-2xl mx-auto">
//         <h3 className="text-2xl sm:text-3xl font-semibold">My Skills</h3>
//         <div className="w-16 sm:w-20 h-1 bg-purple-500 mx-auto mt-3 rounded-full" />
//       </div>

//       {/* Skills Wrapper */}
//       <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

//         {/* Technical Skills */}
//         <div className="p-6 sm:p-2 lg:p-6 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-lg hover:shadow-purple-500 transition">
//           <h2 className="text-xl sm:text-2xl font-semibold text-center">
//             Technical Skills
//           </h2>
//           <p className="text-slate-400 text-sm sm:text-base text-center mt-3">
//             A collection of my technical skills through various projects and experiences.
//           </p>

//           <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//             <Skill icon={faHtml5} color="text-orange-500" label="HTML5" />
//             <Skill icon={faCss} color="text-blue-500" label="CSS3" />
//             <Skill icon={faJs} color="text-yellow-400" label="JavaScript (ES6+)" />
//             <Skill icon={faReact} color="text-blue-400" label="ReactJs" />

//             <SkillImg
//               src="https://imgs.search.brave.com/Wglrg4-SlmLcLWEPt3eTTcCaa30ANinzIBzSzftvTrg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS90YWlsd2lu/ZC1jc3MtaWNvbi5w/bmc"
//               label="Tailwind CSS"
//             />

//             <SkillImg
//               src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
//               label="Firebase"
//             />

//             <Skill icon={faGithub} color="text-white" label="Github" />

//             <SkillImg
//               src="https://imgs.search.brave.com/DEdIG47bCRkZgyqVBMoGHtV1uA3EtPZQM8BDb3vXL94/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2dp/bGJhcmJhcmEvbG9n/b3MvbWFpbi9sb2dv/cy9uZXRsaWZ5LWlj/b24uc3Zn"
//               label="Netlify"
//             />

//             <SkillImg
//               src="https://imgs.search.brave.com/Fag2MuKax-raYtKFaDtiB7ar3OzT9MUVfMx57At7ogg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzM4/MXl1L3N0eWxlcy9j/b21tdW5pdHlJY29u/XzJmN2hod2ZzNXBr/MzEucG5n"
//               label="VS Code"
//             />
//           </div>
//         </div>

//         {/* Professional Skills */}
//         <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-lg hover:shadow-purple-500 transition">
//           <h2 className="text-xl sm:text-2xl font-semibold text-center">
//             Professional Skills
//           </h2>
//           <p className="text-slate-400 text-sm sm:text-base text-center mt-3">
//             A collection of my professional skills through teaching experiences.
//           </p>

//           <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 sm:gap-8 text-center">
//             <Circle percent="75%" label="Communication" />
//             <Circle percent="70%" label="Problem solving" />
//             <Circle percent="85%" label="Teamwork" />
//             <Circle percent="80%" label="Creativity" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// /* ---------- Small UI Components ---------- */

// const Skill = ({ icon, color, label }) => (
//   <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-slate-800/40 border border-slate-700 hover:-translate-y-1 transition">
//     <FontAwesomeIcon icon={icon} className={`text-lg sm:text-xl ${color}`} />
//     <span className="text-xs sm:text-sm">{label}</span>
//   </div>
// );

// const SkillImg = ({ src, label }) => (
//   <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-slate-800/40 border border-slate-700 hover:-translate-y-1 transition">
//     <img src={src} className="w-4 h-4 sm:w-5 sm:h-5" alt={label} />
//     <span className="text-xs sm:text-sm">{label}</span>
//   </div>
// );

// const Circle = ({ percent, label }) => {
//   const value = parseInt(percent);

//   return (
//     <div className="flex flex-col items-center gap-2 sm:gap-3">
//       <div
//         className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm text-white"
//         style={{
//           background: `conic-gradient(#a855f7 0% ${value}%, #334155 ${value}% 100%)`,
//         }}
//       >
//         <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#07060a] rounded-full flex items-center justify-center">
//           {percent}
//         </div>
//       </div>

//       <p className="text-xs sm:text-sm text-slate-300">{label}</p>
//     </div>
//   );
// };





import { motion } from "framer-motion";

const skillData = [
  {
    title: "Frontend Development💻",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "React Router",
    ],
  },
  {
    title: "Developer Tools🛠️",
    skills: [
      "Git",
      "GitHub",
      "Netlify",
      "VS Code",
      "Postman",
    ],
  },
  {
    title: "Concepts & Architecture⚡",
    skills: [
      "REST APIs",
      "Component-Based Architecture",
      "Performance Optimization",
      "Reusable UI Components",
    ],
  },
  {
    title: "Programming Fundamentals🧠",
    skills: [
      "Core Java",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Soft Skills🤝",
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Presentation Skills",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-[#07060a] text-white px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl font-semibold text-center mb-6">
          Technical{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
  Technologies and tools I use to build scalable,
  responsive and high-performance web applications.
</p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillData.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
            >
              {/* CATEGORY */}
              {/* <h3 className="text-lg font-semibold mb-5 text-purple-400">
                {category.title}
              </h3> */}
              <h3 className="text-lg font-semibold mb-5 text-purple-400 flex items-center gap-2">
  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
  {category.title}
</h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-purple-400 hover:text-white hover:bg-purple-500/10 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
