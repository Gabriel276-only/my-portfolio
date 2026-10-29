import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse3 from "../assets/Ellipse 3.png";
import { ArrowUpRight, Code2 } from "lucide-react";

import Projeto1 from "../assets/Projects/projeto-1.png";
import Projeto2 from "../assets/Projects/projeto-2.png";
import Projeto3 from "../assets/Projects/projeto-3.png";
import Projeto4 from "../assets/Projects/projeto-4.png";

const projects = [
  {
    id: "taskflow",
    title: "TaskFlow — Gestão de rotinas e tarefas",
    category: "Sistemas web",
    description:
      "Aplicação para organizar rotinas e tarefas, com cadastro de usuários e atualização de status.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    visualTitle: "Rotinas · tarefas · status",
    visualItems: ["Minhas rotinas", "Tarefas", "Concluídas"],
    link: "https://github.com/Gabriel276-only/taskflow",
  },
  {
    id: "api-livraria",
    title: "API de Livraria",
    category: "Backend e APIs",
    description:
      "API REST para gerenciar livros, com operações de cadastro, consulta, atualização e remoção.",
    technologies: ["Python", "Flask", "SQLAlchemy", "MySQL"],
    visualTitle: "API REST · livros",
    visualItems: ["GET /books", "POST /books", "PATCH · DELETE"],
    link: "https://github.com/Gabriel276-only/api-livraria",
  },
  {
    id: 1,
    title: "ConsultAR - Página Informativa da Clínica de Psicologia, Saúde e Bem-Estar",
    category: "Site institucional",
    link: "https://github.com/Gabriel276-only/consultar-new",
    image: Projeto1,
  },
  {
    id: 2,
    title: "functions-and-derivatives - Visualizador de Funções e Derivadas",
    category: "Ferramenta interativa",
    link: "https://github.com/Gabriel276-only/functions-and-derived",
    image: Projeto2,
  },
  {
    id: 3,
    title: "Forms-React - Sistema de Login, Verificação e Hospedagem de Quartos",
    category: "Sistema web",
    link: "https://github.com/Gabriel276-only/forms-react",
    image: Projeto3,
  },
  {
    id: 4,
    title: "NIKE-CLONE - um exemplo de clone da página web da Nike",
    category: "Estudo de interface",
    link: "https://github.com/Gabriel276-only/NIKE-CLONE",
    image: Projeto4,
  },
];

const sectionCopy = {
  en: {
    eyebrow: "Selected work",
    title: "Projects that show what I can build",
    description: "Websites, systems and web tools shaped around real needs.",
  },
  pt: {
    eyebrow: "Trabalhos selecionados",
    title: "Projetos que mostram o que posso construir",
    description: "Sites, sistemas e ferramentas web pensados para necessidades reais.",
  },
};

const Projects = ({ language = "en" }) => {
  const copy = sectionCopy[language] || sectionCopy.en;
  return (
    <section id="projects" className="relative min-h-screen w-full overflow-hidden bg-neutral-950 px-6 py-24 text-white md:px-10">
      {/* Elementos decorativos nos cantos */}
      <img
        src={Ellipse2}
        alt="Decoração"
        className="absolute m-2 top-0 left-0 w-40 h-40 opacity-40 md:w-80 md:h-80 z-10"
      />
      <img
        src={Ellipse3}
        alt="Decoração"
        className="absolute bottom-0 right-0 w-48 h-48 opacity-80 md:w-80 md:h-80"
      />

      <div className="relative z-10 mx-auto mb-12 max-w-6xl md:mb-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">{copy.eyebrow}</p>
        <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">{copy.title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
          {copy.description}
        </p>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-7">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition-colors hover:border-violet-300/50 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 motion-reduce:transition-none"
          >
            {project.image && (
              <img
                src={project.image}
                alt={`Prévia de ${project.title}`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            )}
            {!project.image && (
              <div aria-hidden="true" className="relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-violet-950 via-neutral-900 to-neutral-950 px-5 text-violet-200">
                <span className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />
                <Code2 className="relative h-9 w-9" />
                <span className="relative text-sm font-semibold uppercase tracking-[0.16em]">{project.visualTitle || "Web experience"}</span>
                {project.visualItems && (
                  <span className="relative flex flex-wrap justify-center gap-2">
                    {project.visualItems.map((item) => (
                      <span key={item} className="rounded-md border border-white/15 bg-black/20 px-2.5 py-1.5 text-xs text-neutral-200">{item}</span>
                    ))}
                  </span>
                )}
              </div>
            )}
            <span className="flex min-h-44 flex-col p-5 md:p-6">
              <span className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">{project.category}</span>
              <span className="flex items-start justify-between gap-4 text-lg font-semibold leading-snug text-white md:text-xl">
                {project.title}
                <ArrowUpRight aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-violet-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              {project.description && <span className="mt-3 text-sm leading-relaxed text-neutral-300">{project.description}</span>}
              {project.technologies && (
                <span className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-neutral-300">{technology}</span>
                  ))}
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
