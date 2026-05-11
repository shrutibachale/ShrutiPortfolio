
// import React from "react";

// const Education = () => {
//   const educations = [
//     {
//       title: "Full Stack Web Development",
//       institute: "Coding Ninjas Bootcamp",
//       period: "Oct 2023 – Jul 2025",
//       description:
//         "Completed an intensive bootcamp focusing on modern web technologies. Built real-world projects using React.js, Node.js, and MongoDB.",
//       certifications: [
//         {
//           name: "Frontend Developer Certification",
//           link: "https://certificate.codingninjas.com/view/b645e8dc7e0afc42",
//         },
//         {
//           name: "Introduction to Java Certification",
//           link: "https://certificate.codingninjas.com/view/d6077292198ca798",
//         },
//       ],
//       skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React.js",
//         "Node.js",
//         "MongoDB",
//         "DSA",
//       ],
//     },
//     {
//       title: "B.Sc. (Chemistry, Zoology, Botany)",
//       institute: "Rashtrasant Tukadoji Maharaj Nagpur University",
//       period: "Aug 2019 – Jul 2022",
//       description:
//         "Studied core sciences with hands-on laboratory experiments. Developed analytical skills and a scientific approach to problem-solving.",
//       Percentage: "70.66%",
//       grade: "A",
//     },
//     {
//       title: "HSC (Higher Secondary Certificate)",
//       institute: "Lal Bahadur Shastri School, Bhandara",
//       period: "Jul 2017 – Feb 2019",
//       description:
//         "Focused on Science stream subjects. Participated in science exhibitions and enhanced research and presentation skills.",
//       Percentage: "52.15%",
//     },
//     {
//       title: "SSC (Secondary School Certificate)",
//       institute: "Nutan Kanya School, Bhandara",
//       period: "Mar 2017",
//       description:
//         "Completed secondary education with a strong foundation in core subjects.",
//       Percentage: "79%",
//     },
//   ];

//   return (
//     <section
//       id="education"
//       className="mt-10 sm:px-2 lg:px-12 mb-12"
//     >
//       {/* Heading */}
//       <div className="text-center max-w-2xl mx-auto">
//         <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold">
//           Education
//         </h3>
//         <div className="w-20 sm:w-28 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
//         <p className="mt-3 text-gray-400 text-sm sm:text-base">
//           My journey of learning and growth through academics & professional courses
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
//         {educations.map((edu, index) => (
//           <div
//             key={index}
//             className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl
//                        border-2 border-gray-700 bg-gray-900/60
//                        hover:border-purple-500 transition duration-300"
//           >
//             <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400">
//               {edu.title}
//             </h3>

//             <p className="mt-1 text-sm sm:text-base font-medium text-gray-300">
//               {edu.institute}
//             </p>

//             <p className="text-xs sm:text-sm text-gray-500">
//               {edu.period}
//             </p>

//             {edu.Percentage && (
//               <p className="mt-2 text-sm font-semibold text-gray-100">
//                 Percentage: {edu.Percentage}
//               </p>
//             )}

//             {edu.grade && (
//               <p className="mt-1 text-sm font-semibold text-green-400">
//                 Grade: {edu.grade}
//               </p>
//             )}

//             {edu.description && (
//               <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
//                 {edu.description}
//               </p>
//             )}

//             {edu.skills && (
//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-300">
//                   Skills Learned:
//                 </p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {edu.skills.map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 text-xs sm:text-sm rounded-full
//                                  bg-purple-600/30 text-purple-200"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {edu.certifications && (
//               <div className="mt-4">
//                 <p className="text-sm font-semibold text-gray-300">
//                   Certifications:
//                 </p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {edu.certifications.map((cert, idx) => (
//                     <a
//                       key={idx}
//                       href={cert.link}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-sm px-3 py-1 rounded-md
//                                  bg-black/30 border border-pink-500/30
//                                  hover:bg-pink-500/20 transition"
//                     >
//                       {cert.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;
  


// import { motion } from "framer-motion";

// const educationData = [
//   {
//     degree: "Bachelor of Science (B.Sc)",
//     institute: "Your College Name",
//     year: "2020 - 2023",
//   },
//   {
//     degree: "Higher Secondary (12th)",
//     institute: "Your School Name",
//     year: "2019 - 2020",
//   },
// ];

// export default function Education() {
//   return (
//     <section
//       id="education"
//       className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-16"
//     >
//       <div className="max-w-5xl mx-auto">

//         {/* HEADING */}
//         <h2 className="text-4xl font-semibold text-center mb-14">
//           My{" "}
//           <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//             Education
//           </span>
//         </h2>

//         {/* TIMELINE */}
//         <div className="relative border-l border-white/10 ml-4">

//           {educationData.map((edu, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="mb-10 ml-6"
//             >
//               {/* DOT */}
//               <div className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full -left-[6px] mt-2"></div>

//               {/* CARD */}
//               <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg">
//                 <h3 className="text-lg font-semibold">{edu.degree}</h3>
//                 <p className="text-sm text-slate-400 mt-1">
//                   {edu.institute}
//                 </p>
//                 <span className="text-xs text-purple-400 mt-2 block">
//                   {edu.year}
//                 </span>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science (B.Sc)",
    institute: "J. M. Patel College, Bhandara",
    year: "2019 — 2022",
    extra: "Percentage: 70.66%",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Lal Bahadur Shashtri School & Jr. College, Bhandara",
    year: "2017 — 2019",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Nutan Kanya High School & Jr. College, Bhandara",
    year: "2017",
  },
];

const certifications = [
  {
    title: "Frontend Development Certification",
    org: "Coding Ninjas",
    duration: "Oct 2023 — Jul 2025",
    skills:
      "React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design",
    link: "https://certificate.codingninjas.com/view/b645e8dc7e0afc42",
  },
  {
    title: "Core Java Certification",
    org: "Coding Ninjas",
    duration: "Oct 2023 — Jul 2025",
    skills:
      "Core Java, OOPS, Data Structures",
    link: "https://certificate.codingninjas.com/view/d6077292198ca798",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-[#07060a] text-white px-6 md:px-16 relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 blur-3xl rounded-full bottom-0 left-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Education &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        {/* EDUCATION */}
        <div className="mb-20">

          <h3 className="text-2xl font-semibold mb-10 text-white">
            Education
          </h3>

          <div className="relative border-l border-white/10 ml-4">

            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mb-10 ml-6"
              >
                {/* DOT */}
                <div className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full -left-[6px] mt-2"></div>

                {/* CARD */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">
                        {edu.degree}
                      </h3>

                      <p className="text-sm text-slate-400 mt-1">
                        {edu.institute}
                      </p>
                    </div>

                    <span className="text-sm text-purple-400 whitespace-nowrap">
                      {edu.year}
                    </span>

                  </div>

                  {/* EXTRA */}
                  {edu.extra && (
                    <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {edu.extra}
                    </span>
                  )}

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>

          <h3 className="text-2xl font-semibold mb-10 text-white">
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-center justify-between gap-3 mb-4">

                  <h3 className="text-lg font-semibold leading-snug">
                    {cert.title}
                  </h3>

                  <span className="text-xs text-purple-400 whitespace-nowrap">
                    {cert.duration}
                  </span>

                </div>

                <p className="text-sm text-slate-400 mb-3">
                  {cert.org}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {cert.skills}
                </p>

                {/* BUTTON */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 text-sm text-purple-400 hover:text-purple-300 transition"
                >
                  Verify Certificate →
                </a>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
