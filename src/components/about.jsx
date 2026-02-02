import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TechIcons from "./Icons";
import Projects from "./Projects";

import Elipse from "../assets/Ellipse 1.png";
import eu from "../assets/Union.png";
import sculture from "../assets/sculture.png";

import Translations from "../translations.json";
import { ChevronDown } from "lucide-react";

const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

 
  const [language, setLanguage] = useState("en");
  const t = Translations[language];

  /* =========================
     REFS
  ========================== */
  const skillsRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "auto", block: "start" });
  };

 
  return (
    <section id="about-me" className=" text-white overflow-hidden">

      <section className="relative min-h-screen grid md:grid-cols-2 items-center bg-gradient-to-tr from-purple-700 to-purple-950 px-6 py-24">
        <div className="absolute top-6 right-6 z-20 flex gap-2">
          <button
            onClick={() => setLanguage("pt")}
            className={`px-4 py-2 rounded-md text-sm ${
              language === "pt"
                ? "bg-violet-600"
                : "border border-white/20 hover:bg-white/10"
            }`}
          >
            PT
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-4 py-2 rounded-md text-sm ${
              language === "en"
                ? "bg-violet-600"
                : "border border-white/20 hover:bg-white/10"
            }`}
          >
            EN
          </button>
        </div>

        <img
          src={Elipse}
          alt=""
          aria-hidden
          className="absolute -top-40 -right-40 w-[1000px] opacity-80"
        />

        {/* Text */}
        <div className="relative z-10 px-6 md:px-16" data-aos="fade-right">
          <h1 className="text-xl md:text-4xl font-extrabold text-violet-300 mb-2">
            {t.headings.portfolio_intro}
          </h1>

          <span className="block text-2xl text-fuchsia-400 font-bold mb-6">
            {t.headings.about_me}
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t.headings.hello}{" "}
            <span className="text-fuchsia-400">Gabriel Borges</span>
          </h2>

          <p className="max-w-xl text-lg text-violet-200 leading-relaxed mb-8">
            {t.content.introduction}
          </p>

          <button
            onClick={() => scrollTo(skillsRef)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full hover:bg-violet transition"
          >
            {t.buttons.learn_more}
          </button>
        </div>

        {/* Avatar */}
        <div
          className="relative flex justify-center md:justify-end pr-0 md:pr-16"
          data-aos="fade-left"
        >
          <img
            src={eu}
            alt="Foto de Gabriel Borges"
            className="w-56 h-56 md:w-[400px] md:h-[400px] rounded-full bg-fuchsia-400 shadow-2xl"
          />
        </div>
      </section>

      {/* ================= SKILLS ================= */}
     <section
  ref={skillsRef}
  className="relative min-h-screen px-6 py-36 overflow-hidden
             bg-gradient-to-br from-[#090012] via-[#12001f] to-black"
>
  {/* BACKGROUND GLOWS */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] 
                    bg-fuchsia-600/30 rounded-full blur-[220px]" />
    <div className="absolute bottom-0 right-0 w-[700px] h-[700px] 
                    bg-purple-700/30 rounded-full blur-[200px]" />
  </div>

  {/* TITLE */}
  <h2
    data-aos="fade-up"
    className="relative z-10 text-center text-6xl md:text-7xl font-extrabold 
               bg-clip-text text-transparent 
               bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 
               mb-24"
  >
    {t.headings.experience_skills}
  </h2>

  {/* GLASS CARDS */}
  <div className="relative z-10 grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
    {Object.entries(t.content.skills).map(([key, skill], index) => (
      <div
        key={key}
        data-aos="fade-up"
        data-aos-delay={index * 120}
        className="
          relative p-8 rounded-3xl
          bg-white/10 backdrop-blur-2xl
          border border-white/20
          shadow-[0_0_40px_rgba(168,85,247,0.25)]
          transition-all duration-500
          hover:bg-white/20 hover:scale-[1.04]
        "
      >
        {/* Glow interno */}
        <div className="absolute inset-0 rounded-3xl 
                        bg-gradient-to-br from-fuchsia-500/20 to-purple-700/20 
                        opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <h3 className="relative z-10 text-2xl font-bold text-fuchsia-300 mb-4">
          {skill.title}
        </h3>

        <p className="relative z-10 text-gray-200 leading-relaxed">
          {skill.description}
        </p>
      </div>
    ))}
  </div>

  {/* TECH ICONS GLASS */}
  <div
    data-aos="fade-up"
    className="relative z-10 mt-28 flex justify-center"
  >
    <div
      className="px-10 py-8 rounded-3xl
                 bg-white/10 backdrop-blur-2xl
                 border border-white/20
                 shadow-[0_0_40px_rgba(168,85,247,0.25)]"
    >
      <TechIcons />
    </div>
  </div>

  {/* SCULPTURE */}
  <img
    src={sculture}
    alt=""
    aria-hidden
    className="absolute right-0 top-1/2 -translate-y-1/2 
               max-w-[30%] opacity-20 mix-blend-lighten"
  />

  {/* NEXT BUTTON */}
  <div className="relative z-10 flex justify-center mt-28">
    <button
      onClick={() => scrollTo(journeyRef)}
      className="
        w-14 h-14 flex items-center justify-center
        rounded-full
        bg-white/10 backdrop-blur-xl
        border border-white/20
        text-white
        shadow-[0_0_30px_rgba(168,85,247,0.3)]
        hover:bg-white/20 hover:scale-110
        transition-all duration-300
      "
    >
      <ChevronDown />
    </button>
  </div>
</section>


      {/* ================= JOURNEY ================= */}
      <section
        ref={journeyRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#0d0016] via-[#1a001f] to-violet-200"
      >
        <div
          className="max-w-3xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            {t.journey.title}
          </h2>

          <p className="text-purple-300 mb-10">
            {t.journey.description}
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left">
            <h3 className="text-xl font-semibold text-white mb-4">
              {t.journey.paragraph}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t.journey.content_journey}
            </p>
          </div>

          <div className="mt-14">
            <button
              onClick={() => scrollTo(projectsRef)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 hover:bg-violet-600 transition"
            >
              {t.journey.next}
              <ChevronDown />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section ref={projectsRef}>
        <Projects />
      </section>

    </section>
  );
};

export default AboutMe;
