import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const TechIcons = () => {
  return (
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 justify-center p-2 gap-10 w-80 md:w-full md:p-6 bg-purple-900/50 rounded-lg shadow-lg border-2 border-purple-400 ">
      {[ 
        { icon: FaReact, name: "React" },
        { icon: SiJavascript, name: "JavaScript" },
        { icon: FaHtml5, name: "HTML5" },
        { icon: FaCss3Alt, name: "CSS3" },
        { icon: FaNode, name: "Node.js" },
        { icon: FaPython, name: "Python" },
        { icon: FaGitAlt, name: "Git" },
        { icon: SiTailwindcss, name: "TailwindCSS" },
        { icon: FaFigma, name: "Figma" },
        { icon: FaJava, name: "Java" },
      ].map(({ icon: Icon, name }, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-white hover:text-purple-400 transition-all pr-1 relative"
        >
          <Icon className="w-8 h-8" />
          <span className="mt-2 text-sm md:text-base">{name}</span>
          <div className="absolute inset-0 border-2 border-transparent rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
