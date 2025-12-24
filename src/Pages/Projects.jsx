
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "BerryLookHub - E-commerce",
      img: "https://cdn.affiliates.one/production/admin_affiliates_com_tw/blog_image/2198/b928aa1429e8ffc9022a29160744aa720f563aa9cc8264eef785611aa49eb49d_BerryLook.jpg",
      desc:
        "Fully responsive e-commerce platform with product categories, search filters, real-time cart updates and payment integration.",
      tech: "React, Tailwind CSS, JavaScript, APIs",
      live: "https://berrylookhub.netlify.app",
      code: "https://github.com/shrutibachale/Berrylook-Website",
    },
    {
      title: "SkyForecastHub - Weather App",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTxVXaYKOg1ufDOa1rM3kJzMWUKckdI5S_g&s",
      desc:
        "Real-time weather dashboard using OpenWeatherMap API with AQI, sunrise/sunset, wind, humidity and rainfall forecast.",
      tech: "React, Tailwind CSS, OpenWeatherMap API",
      live: "https://skyforecasthub.netlify.app",
      code: "https://github.com/shrutibachale/weatherapp",
    },
    {
      title: "Currency Converter",
      img: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_640.jpg",
      desc:
        "Built a responsive currency converter using React and Tailwind CSS, Integrated real-time exchange rates via ExchangeRate API.",
      tech: "React.js, Tailwind, APIs",
      live: "https://currencyswapconvert.netlify.app/",
      code: "https://github.com/shrutibachale/CurrencyConverter",
    },
    {
      title: "Notes / To-Do App",
      img: "https://global.discourse-cdn.com/freecodecamp/original/3X/d/8/d8e7a038f09b12a5637ca8c217ea30132fa7d8b5.png",
      desc: "Simple notes & to-do app with persistence and nice UI interactions.",
      tech: "React, Tailwind, Local Storage",
      live: "https://shruustodoslists.netlify.app/",
      code: "https://github.com/shrutibachale/localtodocontext",
    },
  ];

  return (
    <section id="projects" className="mt-10 sm:px-2 lg:px-12 mb-12">
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold">Projects</h3>
        <div className="w-16 sm:w-24 h-1 bg-purple-600 mx-auto mt-2" />
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <article
            key={p.title}
            className="p-5 sm:p-6 rounded-2xl
              bg-gradient-to-b from-slate-900/30 to-transparent
              border-2 border-slate-800 group
              hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500
              transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-5">

              {/* Image & Text */}
              <div className="flex-1">
                <img
                  className="w-full sm:w-56 h-36 sm:h-32 object-cover rounded-lg mb-3"
                  src={p.img}
                  alt="project"
                />

                <h4 className="text-base sm:text-lg font-semibold">
                  {p.title}
                </h4>

                <p className="text-sm text-slate-400 mt-2">
                  {p.desc}
                </p>

                <p className="text-xs text-slate-500 mt-3">
                  {p.tech}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex sm:flex-col gap-3 sm:items-end justify-start sm:justify-center">
                {/* Live Button */}
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group relative inline-flex items-center justify-center
                    px-5 py-2 rounded-lg text-sm sm:text-lg font-bold text-white
                    bg-gradient-to-r from-pink-500 to-purple-600
                    shadow-lg shadow-pink-500/30
                    transition-all duration-300 ease-out
                    hover:scale-105 hover:shadow-pink-500/60
                    active:scale-95"
                >
                  Live
                  <span
                    className="
                      absolute inset-0 rounded-lg bg-white/20 opacity-0
                      group-hover:opacity-100 transition duration-300"
                  />
                </a>

                {/* Code Button */}
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center
                    px-4 py-1.5 rounded-lg text-sm sm:text-lg font-bold text-slate-300
                    border border-slate-600
                    backdrop-blur-md bg-white/5
                    transition-all duration-300
                    hover:text-white hover:border-pink-400
                    hover:bg-pink-400/10 hover:scale-105
                    active:scale-95"
                >
                  Code
                </a>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
