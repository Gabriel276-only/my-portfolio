import React, { useEffect, useRef, useState } from "react"; // React is used in JSX
import AOS from 'aos';
import 'aos/dist/aos.css';
import TechIcons from "./Icons"; // Used in the JSX
import Elipse from "../assets/Ellipse 1.png"; // Used in the JSX
import eu from "../assets/Union.png"; // Used in the JSX
import Translations from "../translations.json";
import Img from "../assets/img.jpg";


import Projects from "./Projects"; // Used in the JSX
import Interests from "./interesteds"; // Used in the JSX
import { ChevronDown } from "lucide-react";




const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const nextSectionRef = useRef(null); // Used for scrolling
  const nextSectionRef2 = useRef(null); // Used for scrolling



  const [language, setLanguage] = useState("en"); // Used for language selection
  const t = Translations[language]; // Used for translations

  const handleScroll = (sectionRef) => { // Used for smooth scrolling
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


  const [isVisible, setIsVisible] = useState(false); // Used for visibility detection
  const sectionRef = useRef(null);
  const nextSectionRef3 = useRef(null); // Used for scrolling

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
}, []);

return (
    <>
     <section className="min-h-screen flex flex-col md:grid md:grid-cols-2 items-center  bg-gradient-to-tr from-black to-purple-900 p-8 relative overflow-hidden">
        {/* Botões de idioma */}
        <div className="absolute top-0 right-0 m-4 md:m-8 lg:m-16 z-10" data-aos="fade-down">
          <button
            className={`p-3 rounded-lg ${language === "pt" ? "bg-violet-600  text-white" : "border-1 text-white hover:bg-black"}`}
            onClick={() => setLanguage("pt")}
          >
            {t.buttons.portuguese}
          </button>
          <span className="text-purple-400"> | </span>
          <button
            className={`p-3 rounded-lg ${language === "en" ? "bg-violet-600  text-white" : "border-1 text-white hover:bg-black "}`}
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
      <h1 className="text-5xl  md:text-7xl lg:text-9xl font-bold text-violet-300 mb-6 tracking-tight" data-aos="fade-right">
      {t.headings.portfolio_intro}
      </h1>
          <span
          className="text-lg md:text-2xl lg:text-3xl text-fuchsia-400 font-extrabold block typing-animation "
          data-aos="fade-left"
        >
          {t.headings.about_me}

        </span>
      <div data-aos="zoom-in">
        <h1 className="text-2xl md:text-6xl lg:text-4xl font-bold text-violet-300 mb-2 mt-2 px-4">
         {t.headings.hello} <span className="text-fuchsia-400">Gabriel Borges</span>
        </h1>
        <p className="text-sm max-w-sm md:text-base lg:text-xl text-violet-300 leading-relaxed lg:max-w-3xl mb-2 md:mb-4 lg:mb-6">
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
        className="w-32 h-32 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full transition-transform duration-500 hover:scale-105 bg-fuchsia-400"
      />
    </div>
  </section>


        {/* Seção de Experiência e Habilidades */}
        <section
  ref={nextSectionRef}
  className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black  to-purple-900 text-white px-8 py-16 relative overflow-hidden"
>
  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400" data-aos="fade-down">
    {t.headings.experience_skills}
  </h2>

  {/* Cards de Habilidades */}
  <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl">
  {Object.entries(t.content.skills).map(([key, skill], index) => (
    <div
      key={key}
      className="group relative p-6 bg-gradient-to-br from-purple-900 to-fuchsia-800/20 backdrop-blur-lg rounded-xl border-b-4 border-l-2 border-fuchsia-500/70 duration-500 ease-out shadow-lg hover:shadow-fuchsia-500/50 hover:border-fuchsia-300 transform hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Efeito sutil de brilho ao redor no hover */}
      <div className="absolute inset-0 bg-fuchsia-500 opacity-0 group-hover:opacity-20 blur-3xl transition-all duration-700"></div>
      
      <h3 className="text-2xl font-bold text-fuchsia-300 drop-shadow-md mb-4 transition-all duration-500 ease-out group-hover:text-white">
        {skill.title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed transition-all duration-500 ease-out group-hover:text-gray-100">
        {skill.description}
      </p>
    </div>
  ))}
</div>

        {/* Componente de Ícones */}
        <div className="flex flex-col justify-center items-center m-10" data-aos="fade-up">
          <TechIcons />
          </div>
        {/* Botão de Scroll */}
        <button
    className="relative mt-10 flex items-center justify-center w-12 h-12 border border-black rounded-full transition-all duration-300 bg-black/60 hover:bg-violet-700"
    onClick={() => handleScroll(nextSectionRef2)}
  >
    <span className="text-purple-200 text-2xl animate-bounce">↓</span>
  </button>
</section>
   
<section 
  ref={nextSectionRef2}
  className="relative min-h-screen bg-gray-950 overflow-hidden"
>
  {/* Background com overlay mais sutil */}
  <div className="absolute inset-0">
    <img
      src={Img}
      alt="Developer workspace"
      className="w-full h-full object-cover object-center opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-gray-950/90 to-white/10" />
  </div>

  {/* Conteúdo principal */}
  <div 
    ref={sectionRef}
    className={`relative min-h-screen flex flex-col justify-center items-center px-6 py-20 transition-opacity duration-700 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
  >
    <div className="max-w-4xl mx-auto text-center">
      {/* Título com efeito sutil */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          {t.journey.title}
        </span>
      </h1>
      
      {/* Subtítulo */}
      <p className="text-lg md:text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
        {t.journey.description}
      </p>

      {/* Conteúdo do texto */}
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 text-left">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          {t.journey.paragraph}
        </h3>
        <p className="text-gray-300 leading-relaxed md:text-lg">
          {t.journey.content_journey}
        </p>
      </div>

      {/* Botão com transição suave */}
      <div className="mt-12">
        <button
          onClick={() => handleScroll(nextSectionRef3)}
          className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-full bg-black border border-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300"
        >
          <span className="text-white font-medium mr-2">
            {t.journey.next}
          </span>
          <ChevronDown className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </div>

  {/* Seções seguintes */}
  <div className="w-full" ref={nextSectionRef3}>
    <Projects />
    <Interests />
  </div>
</section>

    </>
  );
};

export default AboutMe