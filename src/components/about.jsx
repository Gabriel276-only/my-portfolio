import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechIcons from "./Icons";
import Elipse from "../assets/Ellipse 1.png";
import eu from "../assets/Union.png";
import Projects from "./Projects";
import Translations from "../translations.json";
import Interests from "./interesteds";



const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const nextSectionRef = useRef(null);
  const nextSectionRef2 = useRef(null);

  const [language, setLanguage] = useState("en"); // Estado do idioma
  const t = Translations[language]; // Seleciona o idioma correto

  const handleScroll = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
     <section className="min-h-screen flex flex-col md:grid md:grid-cols-2 items-center bg-gradient-to-bl from-purple-900 to-black p-8 relative overflow-hidden">
        {/* Botões de idioma */}
        <div className="absolute top-0 right-0 m-4 md:m-8 lg:m-16 z-10" data-aos="fade-down">
          <button
            className={`p-3 rounded-lg ${language === "pt" ? "bg-violet-500 text-white" : "bg-fuchsia-300 text-purple-950"}`}
            onClick={() => setLanguage("pt")}
          >
            {t.buttons.portuguese}
          </button>
          <span className="text-purple-400"> | </span>
          <button
            className={`p-3 rounded-lg ${language === "en" ? "bg-violet-500 text-white" : "bg-fuchsia-300 text-purple-950"}`}
            onClick={() => setLanguage("en")}
          >
            {t.buttons.english}
          </button>
        </div>
  
  <img
    src={Elipse}
    alt="Elemento decorativo roxo"
    className="absolute top-0 right-0 w-90 h-90 md:w-[800px] md:h-[800px] animate-pulse"
    data-aos="fade-down"
  />

  
    <div className="max-w-6xl mt-60 px-4 text-left md:ml-8 lg:ml-16">
      <h1 className="text-5xl  md:text-7xl lg:text-9xl font-bold text-gray-400 mb-6" data-aos="fade-right">
      {t.headings.portfolio_intro}
      </h1>
          <span
          className="text-lg md:text-2xl lg:text-3xl text-fuchsia-400 font-extrabold block typing-animation "
          data-aos="fade-left"
        >
          {t.headings.about_me}

        </span>
      <div data-aos="zoom-in">
        <h1 className="text-2xl md:text-6xl lg:text-4xl font-bold text-gray-400 mb-2 mt-2 px-4">
         {t.headings.hello} <span className="text-fuchsia-400">Gabriel Borges</span>
        </h1>
        <p className="text-sm max-w-sm md:text-base lg:text-xl text-gray-400 leading-relaxed lg:max-w-3xl mb-2 md:mb-4 lg:mb-6">
        {t.content.introduction}
        </p>
      </div>
      {/* Botão Saiba Mais */}
    <button
      className=" px-6 py-3 border-2 m-5 items-center justify-center text-white rounded-full text-lg font-semibold hover:bg-violet-600 transition-all"
      onClick={() => handleScroll(nextSectionRef)}
      data-aos="fade-up"
    >
      {t.buttons.learn_more}
    </button>
  </div>

  {/* Imagem "eu" destacada à direita */}
    <div  className="relative m-2 md:absolute md:right-10 lg:right-20  md:bottom-10 flex justify-center md:justify-end md:w-1/2" data-aos="zoom-in-up">
          <img
        src={eu}
        alt="Minha foto"
        className="w-32 h-32 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full transition-transform duration-500 hover:scale-105 bg-purple-500"
      />
    </div>
  </section>


        {/* Seção de Experiência e Habilidades */}
      <section
        ref={nextSectionRef}
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-purple-900 to-black text-white p-8 relative overflow-hidden"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400" data-aos="fade-down">
        {t.headings.experience_skills}
        </h2>

        {/* Cards de Habilidades */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {Object.entries(t.content.skills).map(([key, skill], index) => (
              <div
                key={key}
                className="p-6 bg-purple-600/70 rounded-4xl border-b-2 border-l-4 border-purple-500 hover:border-purple-400 transition-all transform  hover:shadow-lg hover:shadow-purple-500/50 ease-in-out duration-600"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-semibold text-purple-300 mb-4 ">{skill.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>

        {/* Componente de Ícones */}
        <div className="flex flex-col justify-center items-center m-10" data-aos="fade-up">
          <TechIcons />
        </div>

        {/* Botão de Scroll */}
        <button
          className="m-10 rounded-full flex items-center justify-center bg-violet-400 w-10 h-10 bottom-20 shadow-[0_0_15px_5px_rgba(128,0,128,0.5)] transition-all duration-300 cursor-pointer hover:scale-110 animate-bounce"
          onClick={() => handleScroll(nextSectionRef2)}
        >
          ▼
        </button>
      </section>
      <div
  className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-purple-900 to-black relative overflow-hidden"
  ref={nextSectionRef2}
>
  {/* Elipse 3 no canto superior direito */}

  {/* Seção de Projetos */}
  <div className="w-full">
    
    <Projects />
  <Interests />
</div>
</div>

  
    </>
  );
};

export default AboutMe;