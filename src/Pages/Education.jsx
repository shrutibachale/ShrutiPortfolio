
import React from "react";

const Education = () => {
  const educations = [
    {
      title: "Full Stack Web Development",
      institute: "Coding Ninjas Bootcamp",
      period: "Oct 2023 – Jul 2025",
      description:
        "Completed an intensive bootcamp focusing on modern web technologies. Built real-world projects using React.js, Node.js, and MongoDB.",
      certifications: [
        {
          name: "Frontend Developer Certification",
          link: "https://certificate.codingninjas.com/view/b645e8dc7e0afc42",
        },
        {
          name: "Introduction to Java Certification",
          link: "https://certificate.codingninjas.com/view/d6077292198ca798",
        },
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "DSA",
      ],
    },
    {
      title: "B.Sc. (Chemistry, Zoology, Botany)",
      institute: "Rashtrasant Tukadoji Maharaj Nagpur University",
      period: "Aug 2019 – Jul 2022",
      description:
        "Studied core sciences with hands-on laboratory experiments. Developed analytical skills and a scientific approach to problem-solving.",
      Percentage: "70.66%",
      grade: "A",
    },
    {
      title: "HSC (Higher Secondary Certificate)",
      institute: "Lal Bahadur Shastri School, Bhandara",
      period: "Jul 2017 – Feb 2019",
      description:
        "Focused on Science stream subjects. Participated in science exhibitions and enhanced research and presentation skills.",
      Percentage: "52.15%",
    },
    {
      title: "SSC (Secondary School Certificate)",
      institute: "Nutan Kanya School, Bhandara",
      period: "Mar 2017",
      description:
        "Completed secondary education with a strong foundation in core subjects.",
      Percentage: "79%",
    },
  ];

  return (
    <section
      id="education"
      className="mt-10 sm:px-2 lg:px-12 mb-12"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold">
          Education
        </h3>
        <div className="w-20 sm:w-28 h-1 bg-purple-500 mx-auto mt-2 rounded-full"></div>
        <p className="mt-3 text-gray-400 text-sm sm:text-base">
          My journey of learning and growth through academics & professional courses
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl
                       border-2 border-gray-700 bg-gray-900/60
                       hover:border-purple-500 transition duration-300"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400">
              {edu.title}
            </h3>

            <p className="mt-1 text-sm sm:text-base font-medium text-gray-300">
              {edu.institute}
            </p>

            <p className="text-xs sm:text-sm text-gray-500">
              {edu.period}
            </p>

            {edu.Percentage && (
              <p className="mt-2 text-sm font-semibold text-gray-100">
                Percentage: {edu.Percentage}
              </p>
            )}

            {edu.grade && (
              <p className="mt-1 text-sm font-semibold text-green-400">
                Grade: {edu.grade}
              </p>
            )}

            {edu.description && (
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            )}

            {edu.skills && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-300">
                  Skills Learned:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs sm:text-sm rounded-full
                                 bg-purple-600/30 text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {edu.certifications && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-300">
                  Certifications:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.certifications.map((cert, idx) => (
                    <a
                      key={idx}
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-3 py-1 rounded-md
                                 bg-black/30 border border-pink-500/30
                                 hover:bg-pink-500/20 transition"
                    >
                      {cert.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
