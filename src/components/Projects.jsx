import React from "react";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import { motion } from 'framer-motion';

import Projeto1 from "../assets/Projects/projeto-1.png";
import Projeto2 from "../assets/Projects/projeto-2.png";
import Projeto3 from "../assets/Projects/projeto-3.png";

const projects = [
  { id: 1, title: "ConsultAR - Página Informativa da Clínica de Psicologia, Saúde e Bem-Estar", link: "https://github.com/Gabriel276-only/ConsultAR-React", image: Projeto1 },
  { id: 2, title: "functions-and-derived - Visualizador de Funções e Derivadas", link: "https://github.com/Gabriel276-only/functions-and-derived", image: Projeto2 },
  { id: 3, title: "Forms-React: Sistema de Login, Verificação e Hospedagem de Quartos", link: "https://github.com/seuusuario/project3", image: Projeto3 },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center bg-gradient-to-bl from-purple-900 to-black p-8 gap-6 overflow-hidden">
      {/* Elementos decorativos nos cantos */}
      <motion.img
        src={Ellipse2}
        alt="Decoração"
        className="absolute m-2 top-0 left-0 w-40 h-40 opacity-80 md:w-80 md:h-80 z-10"
        animate={{ y: [-10, 10, -10], width: [600, 300, 600], height:[600,300,600], rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 1 }}
      />
      <motion.img
        src={Ellipse3}
        alt="Decoração"
        className="absolute bottom-0 right-0 w-48 h-48 opacity-80 md:w-80 md:h-80"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Título fixo e visível */}
      <section className="relative flex flex-col items-center md:items-start w-full md:w-1/3">
        <div className="flex flex-1 items-center z-10 w-full justify-center md:justify-start mb-8 md:mb-0">
          <h2 className="relative mt-0 whitespace-nowrap text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-purple-400 md:right-80 md:-rotate-90 " data-aos="fade-right">
            MY PROJECTS
          </h2>
        </div>
      </section>

      {/* Lista de Projetos */}
      <div className="w-full md:w-2/3 max-w-6xl mt-10 md:mt-0">
        {projects.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-between py-5 border-b border-gray-800 hover:bg-gray-900/50 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-gray-300 font-medium text-xl relative z-10">{project.title}</span>
            
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-32 h-32 opacity-0 scale-10  transition-all duration-300 group-hover:opacity-100 group-hover:scale-300 group-hover:translate-x-[-100px] group-hover:rounded-2xl group-hover:rotate-5"
            />
          </motion.a>
        ))}
      </div>

      </section>
      
 

    
  );
};

export default Projects;
