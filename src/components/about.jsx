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
            className={`p-3 rounded-lg ${language === "pt" ? "bg-fuchsia-400 text-white" : "bg-fuchsia-300 text-purple-950"}`}
            onClick={() => setLanguage("pt")}
          >
            {t.buttons.portuguese}
          </button>
          <span className="text-purple-400"> | </span>
          <button
            className={`p-3 rounded-lg ${language === "en" ? "bg-fuchsia-400 text-white" : "bg-fuchsia-300 text-purple-950"}`}
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
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-gray-300 mb-4" data-aos="fade-right">
      {t.headings.portfolio_intro}
      </h1>
      <span className="text-2xl md:text-3xl lg:text-4xl text-purple-400 font-extrabold block" data-aos="fade-left">
        {t.headings.about_me} 
      </span>
      <div data-aos="zoom-in">
        <h1 className="text-2xl md:text-6xl lg:text-4xl font-bold text-gray-300 mb-2 mt-4 px-4">
         {t.headings.hello} <span className="text-purple-400">Gabriel Borges</span>
        </h1>
        <p className="text-sm max-w-sm md:text-base lg:text-xl text-gray-400 leading-relaxed lg:max-w-3xl mb-2 md:mb-4 lg:mb-6">
        {t.content.introduction}
        </p>
      </div>
      {/* Botão Saiba Mais */}
    <button
      className=" px-6 py-3 border-2 text-white rounded-full text-lg font-semibold hover:bg-violet-600 transition-all"
      onClick={() => handleScroll(nextSectionRef)}
      data-aos="fade-up"
    >
      {t.buttons.learn_more}
    </button>
  </div>

  {/* Imagem "eu" destacada à direita */}
  <div className=" m-10 md:order-2 md:absolute right-5 bottom-2 md:right-16 md:bottom-5 rounded-full bg-purple-500 p-4 shadow-[0px_0px_50px_15px_rgba(128,0,128,0.6)] animate-glow" data-aos="zoom-in">
    <img
      src={eu}
      alt="Minha foto"
      className="  w-32 h-32 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full transition-transform duration-500 hover:scale-105"
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
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {Object.entries(t.content.skills).map(([key, skill], index) => (
            <div
              key={key}
              className="p-6 bg-purple-900 rounded-lg border-2 border-purple-500 hover:border-purple-400 transition-all hover:shadow-[0_0_20px_5px_rgba(128,0,128,0.6)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">{skill.title}</h3>
              <p className="text-gray-300">{skill.description}</p>
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