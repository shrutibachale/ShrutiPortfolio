import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import React, { useState } from "react";

// ===============================
// IMPORT PROJECT IMAGES
// ===============================

import mdspaceImg from "../Assets/ProjectImages/MDSpace.png";
import fularkImg from "../Assets/ProjectImages/Fulark.png";
import ecommerceImg from "../Assets/ProjectImages/Berrylook.png";

import weatherImg from "../Assets/ProjectImages/Weather.png";
import packagingImg from "../Assets/ProjectImages/Mahamaya.png";
import ngoImg from "../Assets/ProjectImages/NGO.png" ;
import ramikaImg from "../Assets/ProjectImages/Industrial.png";
import solarImg from "../Assets/ProjectImages/Solar.png";
import medimitraImg from "../Assets/ProjectImages/Medimitra.png";

// ===============================
// FEATURED PROJECTS
// ===============================

const featuredProjects = [
  {
    title: "Fulark Health Drink Website",

    category: "Business Branding Live Website",

    year: "March 2026",

    desc:
      "Developed a scalable Health Drink platform with dynamic property listings, API integrations, admin management features, category-based filtering, and responsive user interfaces for seamless property browsing.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "REST API",
      "Responsive Design",
    ],

    features: [
      "Integrated APIs using centralized api.ts architecture",
      "Built separate admin and public panels",
      "Implemented category-based property filtering",
      "Added pagination for optimized data rendering",
      "Responsive layouts across all devices",
      "Reusable and scalable component architecture",
    ],

    image: fularkImg,

    live: "https://fulark.in/",

    github: "",
  },

  {
    title: "MD Space Real Estate Platform",

    category: "Live Client Project",

    year: "January 2026",

    desc:
      "Designed and developed a modern business website with responsive layouts, optimized UI components, reusable sections, and smooth user interactions focused on brand presentation.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "Responsive UI",
    ],

    features: [
      "Modern responsive business website",
      "Reusable UI section architecture",
      "Smooth animations and transitions",
      "Optimized mobile responsiveness",
      "Professional product presentation",
      "Performance-focused frontend implementation",
    ],

    image: mdspaceImg,

    live: "https://mdspace.co.in/",

    github: "",
  },

  {
    title: "E-commerce Application",

    category: "Personal Practice Project",

    year: "May 2025",

    desc:
      "Built a full-featured e-commerce application with Firebase backend integration, authentication, admin product management, dynamic cart functionality, and Razorpay payment gateway integration.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "REST API",
      "Razorpay",
    ],

    features: [
      "Firebase authentication and backend integration",
      "Admin panel for product management",
      "Dynamic cart and checkout functionality",
      "Razorpay payment gateway integration",
      "Reusable scalable component structure",
      "Responsive UI across all devices",
    ],

    image: ecommerceImg,

    live: "https://berrylookhub.netlify.app/",

    github: "https://github.com/shrutibachale/Berrylook-Website",
  },
];

// ===============================
// OTHER LIVE PROJECTS
// ===============================

const otherProjects = [
  {
    title: "Me2We Foundation NGO",

    desc:
      "Developed an NGO platform with accessible content structure, responsive layouts, and user-friendly interface for better engagement.",

    tech: [
      "HTML",
      "CSS",
      "TypeScript",
    ],

    image: ngoImg,

    year: "May 2025",

    live: "https://me2wefoundation.in/",
  },

   {
    title: "Mahamaya Packaging Website",

    desc:
      "Created a responsive corporate website for a PET bottles and jars manufacturing company focused on business presentation and usability.",

    tech: [
      "React.js",
      "Responsive UI",
    ],

    image: packagingImg,
    year: "May 2025",
    live: "https://mahamayapackaging.in/",
  },

  {
    title: "Medimitra Job Portal",
    
    desc:
       "Developed a healthcare job portal with profile completion workflows, search functionality, dynamic listings, and scalable frontend architecture for healthcare recruitment.",

    tech: [
      "React.js",
      "API Integration",
    ],

    image: medimitraImg,
    year: "May 2025",
    live: "https://medimitra.org/",
  },

  {
    title: "Ramika Engineering",

    desc:
      "Built an industrial business website with modern responsive layouts and clean UI focused on professional business presentation.",

    tech: [
      "React.js",
      "Tailwind CSS",
    ],

    image: ramikaImg,
    year: "May 2025",
    live: "https://ramikaengineering.com/",
  },

  {
    title: "SSV Solar Website",

    desc:
      "Designed a responsive solar solutions company website with clean layouts and optimized user experience for business visibility.",

    tech: [
      "React.js",
      "UI Development",
    ],

    image: solarImg,
    year: "May 2025",
    live: "https://ssvsolar.com/",
  },

  {
    title: "Weather Dashboard Application",

    desc:
      "Built a real-time weather dashboard with AQI insights, geolocation support, and interactive forecast visualizations using external APIs.",

    tech: [
      "React.js",
      "Chart.js",
      "REST API",
    ],

    image: weatherImg,
    year: "May 2025",
    live: "https://skyforecasthub.netlify.app/",
  },

  

  
];

// ===============================
// COMPONENT
// ===============================

export default function Projects() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 bg-[#07060a] text-white px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-20">

          <p className="text-sm uppercase tracking-[4px] text-purple-400 mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Production-ready web applications across real estate,
            business, e-commerce, healthcare, weather, and
            corporate platforms.
          </p>

        </div>

        {/* FEATURED PROJECTS */}
        <div className="space-y-24">

          {featuredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >

              {/* IMAGE */}
              <div
                className={`rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:border-purple-400/30 transition ${
                  i % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => setSelectedImage(project.image)}
                  className="w-full h-[340px] object-cover hover:scale-105 transition duration-700 cursor-pointer"
                />

              </div> 

              {/* CONTENT */}
              <div>

                {/* CATEGORY */}
                <div className="flex items-center gap-3 flex-wrap mb-4">

                  <p className="text-sm uppercase tracking-[3px] text-purple-400">
                    {project.category}
                  </p>

                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {project.year}
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-400 leading-relaxed mb-7">
                  {project.desc}
                </p>

                {/* FEATURES */}
                <div className="space-y-3 mb-8">

                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-400 mt-2"></span>

                      <span>{feature}</span>
                    </div>
                  ))}

                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* LINKS */}
                <div className="flex items-center gap-6">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
                  >
                    Live Preview
                    <FiArrowUpRight />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
                    >
                      Source Code
                      <FiGithub />
                    </a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* OTHER PROJECTS */}
        <div className="mt-28">

          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">

            <div>

              <h3 className="text-3xl font-semibold">
                Other Live Projects
              </h3>

              <p className="text-slate-400 mt-2 text-sm">
                Additional production-ready business and frontend projects.
              </p>

            </div>

            <div className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm text-purple-300">
              10+ Live Projects
            </div>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {otherProjects.map((project, i) => (
              <motion.a
                key={i}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
                className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-400/30 hover:-translate-y-1 transition"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImage(project.image);
                    }}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-700 cursor-pointer"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-start justify-between gap-4 mb-4">

                    <h4 className="text-lg font-medium group-hover:text-white transition">
                      {project.title}
                    </h4>

                    <FiExternalLink className="text-slate-500 group-hover:text-purple-400 transition shrink-0 mt-1" />
                  
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    
                  </div>
                    
                </div>

              </motion.a>
            ))}

          </div>

        </div>

      </div>
      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-6xl w-full max-h-[90vh] object-contain rounded-2xl border border-white/10"
          />
        </div>
      )}
    </section>
  );
}
