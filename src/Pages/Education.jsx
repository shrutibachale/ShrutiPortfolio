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
