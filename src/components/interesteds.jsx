import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Interests = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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

    
  ];

  return (
    <section className="relative  flex flex-col items-center justify-center text-white p-8  bg-neutral-950 overflow-hidden">
      <h2 className="text-xl md:text-2xl font-bold uppercase mb-6 text-center " data-aos="fade-down"> 
        I'm always interested about | Sempre interessado em
      </h2>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
        {interests.map((interest, index) => (
          <span key={index} className="px-4 py-2 border-2 border-white text-sm md:text-lg rounded-full bg-opacity-20 hover:bg-white hover:text-black transition"
            data-aos="zoom-in" data-aos-delay={index * 100}
          >
            {interest}
          </span>
        ))}
      </div>
      
      <div className="mt-12 text-center" data-aos="fade-up">
        <p className="text-lg">Are you minding a project? | Está pensando em um Projeto</p>
        <button className="mt-4 px-6 py-3 border-2 border-white text-lg rounded-full hover:bg-white hover:text-black transition">
          Contact Me 
           ▼ 
        </button>
      </div>
    </section>
  );
};

export default Interests;
