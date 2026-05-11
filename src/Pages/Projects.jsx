
// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "BerryLookHub - E-commerce",
//       img: "https://cdn.affiliates.one/production/admin_affiliates_com_tw/blog_image/2198/b928aa1429e8ffc9022a29160744aa720f563aa9cc8264eef785611aa49eb49d_BerryLook.jpg",
//       desc:
//         "Fully responsive e-commerce platform with product categories, search filters, real-time cart updates and payment integration.",
//       tech: "React, Tailwind CSS, JavaScript, APIs",
//       live: "https://berrylookhub.netlify.app",
//       code: "https://github.com/shrutibachale/Berrylook-Website",
//     },
//     {
//       title: "SkyForecastHub - Weather App",
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTxVXaYKOg1ufDOa1rM3kJzMWUKckdI5S_g&s",
//       desc:
//         "Real-time weather dashboard using OpenWeatherMap API with AQI, sunrise/sunset, wind, humidity and rainfall forecast.",
//       tech: "React, Tailwind CSS, OpenWeatherMap API",
//       live: "https://skyforecasthub.netlify.app",
//       code: "https://github.com/shrutibachale/weatherapp",
//     },
//     {
//       title: "Currency Converter",
//       img: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_640.jpg",
//       desc:
//         "Built a responsive currency converter using React and Tailwind CSS, Integrated real-time exchange rates via ExchangeRate API.",
//       tech: "React.js, Tailwind, APIs",
//       live: "https://currencyswapconvert.netlify.app/",
//       code: "https://github.com/shrutibachale/CurrencyConverter",
//     },
//     {
//       title: "Notes / To-Do App",
//       img: "https://global.discourse-cdn.com/freecodecamp/original/3X/d/8/d8e7a038f09b12a5637ca8c217ea30132fa7d8b5.png",
//       desc: "Simple notes & to-do app with persistence and nice UI interactions.",
//       tech: "React, Tailwind, Local Storage",
//       live: "https://shruustodoslists.netlify.app/",
//       code: "https://github.com/shrutibachale/localtodocontext",
//     },
//   ];

//   return (
//     <section id="projects" className="mt-10 sm:px-2 lg:px-12 mb-12">
//       {/* Heading */}
//       <div className="text-center">
//         <h3 className="text-2xl sm:text-3xl font-semibold">Projects</h3>
//         <div className="w-16 sm:w-24 h-1 bg-purple-600 mx-auto mt-2" />
//       </div>

//       {/* Projects Grid */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         {projects.map((p) => (
//           <article
//             key={p.title}
//             className="p-5 sm:p-6 rounded-2xl
//               bg-gradient-to-b from-slate-900/30 to-transparent
//               border-2 border-slate-800 group
//               hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500
//               transition-all duration-300"
//           >
//             <div className="flex flex-col sm:flex-row gap-5">

//               {/* Image & Text */}
//               <div className="flex-1">
//                 <img
//                   className="w-full sm:w-56 h-36 sm:h-32 object-cover rounded-lg mb-3"
//                   src={p.img}
//                   alt="project"
//                 />

//                 <h4 className="text-base sm:text-lg font-semibold">
//                   {p.title}
//                 </h4>

//                 <p className="text-sm text-slate-400 mt-2">
//                   {p.desc}
//                 </p>

//                 <p className="text-xs text-slate-500 mt-3">
//                   {p.tech}
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="flex sm:flex-col gap-3 sm:items-end justify-start sm:justify-center">
//                 {/* Live Button */}
//                 <a
//                   href={p.live}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     group relative inline-flex items-center justify-center
//                     px-5 py-2 rounded-lg text-sm sm:text-lg font-bold text-white
//                     bg-gradient-to-r from-pink-500 to-purple-600
//                     shadow-lg shadow-pink-500/30
//                     transition-all duration-300 ease-out
//                     hover:scale-105 hover:shadow-pink-500/60
//                     active:scale-95"
//                 >
//                   Live
//                   <span
//                     className="
//                       absolute inset-0 rounded-lg bg-white/20 opacity-0
//                       group-hover:opacity-100 transition duration-300"
//                   />
//                 </a>

//                 {/* Code Button */}
//                 <a
//                   href={p.code}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="
//                     inline-flex items-center justify-center
//                     px-4 py-1.5 rounded-lg text-sm sm:text-lg font-bold text-slate-300
//                     border border-slate-600
//                     backdrop-blur-md bg-white/5
//                     transition-all duration-300
//                     hover:text-white hover:border-pink-400
//                     hover:bg-pink-400/10 hover:scale-105
//                     active:scale-95"
//                 >
//                   Code
//                 </a>
//               </div>

//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;





// import { motion } from "framer-motion";
// import {
//   FiArrowUpRight,
//   FiGithub,
//   FiExternalLink,
// } from "react-icons/fi";

// // ===============================
// // IMPORT PROJECT IMAGES
// // ===============================

// // FEATURED PROJECTS
// // import ecommerceImg from "../Assets/ecommerce.png";
// // import mdspaceImg from "../Assets/mdspace.png";
// // import medimitraImg from "../Assets/medimitra.png";

// // OTHER PROJECTS
// // import weatherImg from "../Assets/weather.png";
// // import fularkImg from "../Assets/fulark.png";
// // import packagingImg from "../Assets/packaging.png";
// // import ngoImg from "../Assets/ngo.png";
// // import ramikaImg from "../Assets/ramika.png";
// // import solarImg from "../Assets/solar.png";

// // ===============================
// // FEATURED PROJECTS
// // ===============================

// const featuredProjects = [
//   {
//     title: "E-commerce Application",

//     category: "Full Stack E-commerce Platform",

//     desc:
//       "Developed a scalable e-commerce platform with secure authentication, dynamic product management, cart functionality, and seamless payment integration focused on performance and user experience.",

//     tech: [
//       "React.js",
//       "Tailwind CSS",
//       "Firebase",
//       "REST API",
//       "Razorpay",
//     ],

//     features: [
//       "Secure Firebase authentication for protected admin access",
//       "Admin panel for dynamic product management and updates",
//       "Integrated cart functionality with real-time product handling",
//       "Razorpay payment gateway integration for online transactions",
//       "REST API integration for dynamic product and application data",
//       "Responsive and optimized UI for seamless user experience",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://berrylookhub.netlify.app/",

//     github: "https://github.com/yourusername/ecommerce-app",
//   },

//   {
//     title: "MD Space Real Estate Platform",

//     category: "Real Estate Platform",

//     desc:
//       "Built a scalable real estate platform with structured property listings, responsive layouts, and seamless navigation designed to enhance business presentation and user engagement.",

//     tech: [
//       "React.js",
//       "Tailwind CSS",
//       "Responsive Design",
//     ],

//     features: [
//       "Structured property listing architecture",
//       "Responsive layouts across all screen sizes",
//       "Clean UI focused on user experience",
//       "Optimized production-ready deployment",
//       "Modern business presentation interface",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://mdspace.co.in/",

//     github: "",
//   },

//   {
//     title: "Medimitra Job Portal",

//     category: "Healthcare Job Portal",

//     desc:
//       "Developed a production-ready healthcare job portal with organized job listings, responsive UI structure, and optimized browsing experience for users and businesses.",

//     tech: [
//       "React.js",
//       "Tailwind CSS",
//       "API Integration",
//     ],

//     features: [
//       "Structured healthcare job listings",
//       "Responsive and accessible UI design",
//       "Optimized browsing and navigation experience",
//       "Production-ready frontend architecture",
//       "Clean and scalable component structure",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://medimitra.org/",

//     github: "",
//   },
// ];

// // ===============================
// // OTHER LIVE PROJECTS
// // ===============================

// const otherProjects = [
//   {
//     title: "Weather Dashboard Application",

//     desc:
//       "Built a real-time weather dashboard with AQI insights, geolocation support, and interactive forecast visualizations using external APIs.",

//     tech: [
//       "React.js",
//       "Chart.js",
//       "REST API",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://skyforecasthub.netlify.app/",
//   },

//   {
//     title: "Fulark Health Drink Website",

//     desc:
//       "Designed and developed a responsive business website for a natural health drink brand with modern UI and smooth user experience.",

//     tech: [
//       "React.js",
//       "Tailwind CSS",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://fulark.in/",
//   },

//   {
//     title: "Mahamaya Packaging Website",

//     desc:
//       "Created a responsive corporate website for a PET bottles and jars manufacturing company focused on business presentation and usability.",

//     tech: [
//       "React.js",
//       "Responsive UI",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://mahamayapackaging.in/",
//   },

//   {
//     title: "Me2We Foundation NGO",

//     desc:
//       "Developed an NGO platform with accessible content structure, responsive layouts, and user-friendly interface for better engagement.",

//     tech: [
//       "HTML",
//       "CSS",
//       "TypeScript",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://me2wefoundation.in/",
//   },

//   {
//     title: "Ramika Engineering",

//     desc:
//       "Built an industrial business website with modern responsive layouts and clean UI focused on professional business presentation.",

//     tech: [
//       "React.js",
//       "Tailwind CSS",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://ramikaengineering.com/",
//   },

//   {
//     title: "SSV Solar Website",

//     desc:
//       "Designed a responsive solar solutions company website with clean layouts and optimized user experience for business visibility.",

//     tech: [
//       "React.js",
//       "UI Development",
//     ],

//     image: "YOUR_IMAGE",

//     live: "https://ssvsolar.com/",
//   },
// ];

// // ===============================
// // COMPONENT
// // ===============================

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-24 bg-[#07060a] text-white px-6 md:px-16"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* ===================== */}
//         {/* HEADING */}
//         {/* ===================== */}

//         <div className="text-center mb-20">

//           <p className="text-sm uppercase tracking-[4px] text-purple-400 mb-4">
//             Portfolio
//           </p>

//           <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>

//           <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
//             Worked on 10+ production-ready web applications across
//             e-commerce, healthcare, real estate, manufacturing,
//             weather, NGO, and business platforms.
//           </p>

//         </div>

//         {/* ===================== */}
//         {/* FEATURED PROJECTS */}
//         {/* ===================== */}

//         <div className="space-y-20">

//           {featuredProjects.map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className={`grid lg:grid-cols-2 gap-12 items-center ${
//                 i % 2 !== 0 ? "lg:grid-flow-dense" : ""
//               }`}
//             >

//               {/* IMAGE */}
//               <div
//                 className={`rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:border-purple-400/20 transition ${
//                   i % 2 !== 0 ? "lg:col-start-2" : ""
//                 }`}
//               >

//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-[340px] object-cover hover:scale-105 transition duration-700"
//                 />

//               </div>

//               {/* CONTENT */}
//               <div>

//                 {/* CATEGORY */}
//                 <p className="text-sm uppercase tracking-[3px] text-purple-400 mb-4">
//                   {project.category}
//                 </p>

//                 {/* TITLE */}
//                 <h3 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
//                   {project.title}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-slate-400 leading-relaxed mb-7">
//                   {project.desc}
//                 </p>

//                 {/* FEATURES */}
//                 <div className="space-y-3 mb-8">

//                   {project.features.map((feature, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-start gap-3 text-sm text-slate-300"
//                     >
//                       <span className="w-2 h-2 rounded-full bg-purple-400 mt-2"></span>

//                       <span>{feature}</span>
//                     </div>
//                   ))}

//                 </div>

//                 {/* TECH STACK */}
//                 <div className="flex flex-wrap gap-3 mb-8">

//                   {project.tech.map((tech, idx) => (
//                     <span
//                       key={idx}
//                       className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}

//                 </div>

//                 {/* LINKS */}
//                 <div className="flex items-center gap-6">

//                   {/* LIVE LINK */}
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
//                   >
//                     Live Preview
//                     <FiArrowUpRight />
//                   </a>

//                   {/* GITHUB LINK */}
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="flex items-center gap-2 text-sm hover:text-purple-400 transition"
//                     >
//                       Source Code
//                       <FiGithub />
//                     </a>
//                   )}

//                 </div>

//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* ===================== */}
//         {/* OTHER PROJECTS */}
//         {/* ===================== */}

//         <div className="mt-28">

//           <div className="flex items-center justify-between flex-wrap gap-4 mb-12">

//             <div>

//               <h3 className="text-3xl font-semibold">
//                 Other Live Projects
//               </h3>

//               <p className="text-slate-400 mt-2 text-sm">
//                 Additional production-ready business and client projects.
//               </p>

//             </div>

//             <div className="px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 text-sm text-purple-300">
//               10+ Live Projects
//             </div>

//           </div>

//           {/* GRID */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

//             {otherProjects.map((project, i) => (
//               <motion.a
//                 key={i}
//                 href={project.live}
//                 target="_blank"
//                 rel="noreferrer"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: i * 0.05,
//                 }}
//                 className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-400/30 hover:-translate-y-1 transition"
//               >

//                 {/* IMAGE */}
//                 <div className="overflow-hidden">

//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition duration-700"
//                   />

//                 </div>

//                 {/* CONTENT */}
//                 <div className="p-6">

//                   {/* TOP */}
//                   <div className="flex items-start justify-between gap-4 mb-4">

//                     <h4 className="text-lg font-medium group-hover:text-white transition">
//                       {project.title}
//                     </h4>

//                     <FiExternalLink className="text-slate-500 group-hover:text-purple-400 transition shrink-0 mt-1" />

//                   </div>

//                   {/* DESCRIPTION */}
//                   <p className="text-sm text-slate-400 leading-relaxed mb-5">
//                     {project.desc}
//                   </p>

//                   {/* TECH */}
//                   <div className="flex flex-wrap gap-2">

//                     {project.tech.map((tech, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 text-xs rounded-full border border-white/10 text-slate-300"
//                       >
//                         {tech}
//                       </span>
//                     ))}

//                   </div>

//                 </div>

//               </motion.a>
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }





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
