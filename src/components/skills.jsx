import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Projects from "./Projects";
import Interests from "./interesteds";
import Img from "../assets/img.jpg";

const TimelineBlock = ({ title, desc, isRight }) => (
  <div className={`relative flex items-center mb-10 ${isRight ? 'flex-row-reverse text-right' : 'text-left'}`} data-aos="fade-up">
    <div className="flex-1 border-l-2 border-gray-600 h-full ml-6 relative">
      <div className="absolute w-4 h-4 bg-violet-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
    </div>
    <div className="ml-8 p-6 bg-gray-900/80 border border-gray-700 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ScrollButton = ({ onClick }) => (
  <button
    aria-label="Scroll down to the next section"
    className="mt-10 px-8 py-4 flex items-center justify-center text-white rounded-full text-lg font-semibold bg-black border hover:bg-violet-700 transition-all shadow-lg transform hover:scale-105"
    onClick={onClick}
  >
    <span className="mr-2">Next Section</span>
    <ChevronDown className="animate-bounce" />
  </button>
);

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const nextSectionRef3 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const handleScroll = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experienceSection"
      className={`relative min-h-screen flex flex-col justify-center items-center text-center transition-all duration-1000 overflow-hidden bg-black ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img src={Img} alt="Background image of a developer workspace" className="w-full h-full object-cover brightness-75" />
      </div>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      <div className="relative flex flex-col justify-center items-center min-h-screen z-10 text-center px-4 sm:px-6 max-w-6xl">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-wider text-white drop-shadow-lg">
          Minha Trajetória
        </h1>
        <p className="text-lg sm:text-2xl text-violet-400 mt-2 mb-10">
          Uma jornada de descobertas, desafios e conquistas no mundo da tecnologia.
        </p>

        <div className="flex flex-col md:flex-row justify-center w-full mt-4 text-left text-white gap-4 sm:gap-6">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-4">Desde os 10 anos, buscando diferenciar-me, encontrei na programação uma paixão.</h3>
            <p className="text-lg leading-relaxed mb-4 sm:text-justify tracking-tight">
              Quando comecei a aprender programação de forma autodidata, aos 10 anos, sabia que isso poderia me levar a grandes lugares. Mesmo com as dificuldades de acessar conteúdos pagos, minha motivação só aumentou. Aos 14 anos, conheci o IFRJ de Eng. Paulo de Frontin, voltado para Tecnologia para Internet, e assim uma nova porta se abriu. Lá, mergulhei em diversas atividades acadêmicas, como palestras, projetos de iniciação científica, publicação de artigos, e fui monitor de aulas de informática para comunidades carentes e idosos.
            </p>
          </div>
          <div className="hidden md:block p-1 h-96 bg-violet-400 rounded-full"></div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-4">Since I was 10 years old, looking to stand out, I found a passion for programming.</h3>
            <p className="text-lg leading-relaxed mb-4 sm:text-justify tracking-tight">
              When I started learning programming self-taught at the age of 10, I knew it could take me to great places. Even with the difficulties of accessing paid content, my motivation only grew. At 14, I joined the IFRJ in Eng. Paulo de Frontin, focusing on Internet Technology, and a new door opened. There, I immersed myself in several academic activities, such as lectures, scientific initiation projects, article publication, and I became a monitor for computer classes for underprivileged communities and elderly people.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <ScrollButton onClick={() => handleScroll(nextSectionRef3)} />
        </div>
      </div>

      <div className="w-full" ref={nextSectionRef3}>
        <Projects />
        <Interests />
      </div>
    </section>
  );
}