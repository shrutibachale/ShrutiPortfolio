
// import React from "react";
// import image1 from "../Assets/image1.jpg";

// const Experiences = () => {
//   return (
//     <section
//       id="experience"
//       className="mt-10 sm:px-2 lg:px-12 mb-12"
//     >
//       {/* Heading */}
//       <div className="text-center">
//         <h3 className="text-2xl sm:text-3xl font-semibold">Experience</h3>
//         <div className="w-16 sm:w-24 h-1 bg-purple-600 mx-auto mt-2 rounded-full" />
//       </div>

//       {/* Cards */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

//         {/* Experience Card 1 */}
//         <div
//           className="group rounded-2xl border-2 border-slate-800 
//           bg-gradient-to-b from-slate-900/40 to-transparent
//           p-5 sm:p-6 hover:border-purple-500/40
//           hover:shadow-lg hover:shadow-purple-500
//           transition-all duration-300"
//         >
//           <div className="flex flex-col items-center text-center">
//             <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-700 mb-4">
//               <img
//                 src={image1}
//                 alt="office"
//                 className="w-full h-full object-cover group-hover:scale-105 transition"
//               />
//             </div>

//             <h1 className="text-base sm:text-lg font-semibold text-purple-400">
//               Frontend Developer
//             </h1>
//             <h2 className="mt-1 text-sm sm:text-base font-medium text-slate-200">
//               Blue Vision Softech Pvt. Ltd.
//             </h2>
//             <p className="text-xs sm:text-sm text-slate-400 mt-1">
//               Oct 2025 – Present
//             </p>

//             <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
//               Developing responsive, user-friendly interfaces with React,
//               delivering clean and efficient frontend solutions.
//             </p>
//           </div>
//         </div>

//         {/* Experience Card 2 */}
//         <div
//           className="group rounded-2xl border-2 border-slate-800 
//           bg-gradient-to-b from-slate-900/40 to-transparent
//           p-5 sm:p-6 hover:border-purple-500/40
//           hover:shadow-lg hover:shadow-purple-500
//           transition-all duration-300"
//         >
//           <div className="flex flex-col items-center text-center">
//             <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-700 mb-4">
//               <img
//                 src="https://nutankanyaschool.weebly.com/uploads/1/6/1/3/16130586/published/home_3.jpg?1482938200"
//                 alt="school"
//                 className="w-full h-full object-cover group-hover:scale-105 transition"
//               />
//             </div>

//             <h1 className="text-base sm:text-lg font-semibold text-purple-400">
//               High School Teacher
//             </h1>
//             <h2 className="mt-1 text-sm sm:text-base font-medium text-slate-200">
//               Nutan Kanya School, Bhandara
//             </h2>
//             <p className="text-xs sm:text-sm text-slate-400 mt-1">
//               June 2022 – May 2024
//             </p>

//             <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
//               Developed strong communication, organization, problem-solving
//               skills, and managed classroom activities effectively.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Experiences;






import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "BlueVision Softech Pvt. Ltd",
    location: "Nagpur, Maharashtra",
    duration: "Oct 2025 — Present",
    points: [
      "Engineered 10+ scalable web applications using React.js and Tailwind CSS, improving responsiveness and usability.",
      "Optimized component rendering and reduced redundant API calls to improve application performance.",
      "Built 20+ reusable UI components, accelerating development workflows and ensuring design consistency.",
      "Integrated RESTful APIs for seamless data communication across multiple applications.",
    ],
  },
  {
    role: "High School Teacher",
    company: "Nutan Kanya High School And Jr. College",
    location: "Bhandara, Maharashtra",
    duration: "July 2022 — May 2024",
    points: [
      "Taught science subjects to 70+ students and improved academic performance through interactive learning methods.",
      "Conducted engaging classroom sessions to increase participation and problem-solving skills.",
      "Developed strong communication, presentation, and leadership abilities through teaching experience.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#07060a] text-white px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl font-semibold text-center mb-6">
          Work{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
  My professional journey focused on building modern web applications,
  scalable UI systems and strong communication skills.
</p>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 ml-3">

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="mb-12 ml-8"
            >
              {/* DOT */}
              <div className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full -left-[6px] mt-2"></div>

              {/* CARD */}
              <div className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 transition duration-300">

                {/* TOP */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">

                  <div>
                    <h3 className="text-xl font-semibold">
                      {exp.role}
                    </h3>

                    {/* <p className="text-sm text-slate-400 mt-1">
                      {exp.company} • {exp.location}
                    </p> */}
                    <p className="text-sm text-slate-400 mt-1 flex flex-wrap items-center gap-2">
  <span>{exp.company}</span>

  <span className="w-1 h-1 rounded-full bg-slate-500"></span>

  <span>{exp.location}</span>
</p>
                  </div>

                  {/* <span className="text-sm text-purple-400 whitespace-nowrap">
                    {exp.duration}
                  </span> */}
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 whitespace-nowrap">
  {exp.duration}
</span>
                </div>

                {/* POINTS */}
                <ul className="space-y-3 text-sm text-slate-400 leading-relaxed">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
