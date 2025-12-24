
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )

      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", { theme: "dark" });
        },
        () => {
          toast.error("Failed to send message!", { theme: "dark" });
        }
      );
  };

  return (
    <section id="contact" className="mt-10 sm:px-2 lg:px-12 mb-10">
      <Toaster />

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold">Contact Me</h3>
        <div className="w-20 sm:w-24 h-1 bg-purple-600 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left Info */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Let’s Connect
          </h4>

          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            I’m open to frontend developer opportunities, internships, and collaborations. Feel free to reach out anytime.
          </p>

          <div className="mt-4 space-y-3 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>shrutibachale7@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <span>+91 96992 14962</span>
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Bhandara, India</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://github.com/shrutibachale"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700
                         hover:border-purple-500 hover:text-purple-400 transition text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shruti-bachale"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-700
                         hover:border-blue-500 hover:text-blue-400 transition text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-5 sm:p-6 rounded-2xl border border-purple-800 shadow-lg hover:shadow-purple-500 bg-slate-900/40">
          <p className="text-sm sm:text-base text-slate-400 mb-4">Or send me a direct message</p>

          <form ref={form} onSubmit={sendEmail} className="grid gap-3">
            <input
              name="user_name"
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded-md bg-slate-900 border border-slate-800
                         focus:border-purple-500 outline-none text-sm sm:text-base"
            />

            <input
              name="user_email"
              type="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-md bg-slate-900 border border-slate-800
                         focus:border-purple-500 outline-none text-sm sm:text-base"
            />

            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="p-3 rounded-md bg-slate-900 border border-slate-800
                         focus:border-purple-500 outline-none text-sm sm:text-base"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="p-3 rounded-md bg-slate-900 border border-slate-800
                         focus:border-purple-500 outline-none text-sm sm:text-base resize-none"
            />

            <div className="mt-2 py-2 rounded-md font-semibold
                            bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition hover:animate-pulse text-center">
              <button type="submit" className="w-full text-sm sm:text-base">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs sm:text-sm text-slate-500 text-center">
        Designed & built by <span className="text-slate-300">Shruti Bachale</span> • Frontend Developer
      </p>
    </section>
  );
};

export default ContactMe;
