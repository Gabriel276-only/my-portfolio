
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/Gabriel276-only" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white text-2xl transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/gabriel-borges-ab85b1337" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white text-2xl transition">
          <FaLinkedin />
        </a>
        <a 
  href="#" 
  onClick={() => window.location.href = "mailto:gabrielmagaborges@gmail.com"} 
  className="text-purple-400 hover:text-white text-2xl transition"
>
  <FaEnvelope />
</a>

<a href="https://www.instagram.com/dev_borgess/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white text-2xl transition">
          <FaInstagram />
        </a>

      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Gabriel Borges. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
