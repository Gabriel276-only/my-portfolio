import React from "react";
import { useLanguage } from "./LanguageContext"; // Importando o hook para usar o contexto

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage(); // Pegando o estado da linguagem e a função para alterá-la

  const handleClick = () => {
    // Alterna entre inglês ('en') e português ('pt')
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <button onClick={handleClick}>
      {language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    </button>
  );
};

export default LanguageSwitcher;
