import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Elipse from "../assets/Ellipse 1.png";
import eu from "../assets/Union.png";
import Elipse2 from "../assets/Ellipse 2.png";
import Elipse3 from "../assets/Ellipse 3.png";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Referência para o próximo componente
  const nextSectionRef = useRef(null);

  // Função para rolar suavemente até o próximo componente
  const handleScroll = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Função para o efeito parallax
  const handleParallax = (e) => {
    const parallaxElipses = document.querySelectorAll('.parallax');
    parallaxElipses.forEach((elipse) => {
      const speed = elipse.getAttribute('data-speed');
      const offset = e.pageYOffset * speed;
      elipse.style.transform = `translateY(${offset}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <>
      {/* Seção About Me */}
      <section className="h-screen flex flex-col justify-center items-start bg-gradient-to-bl from-purple-900 to-black p-8 relative overflow-hidden">
        {/* Elipse 1 no canto superior direito */}
        <img
          src={Elipse}
          alt="Elemento decorativo roxo"
          className="absolute top-0 right-0 w-72 h-72 md:w-[450px] md:h-[450px] animate-pulse"
          data-aos="fade-down"
        />

        {/* Imagem "eu" destacada */}
        <div
          className="absolute right-5 bottom-2 md:right-16 md:bottom-5 rounded-full bg-purple-500 p-4 shadow-[0px_0px_50px_15px_rgba(128,0,128,0.6)] animate-glow"
          data-aos="zoom-in"
        >
          <img
            src={eu}
            alt="Minha foto"
            className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-full transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-4xl px-4 text-left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-300 mb-6" data-aos="fade-right">
            This is my <span className="text-purple-400">portfolio</span>
          </h1>
          <span className="text-2xl md:text-3xl lg:text-4xl text-purple-400 font-extrabold block" data-aos="fade-left">
            About Me
          </span>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed mt-4" data-aos="fade-up">
            I'm a developer with a passion for creating modern, functional, and visually appealing digital experiences.
            I enjoy working on interactive interfaces and continuously improving my skills in UI and UX design to
            enhance user engagement and accessibility.
          </p>

          {/* Botão Saiba Mais */}
          <button
            className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all"
            onClick={handleScroll}
            data-aos="fade-up"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Seção de Experiência e Habilidades */}
      <section
        ref={nextSectionRef}
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-purple-900 to-black text-white p-8 relative overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400" data-aos="fade-down">
          Experience & Skills
        </h2>

        {/* Cards de Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Card 1 - Web Design */}
          <div
            className="p-6 bg-purple-900 rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all hover:shadow-[0_0_20px_5px_rgba(128,0,128,0.6)]"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Web Design</h3>
            <p className="text-gray-300">
              Specializing in creating visually stunning and user-friendly websites. Proficient in CSS, JavaScript, Python, 
              and modern frameworks like React and Tailwind CSS.
            </p>
          </div>

          {/* Card 2 - UI/UX Design */}
          <div
            className="p-6 bg-purple-900 rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all hover:shadow-[0_0_20px_5px_rgba(128,0,128,0.6)]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">UI/UX Design</h3>
            <p className="text-gray-300">
              Passionate about designing intuitive and engaging user interfaces. Experienced in tools like Figma, Photoshop
              and user research methodologies.
            </p>
          </div>

          {/* Card 3 - Software Development */}
          <div
            className="p-6 bg-purple-900 rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all hover:shadow-[0_0_20px_5px_rgba(128,0,128,0.6)]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Software Development</h3>
            <p className="text-gray-300">
              Aiming to transition into software development, with a focus on building scalable and efficient applications.
              Familiar with Python, Java, and backend technologies.
            </p>
          </div>
        </div>

        {/* Botão de Voltar ao Topo */}
        <button
          className="mt-8 px-6 py-3 bg-purple-500 text-white rounded-lg text-lg font-semibold hover:bg-purple-600 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-aos="fade-up"
        >
          Back to Top
        </button>

        {/* Elipse no canto inferior esquerdo */}
        <img
          src={Elipse2}
          alt="Elemento decorativo roxo"
          className="parallax absolute bottom-0 left-0 w-72 h-72 md:w-[450px] md:h-[450px] animate-pulse z-0"
          data-aos="fade-down"
          data-speed="0.2"
        />

        {/* Elipse no canto inferior direito */}
        <img
          src={Elipse3}
          alt="Elemento decorativo roxo"
          className="parallax absolute bottom-0 right-0 w-72 h-72 md:w-[450px] md:h-[450px] animate-pulse z-0"
          data-aos="fade-down"
          data-speed="0.3"
        />
      </section>
    </>
  );
};

export default AboutMe;