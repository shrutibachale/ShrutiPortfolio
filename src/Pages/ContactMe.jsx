
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useRef, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import emailjs from "@emailjs/browser";

// const ContactMe = () => {
//   const form = useRef();
//   const [isSent, setIsSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       process.env.REACT_APP_EMAILJS_SERVICE_ID,
//       process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//       form.current,
//       process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//     )

//       .then(
//         () => {
//           setIsSent(true);
//           form.current.reset();
//           toast.success("Message sent successfully!", { theme: "dark" });
//         },
//         () => {
//           toast.error("Failed to send message!", { theme: "dark" });
//         }
//       );
//   };

//   return (
//     <section id="contact" className="mt-10 sm:px-2 lg:px-12 mb-10">
//       <Toaster />

//       {/* Heading */}
//       <div className="text-center max-w-2xl mx-auto">
//         <h3 className="text-2xl sm:text-3xl font-semibold">Contact Me</h3>
//         <div className="w-20 sm:w-24 h-1 bg-purple-600 mx-auto mt-2 rounded-full"></div>
//       </div>

//       {/* Content */}
//       <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         {/* Left Info */}
//         <div className="flex flex-col gap-4">
//           <h4 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
//             Let’s Connect
//           </h4>

//           <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
//             I’m open to frontend developer opportunities, internships, and collaborations. Feel free to reach out anytime.
//           </p>

//           <div className="mt-4 space-y-3 text-sm sm:text-base">
//             <div className="flex items-center gap-3">
//               <FontAwesomeIcon icon={faEnvelope} />
//               <span>shrutibachale7@gmail.com</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <FontAwesomeIcon icon={faPhoneVolume} />
//               <span>+91 96992 14962</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <FontAwesomeIcon icon={faLocationDot} />
//               <span>Bhandara, India</span>
//             </div>
//           </div>

//           {/* Socials */}
//           <div className="flex flex-wrap gap-4 mt-4">
//             <a
//               href="https://github.com/shrutibachale"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700
//                          hover:border-purple-500 hover:text-purple-400 transition text-sm sm:text-base"
//             >
//               <FontAwesomeIcon icon={faGithub} /> GitHub
//             </a>

//             <a
//               href="https://www.linkedin.com/in/shruti-bachale"
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700
//                          hover:border-blue-500 hover:text-blue-400 transition text-sm sm:text-base"
//             >
//               <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
//             </a>
//           </div>
//         </div>

//         {/* Right Form */}
//         <div className="p-5 sm:p-6 rounded-2xl border border-purple-800 shadow-lg hover:shadow-purple-500 bg-slate-900/40">
//           <p className="text-sm sm:text-base text-slate-400 mb-4">Or send me a direct message</p>

//           <form ref={form} onSubmit={sendEmail} className="grid gap-3">
//             <input
//               name="user_name"
//               type="text"
//               placeholder="Your Name"
//               required
//               className="p-3 rounded-md bg-slate-900 border border-slate-800
//                          focus:border-purple-500 outline-none text-sm sm:text-base"
//             />

//             <input
//               name="user_email"
//               type="email"
//               placeholder="Your Email"
//               required
//               className="p-3 rounded-md bg-slate-900 border border-slate-800
//                          focus:border-purple-500 outline-none text-sm sm:text-base"
//             />

//             <input
//               name="subject"
//               type="text"
//               placeholder="Subject"
//               required
//               className="p-3 rounded-md bg-slate-900 border border-slate-800
//                          focus:border-purple-500 outline-none text-sm sm:text-base"
//             />

//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Your Message"
//               required
//               className="p-3 rounded-md bg-slate-900 border border-slate-800
//                          focus:border-purple-500 outline-none text-sm sm:text-base resize-none"
//             />

//             <div className="mt-2 py-2 rounded-md font-semibold
//                             bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition hover:animate-pulse text-center">
//               <button type="submit" className="w-full text-sm sm:text-base">
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Footer */}
//       <p className="mt-10 text-xs sm:text-sm text-slate-500 text-center">
//         Designed & built by <span className="text-slate-300">Shruti Bachale</span> • Frontend Developer
//       </p>
//     </section>
//   );
// };

// export default ContactMe;




import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

import {
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useRef, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";

const ContactMe = () => {
  const form = useRef();

  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          setIsSent(true);

          form.current.reset();

          toast.success("Message sent successfully!", {
            style: {
              background: "#111",
              color: "#fff",
              border: "1px solid #9333ea",
            },
          });
        },

        () => {
          toast.error("Failed to send message!", {
            style: {
              background: "#111",
              color: "#fff",
              border: "1px solid #ef4444",
            },
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#07060a] text-white px-6 md:px-16 relative overflow-hidden"
    >
      <Toaster position="top-right" />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 blur-3xl rounded-full top-0 right-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Contact{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Open to frontend developer opportunities, internships,
            freelance work, and collaborations.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-2xl font-semibold mb-5">
              Let’s Connect
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8">
              I’m passionate about building modern and scalable
              frontend applications. Feel free to contact me for
              opportunities, collaborations, or project discussions.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p className="text-sm md:text-base">
                    shrutibachale7@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p className="text-sm md:text-base">
                    +91 9699214962
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="text-sm md:text-base">
                    Nagpur, Maharashtra, India
                  </p>
                </div>

              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/shrutibachale"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.linkedin.com/in/shruti-bachale"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300"
          >

            <h3 className="text-xl font-semibold mb-6">
              Send Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid gap-4"
            >

              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-[#0d0b12] border border-white/10 focus:border-purple-500 outline-none transition text-sm"
              />

              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-[#0d0b12] border border-white/10 focus:border-purple-500 outline-none transition text-sm"
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-[#0d0b12] border border-white/10 focus:border-purple-500 outline-none transition text-sm"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl bg-[#0d0b12] border border-white/10 focus:border-purple-500 outline-none transition text-sm resize-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-2 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 hover:-translate-y-1 transition-all duration-300 text-sm font-medium"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

        {/* FOOTER */}
        {/* <div className=" pt-8 border-white/10 text-center">

          <p className="text-sm text-slate-500">
            Designed & built by{" "}
            <span className="text-slate-300">
              Shruti Bachale
            </span>{" "}
            • Frontend Developer
          </p>

        </div> */}

      </div>
    </section>
  );
};

export default ContactMe;


