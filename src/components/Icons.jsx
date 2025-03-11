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
    <div className="grid grid-cols-5 justify-center p-2 gap-8 w-80 md:w-full m-2 h-full max-w-5xl bg-purple-900/50 rounded-lg shadow-lg">
      {/* React */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaReact className="w-8 h-8" />
        <span className="mt-2">React</span>
      </div>

      {/* JavaScript */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <SiJavascript className="w-8 h-8" />
        <span className="mt-2">JavaScript</span>
      </div>

      {/* HTML5 */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaHtml5 className="w-8 h-8" />
        <span className="mt-2">HTML5</span>
      </div>

      {/* CSS3 */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaCss3Alt className="w-8 h-8" />
        <span className="mt-2">CSS3</span>
      </div>

      {/* Node.js */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaNode className="w-8 h-8" />
        <span className="mt-2">Node.js</span>
      </div>

      {/* Python */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaPython className="w-8 h-8" />
        <span className="mt-2">Python</span>
      </div>

      {/* Git */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaGitAlt className="w-8 h-8" />
        <span className="mt-2">Git</span>
      </div>

      {/* Tailwind CSS */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <SiTailwindcss className="w-8 h-8" />
        <span className="mt-2">Tailwind CSS</span>
      </div>

      {/* Figma */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaFigma className="w-8 h-8" />
        <span className="mt-2">Figma</span>
      </div>

      {/* Java */}
      <div className="flex flex-col items-center text-white hover:text-purple-400 transition-all m-4">
        <FaJava className="w-8 h-8" />
        <span className="mt-2">Java</span>
      </div>
    </div>
  );
};

export default TechIcons;