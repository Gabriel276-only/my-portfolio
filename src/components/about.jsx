import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import TechIcons from "./Icons";
import Projects from "./Projects";

import Elipse from "../assets/Ellipse 1.png";
import eu from "../assets/Union.png";

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

      <section className="relative min-h-screen grid md:grid-cols-2 items-center bg-gray-300 px-6 py-24">
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
          className="absolute -top-40 -right-40 w-[40em] opacity-90"
        />
         <img
          src={Elipse}
          alt=""
          aria-hidden
          className="absolute -bottom-40 -right-10 w-[20em] opacity-90 rotate-90"
        />

           {/* Avatar */}
        <div
          className="relative z-10 flex items-center justify-center md:justify-end md:pr-16 order-1 md:order-2"
          data-aos="fade-left"
        >
          <div className="flex items-center justify-center bg-fuchsia-400 rounded-full shadow-2xl">
          <img
            src={eu}
            alt="Foto de Gabriel Borges"
            className="w-56 h-56 md:w-[400px] md:h-[400px] rounded-full object-cover border border-white/20 backdrop-blur-md transition-all duration-500 ease-out hover:scale-[1.05] hover:border-purple-400/40 hover:shadow-[0_0_80px_rgba(168,85,247,0.45)]"
          />
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10 px-6 md:px-16 order-2 md:order-1" data-aos="fade-right">
          <h1 className="text-xl md:text-6xl font-extrabold text-violet-400 mb-2 tracking-tighter leading-tight">
            {t.headings.portfolio_intro}
          </h1>

          <span className="block text-2xl text-fuchsia-500 font-bold mb-6 typing-animation">
            {t.headings.about_me}
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-violet-500">
            {t.headings.hello}{" "}
            <span className="text-fuchsia-500">Gabriel Borges</span>
          </h2>

          <p className="max-w-xl text-lg text-violet-500 leading-relaxed mb-8">
            {t.content.introduction}
          </p>

          <button
            onClick={() => scrollTo(skillsRef)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-violet-400 text-violet-500 rounded-full hover:bg-violet-400 hover:text-white transition"
          >
            {t.buttons.learn_more}
          </button>
        </div>

       
      </section>

      {/* ================= SKILLS ================= */}
   <section
  ref={skillsRef}
  className="relative min-h-screen px-6 py-36 bg-gray-300 flex flex-col items-center"
>
  {/* TITLE */}
  <h2
    data-aos="fade-up"
    className="text-center text-6xl md:text-7xl font-extrabold text-gray-900 mb-24"
  >
    {t.headings.experience_skills}
  </h2>

  {/* SKILL PANELS */}
  <div className="grid gap-10 md:grid-cols-3 max-w-7xl w-full">
    {Object.entries(t.content.skills).map(([key, skill], index) => (
      <div
        key={key}
        data-aos="fade-up"
        data-aos-delay={index * 120}
        className="
          group relative bg-white/40 rounded-2xl p-8
          border border-gray-200
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-xl
        "
      >
        {/* Accent bar */}
        <span
          className="
            absolute left-0 top-0 h-full w-1
            bg-gradient-to-b from-violet-600 to-fuchsia-500
            rounded-l-2xl
          "
        />

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {skill.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {skill.description}
        </p>
      </div>
    ))}
  </div>

  {/* TECH ICONS */}
  <div data-aos="fade-up" className="mt-24">
    <div className="bg-white/10 border border-gray-200/ rounded-2xl px-10 py-8 shadow-md">
      <TechIcons />
    </div>
  </div>

  {/* NEXT BUTTON */}
  <div className="mt-24">
    <button
      onClick={() => scrollTo(journeyRef)}
      className="
        w-14 h-14 flex items-center justify-center
        rounded-full bg-gray-900 text-white
        hover:scale-110 transition
      "
    >
      <ChevronDown />
    </button>
  </div>
</section>

      {/* ================= JOURNEY ================= */}
    <section ref={journeyRef}
  className="relative min-h-screen px-6 py-32 bg-neutral-950 text-white"
>
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <div className="mb-32 text-center" data-aos="fade-up">
      <span className="block text-sm tracking-widest text-violet-400 uppercase mb-4">
        {t.journey.label}
      </span>

      <h2 className="text-6xl md:text-8xl font-extrabold leading-tight">
        {t.journey.title}
      </h2>

      <p className="mt-6 text-xl text-neutral-400 max-w-2xl mx-auto">
        {t.journey.description}
      </p>
    </div>

    {/* TIMELINE */}
    <div className="relative max-w-4xl mx-auto pl-12">
      <span className="absolute left-3 top-0 h-full w-px bg-neutral-700" />

      {t.journey.steps.map((step, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 120}
          className="relative mb-24"
        >
          <span className="absolute -left-[20px] top-2 w-4 h-4 rounded-full bg-violet-500" />

          <h3 className="text-3xl font-bold mb-4">
            {step.title}
          </h3>

          <p className="text-neutral-300 leading-relaxed">
            {step.content}
          </p>
        </div>
      ))}
    </div>
  </div>



    {/* CTA */}
    <div className="mt-32 flex justify-center">
      <button
        onClick={() => scrollTo(projectsRef)}
        className="
          group inline-flex items-center gap-3 border-2 rounded-full px-8 py-2 border-white/30
          text-lg font-semibold
          text-white
          hover:text-violet-400
          transition
        "
      >
        {t.journey.next}
        <ChevronDown className="group-hover:translate-y-1 transition" />
      </button>
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
