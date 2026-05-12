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
