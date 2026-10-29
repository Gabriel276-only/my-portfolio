# Portfólio por soluções — Plano de implementação

> **Para agentes implementadores:** usar `superpowers:subagent-driven-development` (recomendado) ou `superpowers:executing-plans`. Executar as etapas em ordem e revisar cada entrega antes de seguir.

**Goal:** Apresentar o portfólio como evidência clara de sites e sistemas que Gabriel pode construir, destacando os projetos mais relevantes e facilitando o contato.

**Architecture:** Preservar React/Vite/Tailwind e usar os textos já centralizados em `translations.json`. O idioma ativo deve alimentar as seções, os cases e o `lang` do documento. Os projetos serão organizados por solução e conterão apenas atributos confirmados; imagens e links opcionais não serão exibidos quando ausentes.

**Tech Stack:** React 19, Vite 6, Tailwind CSS 4, Framer Motion, Lucide/React Icons.

**Spec:** `docs/superpowers/specs/2026-10-29-portfolio-solution-showcase-design.md`

## Global Constraints

- Não inventar clientes, resultados, métricas, funcionalidades, contribuição ou tecnologias.
- Não apresentar o estudo de Nike como trabalho encomendado ou endossado pela marca.
- O Spotify Clone já foi removido da lista e sua miniatura deletada.
- TaskFlow e API de Livraria foram confirmados e adicionados como cases com descrições e stacks documentadas.
- A Loja Online só entra com URL pública confirmada; o endereço atual retorna 404.
- Preservar a stack atual e o estilo roxo/escuro sem prejudicar legibilidade.
- Não adicionar nem executar testes automatizados nesta solicitação; reportar verificações apenas se autorizadas posteriormente.

## Review Focus

- Projeto sem imagem não pode criar layout quebrado ou elemento `<img>` sem `src` — revisar card API.
- Idioma PT/EN deve permanecer consistente ao alternar — revisar todas as seções e o atributo `html[lang]`.
- Hover não pode esconder título, detalhes ou ações em touch/teclado — conferir estilos/foco.
- Botões de contato e links sociais precisam ter destino e nome acessível — conferir CTA e footer.
- Dados não confirmados da Loja Online e dos demais cases não podem aparecer como fatos — conferir dados e microcopy.

---

### Task 1: Organizar projetos por solução e enriquecer os cases confirmados

**Files:**
- Modify: `src/components/Projects.jsx`
- Modify: `src/translations.json`
- Modify: `docs/superpowers/specs/2026-10-29-portfolio-solution-showcase-design.md`

**Interfaces:**
- `Projects` recebe `language` e lê os rótulos e descrições localizados para o idioma ativo.
- Cada item pode ter `category`, `description`, `technologies`, `image`, `repositoryUrl` e `demoUrl`; campos opcionais ausentes não geram elementos visuais.

- [x] Apresentar a API de Livraria como “Backend e APIs”, com CRUD de livros, Flask, SQLAlchemy e MySQL, e link correto ao repositório.
- [x] Apresentar TaskFlow como sistema de gestão de rotinas/tarefas, com autenticação de usuários, atualizações de status e stack React, Node.js/Express e MySQL.
- [ ] Manter ConsultAR, Forms-React, functions-and-derived e Nike com os dados/links atuais, sem alegações adicionais; identificar Nike como estudo de interface.
- [ ] Exibir casos em cartões acessíveis e responsivos, com título e resumo sempre visíveis e imagem opcional.
- [ ] Incluir a Loja Online somente após receber e confirmar seu repositório correto e revisar suas funcionalidades/autoria; sem URL verificada, manter fora.

### Task 2: Mensagem, idiomas e jornada de contato

**Files:**
- Modify: `src/components/about.jsx`
- Modify: `src/components/Objectives.jsx`
- Modify: `src/components/footer.jsx`
- Modify: `src/translations.json`
- Modify: `index.html`

**Interfaces:**
- `Objectives` e `Projects` recebem `language` de `AboutMe`.
- `document.documentElement.lang` acompanha o estado `language` (`pt` ou `en`).

- [ ] Reescrever o texto de abertura para descrever entregas atuais: sites, lojas virtuais e sistemas web; retirar “future software engineer”.
- [ ] Traduzir título/descrição dos cases, seção de conexão, CTA e rodapé nas duas línguas.
- [x] Converter os CTAs de contato em links `mailto:gabrielmagaborges@gmai.com` e trocar `href="#"` do envelope por `mailto:`.
- [ ] Adicionar `aria-label` aos links sociais e nome acessível aos botões de seta; preservar foco visível.

### Task 3: Movimento, acessibilidade e responsividade

**Files:**
- Modify: `src/components/cursorInteractive.jsx`
- Modify: `src/components/Projects.jsx`
- Modify: `src/components/about.jsx`
- Modify: `src/App.css`

- [ ] Corrigir ou remover o efeito de cursor decorativo: centralizar corretamente, limitar a ponteiro fino e respeitar `prefers-reduced-motion`.
- [ ] Garantir detalhes e links utilizáveis por toque e teclado, com foco visível e conteúdo sem hover obrigatório.
- [ ] Revisar contraste, transbordamento horizontal, tamanhos de toque e semântica/níveis de títulos nos breakpoints móveis.
- [ ] Remover regra de scroll snap sem uso e inicializações AOS repetidas, se continuarem sem consumidor após reorganização.

### Task 4: Metadados e manutenção

**Files:**
- Modify: `index.html`
- Modify: `README.md`
- Modify: `package.json` e `package-lock.json` apenas se a auditoria de imports confirmar dependências sem uso

- [ ] Corrigir o caminho do favicon para o padrão Vite e declarar o MIME `image/png`.
- [ ] Atualizar README com a estrutura real, instruções `npm install`/`npm run dev`, scripts e descrição do portfólio.
- [ ] Remover dependências sem uso comprovado e atualizar lockfile sem mudanças de versão desnecessárias.
- [ ] Fazer revisão estática final do diff, links, dados e idiomas; não declarar build/lint como verificados sem autorização para executá-los.
