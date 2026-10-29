# Design: Portfólio organizado por soluções

## Intenção

Reorganizar o portfólio para que pessoas de diferentes tipos de negócio entendam o que Gabriel pode construir e encontrem exemplos relevantes. A página deve apresentar projetos como evidências concretas de habilidades, além de facilitar o contato. O portfólio continuará sendo um único site em React/Vite, em português e inglês.

## Objetivos

- Organizar projetos por tipo de solução e capacidade demonstrada, sem criar uma seção separada para cada indústria; destacar a loja online e a API de livraria.
- Ajudar clínicas, negócios locais, lojas e startups a reconhecerem aplicações possíveis para suas próprias necessidades.
- Dar contexto a cada projeto: objetivo ou contexto conhecido, o que foi desenvolvido, habilidades demonstradas, tecnologias confirmadas e links disponíveis.
- Diferenciar trabalho para cliente, projeto pessoal e estudo de interface somente quando a autoria/status estiver confirmado; usar descrição neutra enquanto isso.
- Remover o Spotify Clone da lista de projetos.
- Corrigir problemas já identificados: CTA de contato sem ação, link de e-mail com `href="#"`, tradução incompleta, acessibilidade de controles, interação dependente de hover, idioma do documento, favicon, README e código/configuração residual.

## Fora do escopo

- Inventar clientes, resultados, métricas, requisitos, funcionalidades ou tecnologias.
- Apresentar o estudo de interface da Nike como trabalho encomendado ou endossado pela marca.
- Criar casos fictícios para segmentos sem projeto demonstrável.
- Refazer os projetos referenciados ou publicar o site.

## Estado atual e limites de evidência

O site tem uma apresentação, habilidades, trajetória, lista de seis projetos e contato. O Spotify Clone foi removido da lista a pedido do usuário. O projeto ConsultAR é descrito como página informativa para clínica; functions-and-derived como visualizador de funções e derivadas; Forms-React como sistema de login, verificação e hospedagem de quartos. Nike permanece como estudo de interface. A API de livraria foi confirmada publicamente como API REST para cadastro, consulta, atualização e remoção de livros, em Flask, SQLAlchemy e MySQL. TaskFlow foi confirmado pelo README como aplicação de gerenciamento de rotinas, tarefas e usuários, com React, Node.js/Express e MySQL; ambos já foram adicionados ao portfólio. A URL da loja online retorna página 404 e o repositório não aparece na lista pública atual do perfil, então seu link ainda precisa ser corrigido antes de adicioná-la. O link Nike fornecido pelo usuário coincide com o atual, mas também retorna 404 para visitantes não autenticados.

Os repositórios externos não ficaram acessíveis pela conexão GitHub disponível nesta sessão. Portanto, funcionalidades, papel do autor, stack de cada projeto, existência de demonstração ao vivo e resultados precisam ser confirmados antes de entrarem na versão final. Os títulos e descrições atuais são pistas, não confirmação completa.

## Abordagens consideradas

1. **Organizar por tipo de solução — escolhida.** Criar categorias como sites institucionais, sistemas e experiências interativas, usando projetos existentes como evidência. Atende diferentes tipos de cliente e mantém a navegação ancorada nas capacidades demonstráveis.
2. **Criar seções por segmento de cliente.** Ter páginas para clínicas, lojas, startups e negócios locais. Isso personaliza a mensagem, mas os projetos atuais não comprovam exemplos suficientes para cada segmento e repetiria conteúdo.
3. **Manter a lista de projetos e acrescentar serviços genéricos.** Exige menos mudança, mas não explica como cada trabalho se relaciona com o que um cliente procura.

## Experiência proposta

- **Direção visual:** unificar o fundo em grafite, usar branco/neutros para leitura e violetas como acento. Reduzir efeitos decorativos que competem com o conteúdo.
- **Abertura:** explicar em linguagem simples que Gabriel cria sites e sistemas web para negócios; oferecer ações visíveis para explorar projetos e iniciar contato.
- **Soluções:** apresentar categorias por capacidade, sem afirmar cases por setor que ainda não existem. A proposta inicial é “Sites para apresentar negócios” (ConsultAR), “Sistemas e fluxos interativos” (Forms-React, após confirmação), “Ferramentas web interativas” (functions-and-derived, após confirmação), “Comércio digital” (loja online, após confirmação do repositório) e “Backend e APIs” (API de Livraria).
- **Projetos:** apresentar cartões em grade responsiva, com prévias sempre visíveis, categoria, resumo curto e tecnologias confirmadas. Projetos sem captura recebem uma ilustração CSS claramente abstrata baseada em informações confirmadas, sem parecer captura de tela. Ao expandir ou abrir detalhes, exibir contexto, escopo, contribuição, funcionalidades, tecnologias e demonstração somente quando confirmados. Se esses dados não forem confirmados, omitir o campo em vez de preencher por suposição.
- **Estudo de interface:** Nike aparece sob identificação explícita de estudo/recriação, separado de projetos apresentados como soluções de negócio.
- **Contato:** CTA funcional com `mailto:` e links sociais com nomes acessíveis.
- **Idiomas e navegação:** manter português e inglês em todas as seções traduzidas e atualizar `document.documentElement.lang` com o idioma ativo.

## Requisitos de conteúdo e credibilidade

- Usar linguagem voltada a necessidades: apresentar negócio, organizar uma jornada ou permitir interação com dados, conforme cada projeto comprovar.
- Informar o status/autoria de cada trabalho com precisão quando confirmado; caso contrário, usar descrição neutra sem sugerir experiência comercial.
- Não declarar resultados de negócio sem métrica ou relato comprovável.
- Manter links corretos para repositório e demonstração; esconder ações sem destino válido.
- Apresentar lojas/e-commerce e soluções para startups como possíveis tipos de trabalho apenas se a capacidade estiver demonstrada; não associá-las a cases inexistentes.

## Acessibilidade e comportamento responsivo

- Dar nome acessível a ícones e botões apenas com ícone, preservar foco visível e permitir navegação por teclado.
- Fazer imagens/descrições relevantes permanecerem disponíveis em toque e teclado; não depender exclusivamente de hover.
- Respeitar `prefers-reduced-motion`; limitar animações decorativas e remover o efeito de cursor se não agregar à navegação.
- Rever contraste de texto, alvos de toque e possíveis transbordamentos em celular.
- Usar uma estrutura semântica simples, hierarquia de títulos coerente e texto alternativo adequado.

## Manutenção técnica

- Corrigir caminho e tipo MIME do favicon.
- Atualizar o README para Vite, estrutura atual e scripts existentes.
- Remover dependências comprovadamente sem uso e eliminar inicializações duplicadas do AOS e estilos residuais, após confirmar que não são necessários.
- Preservar a stack existente (React/Vite/Tailwind) salvo necessidade técnica demonstrada.

## Restrições e chamadas do implementador

- Não há evidência suficiente para especificar stack, demos ao vivo ou resultados dos repositórios; o implementador deve deixar esses campos ausentes até confirmação.
- O design visual atual pode ser refinado, preservando a paleta roxa/escura e o estilo gráfico quando isso não prejudicar contraste ou leitura.
- Cabe ao implementador escolher o formato mais simples de detalhes (cards expandidos ou seção de cases), desde que preserve navegação acessível, responsividade e o contexto descrito acima.

## Critérios de aceitação

- Visitantes identificam rapidamente as categorias de solução e conseguem relacioná-las a exemplos reais.
- A autoria/status de cada projeto é descrita somente quando confirmada; os demais usam descrição neutra, sem alegações não verificadas.
- Todos os links e CTAs exibidos têm destinos funcionais e corretos.
- A experiência em português e inglês é consistente, com idioma do documento sincronizado.
- Controles têm nomes acessíveis; conteúdo importante não depende de hover; movimento reduzido é respeitado.
- README e metadados básicos correspondem ao projeto Vite atual.
- As recomendações anteriores de lint/build podem ser verificadas após a implementação, sem introduzir testes novos fora de escopo.
