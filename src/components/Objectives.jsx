import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Objectives = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const interests = [
    "UX/UI Design",
    "Frontend Development",
    "Webflow Development",
    "React Development",
    "Node.js Development",
    "Mobile Development",
    "Software Architecture",
    "Software Development",
    "Digital Consulting",
    "Startups",
    "New Businesses",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 text-white overflow-hidden bg-neutral-950">
      {/* TÍTULO */}
      <div className="w-full max-w-6xl mb-12 md:mb-20">
        <h2
          className="text-[14vw] md:text-[8rem] font-extrabold uppercase leading-none tracking-tight text-white/90"
          data-aos="fade-right"
        >
          Let's{" "}
          <span className="text-white/30 block md:inline">Connect</span>
        </h2>
      </div>

      {/* INTERESSES */}
      <div
        className="flex flex-wrap justify-center gap-4 max-w-5xl mb-16 md:mb-20"
        data-aos="fade-up"
      >
        {interests.map((interest, index) => (
          <span
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 80}
            className="group relative px-6 py-2 border border-white/30 rounded-full text-sm md:text-base backdrop-blur-md bg-white/5 overflow-hidden transition-all duration-300 ease-out hover:border-white/60 hover:scale-[1.06] hover:-translate-y-0.5"
          >
            <span className="relative z-10">{interest}</span>
            {/* hover overlay */}
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </span>
        ))}
      </div>

      {/* CTA */}
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-sm uppercase tracking-widest text-white/60">
          Are you planning a project? | Você está planejando um projeto?
        </p>
        <button className="mt-6 inline-flex items-center gap-3 px-10 py-3 border border-white/40 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
          Contact Me <span className="text-lg">▼</span>
        </button>
      </div>
    </section>
  );
};

export default Objectives;