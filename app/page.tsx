const whatsappUrl =
  "https://wa.me/5531995007170?text=Ol%C3%A1%2C%20Daniel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20site.";

type Project = {
  number: string;
  title: string;
  category: string;
  url: string;
  preview: string;
  objective: string;
  sections: string;
  difference: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Marina Borges",
    category: "Psicologia · Site profissional",
    url: "https://marina-borges-psicologa.vercel.app/",
    preview: "/previews/marina-borges.png",
    objective:
      "Criar um primeiro encontro digital acolhedor para quem está buscando apoio psicológico.",
    sections: "Apresentação · Abordagem · Modalidades de atendimento · FAQ · CTA",
    difference:
      "Uma experiência leve e humana, com ritmo editorial e linguagem que transmite confiança sem perder delicadeza.",
  },
  {
    number: "02",
    title: "Daniel Tolentino",
    category: "Marca pessoal · Portfólio",
    url: "https://danieltolentino.net/",
    preview: "/previews/daniel-tolentino.png",
    objective:
      "Apresentar trajetória, interesses e personalidade em uma página pessoal direta e autoral.",
    sections: "Introdução · Sobre · Tecnologia · Links pessoais · Contato",
    difference:
      "Uma linguagem minimalista que deixa a personalidade aparecer, com foco no conteúdo e na clareza da navegação.",
  },
  {
    number: "03",
    title: "MyHub",
    category: "Produtividade · Hub pessoal",
    url: "https://hub.danieltolentino.net/",
    preview: "/previews/myhub.png",
    objective:
      "Reunir ferramentas, informações e atalhos importantes em um único ponto de acesso.",
    sections: "Clima · Atalhos · Ferramentas · Links úteis · Utilidades rápidas",
    difference:
      "Uma interface funcional e compacta, pensada para transformar muitos destinos em uma experiência simples.",
  },
  {
    number: "04",
    title: "Lovet",
    category: "Veterinária · Landing page",
    url: "https://codar-me-maratona-starter-veterinaria.vercel.app/",
    preview: "/previews/lovet-veterinaria.png",
    objective:
      "Transmitir cuidado e segurança para tutores que procuram um lugar confiável para seus pets.",
    sections: "Hero · Serviços · Localização · CTA · Rodapé institucional",
    difference:
      "Uma direção visual calorosa e objetiva, feita para comunicar carinho logo no primeiro olhar.",
  },
  {
    number: "05",
    title: "Blog Daniel Tolentino",
    category: "Conteúdo · Blog pessoal",
    url: "https://blog.danieltolentino.net/",
    preview: "/previews/daniel-blog.png",
    objective:
      "Criar um espaço próprio para publicar ideias sobre tecnologia, criatividade e o que inspira no caminho.",
    sections: "Manifesto · Lista de posts · Leitura · Navegação de conteúdo",
    difference:
      "Uma estética escura e editorial que coloca a escrita no centro e dá ao conteúdo uma presença memorável.",
  },
  {
    number: "06",
    title: "SirBarber",
    category: "Barbearia · Landing page",
    url: "https://codar-me-maratona-starter-barbearia.vercel.app/",
    preview: "/previews/sirbarber.png",
    objective:
      "Transformar a visita ao site em vontade de agendar um horário e conhecer o espaço.",
    sections: "Hero · Serviços · Localização · Agendamento · Redes sociais",
    difference:
      "Uma apresentação com energia, contraste e chamadas para ação posicionadas no momento certo.",
  },
];

const process = [
  {
    number: "01",
    title: "Entender",
    text: "A gente começa pela sua história, pelo seu público e pelo que o site precisa fazer acontecer.",
  },
  {
    number: "02",
    title: "Construir",
    text: "Transformo estratégia em uma interface clara, bonita e com a personalidade certa para sua marca.",
  },
  {
    number: "03",
    title: "Publicar",
    text: "Depois dos ajustes finais, seu site fica pronto para ser encontrado, compartilhado e lembrado.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Voltar ao início">
          <span className="wordmark-mark">DT</span>
          <span>Daniel Tolentino</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#processo">Como trabalho</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Designer &amp; Desenvolvedor Web</p>
          <h1>
            Sites que transformam <em>boas ideias</em> em presença digital.
          </h1>
          <p className="hero-lede">
            Crio experiências bonitas, rápidas e pensadas para aproximar negócios das pessoas certas. Conheça alguns projetos e imagine o que podemos construir para a sua marca.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projetos">Ver projetos <span aria-hidden="true">↓</span></a>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Quero meu site <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Resumo do portfólio">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-monogram">DT<span>®</span></div>
          <div className="hero-note note-bottom">web feito com<br /><strong>intenção</strong></div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Resumo do trabalho">
        <p>Do primeiro rascunho ao site no ar</p>
        <span className="strip-line" />
        <p>Design com clareza, código com cuidado</p>
        <span className="strip-arrow" aria-hidden="true">↓</span>
      </section>

      <section className="projects-section" id="projetos">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Seleção de trabalhos</p>
            <h2>Projetos com <em>propósito.</em></h2>
          </div>
          <p className="section-intro">Cada projeto começa com uma necessidade diferente. O resultado é um site que faz sentido para quem cria e para quem visita.</p>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className={`project-card ${index % 2 === 1 ? "project-card-reverse" : ""}`} key={project.title}>
              <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`}>
                <span className="browser-bar"><i /><i /><i /><small>{project.url.replace("https://", "")}</small></span>
                <img src={project.preview} alt={`Preview do site ${project.title}`} />
                <span className="preview-overlay">Ver projeto <span aria-hidden="true">↗</span></span>
              </a>
              <div className="project-info">
                <div className="project-kicker"><span>{project.number}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <dl className="project-details">
                  <div><dt>Objetivo</dt><dd>{project.objective}</dd></div>
                  <div><dt>Seções criadas</dt><dd>{project.sections}</dd></div>
                  <div><dt>Diferencial visual</dt><dd>{project.difference}</dd></div>
                </dl>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">Visitar projeto <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="process-heading">
          <p className="eyebrow"><span /> Como acontece</p>
          <h2>Uma boa ideia merece<br /><em>um bom caminho.</em></h2>
        </div>
        <div className="process-grid">
          {process.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-inner">
          <p className="eyebrow eyebrow-light"><span /> Vamos criar algo juntos?</p>
          <h2>Seu próximo site pode ser o próximo projeto <em>daqui.</em></h2>
          <p>Se você quer um site com personalidade, clareza e propósito, me conte sua ideia. Eu cuido da experiência do primeiro rascunho até a publicação.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Falar comigo no WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-asterisk" aria-hidden="true">✳</div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio"><span className="wordmark-mark">DT</span><span>Daniel Tolentino</span></a>
        <p>Sites que aproximam pessoas e boas ideias.</p>
        <a className="footer-phone" href={whatsappUrl} target="_blank" rel="noreferrer">+55 31 99500-7170 <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
