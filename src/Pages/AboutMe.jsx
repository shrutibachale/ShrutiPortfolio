import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiBriefcase,
  FiTrendingUp,
} from "react-icons/fi";

export default function AboutMe() {
  const highlights = [
    {
      icon: <FiBriefcase />,
      title: "10+",
      subtitle: "Live Projects",
    },
    {
      icon: <FiTrendingUp />,
      title: "7+ Months",
      subtitle: "Industry Experience",
    },
    {
      icon: <FiCode />,
      title: "React.js",
      subtitle: "Frontend Expertise",
    },
    {
      icon: <FiLayers />,
      title: "Reusable UI",
      subtitle: "Component Architecture",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#07060a] text-white px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* PARAGRAPH */}
          <p className="text-slate-400 leading-relaxed mb-5">
            Frontend Developer with hands-on experience building scalable,
            responsive, and production-ready web applications using React.js,
            JavaScript, and Tailwind CSS.
          </p>

          <p className="text-slate-400 leading-relaxed mb-5">
            I specialize in developing clean user interfaces, reusable
            component architectures, and seamless API integrations focused on
            performance and usability.
          </p>

          <p className="text-slate-400 leading-relaxed">
            Worked on real-world business platforms including e-commerce,
            real estate, business websites, and admin panels
            in collaborative development environments.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {highlights.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl text-purple-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
