import React, { useRef, useEffect } from 'react';
import '../assets/css/App.css';
import '../assets/css/card.css';
import { Link, NavLink } from 'react-router-dom';
import yoImage from '../assets/img/yo.webp';
import { 
  FaGithub,
  FaTwitter,
  FaHome,
  FaBook,
  FaDiscord,
  FaExternalLinkAlt,
  FaCode,
  FaNodeJs,
  FaReact,
  FaBriefcase,
  FaCss3Alt,
  FaHtml5
} from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiExpress } from 'react-icons/si';


const techIcons: Record<string, React.ReactNode> = {
  'React': <FaReact className="tech-icon" />,
  'TypeScript': <SiTypescript className="tech-icon" />,
  'Node.js': <FaNodeJs className="tech-icon" />,
  'Discord.js': <FaDiscord className="tech-icon" />,
  'MongoDb': <SiMongodb className="tech-icon" />,
  'Express': <SiExpress className="tech-icon" />,
  'PostgreSQL': <SiPostgresql className="tech-icon" />,
  'CSS': <FaCss3Alt className="tech-icon" />,
  'HTML': <FaHtml5 className="tech-icon" />,
};


const Proyectos: React.FC = () => {
  const projects = [
    {
      title: "Niveles",
      status: "Terminado",
      statusClass: "status-actualmente",
      desarrollo: "Ultima actualización: 22/04/2025",
      description: "Niveles es una app web hecha con React y TypeScript para administrar niveles y roles en servidores de Discord. Usa Vite, está desplegada en Vercel y cuenta con autenticación OAuth2, manejo seguro de tokens y control de acceso por servidor, garantizando una experiencia segura y escalable",
      link: "https://www.niveles.xyz/",
      icon: <FaDiscord className="project-icon" />,
      tags: ["TypeScript", "React", "Node.js", "MongoDb", "Express", "Discord.js" , "HTML", "CSS"]
    },
    {
      title: "Portfolio",
      status: "Terminado",
      statusClass: "status-actualmente",
      desarrollo: "Ultima actualización: 03/05/2025",
      description: "Mi sitio web personal es más que un simple portafolio: es una demostración viva de mis habilidades y evolución como desarrollador.",
      link: "/",
      icon: <FaCode className="project-icon" />,
      tags: ["React", "TypeScript"]
    },
    {
      title: "---",
      status: "Proximamente...",
      statusClass: "status-desarrollo",
      desarrollo: "Ultima actualización: --/--/----",
      description: "---",
      link: "#",
      icon: <FaCode className="project-icon" />,
      tags: ["HTML"]
    },
  ];

  const projectsContainerRef = useRef<HTMLDivElement>(null);

  // Reemplaza el useEffect con este código corregido
useEffect(() => {
  const handleScroll = () => {
    const container = projectsContainerRef.current;
    if (!container) return;

    const projects = Array.from(container.querySelectorAll<HTMLElement>('.project-card'));
    const containerRect = container.getBoundingClientRect();
    const containerHeight = containerRect.height;
    const scrollPosition = window.scrollY - containerRect.top;

    projects.forEach((project, index) => {
      const projectRect = project.getBoundingClientRect();
      const projectTop = projectRect.top - containerRect.top;
      
      // Calculamos la posición relativa del proyecto en el contenedor
      const positionInViewport = (scrollPosition - projectTop) / containerHeight;
      
      // Aplicamos diferentes opacidades según la posición
      if (positionInViewport < 0.2) {
        // Proyecto en la parte superior - completamente visible
        project.style.opacity = '1';
        project.style.transform = 'translateY(0)';
      } else if (positionInViewport < 0.8) {
        // Proyecto en el medio - parcialmente visible con degradado
        const opacity = 1 - (positionInViewport - 0.2) / 0.6;
        project.style.opacity = opacity.toString();
        project.style.transform = `translateY(${(positionInViewport - 0.2) * 20}px)`;
      } else {
        // Proyecto en la parte inferior - invisible
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Llamamos inicialmente para establecer los estados

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container-proyectos">
          <div className="profile-section">
            <div className="profile-image-container">
              <img src={yoImage} alt="Alejandro Montero" className="profile-image" />
              <div className="image-border"></div>
              <Link to="/" className="cta-button secondary">
                Volver Inicio
              </Link>
            </div>

            <div className="profile-content">
              <h1 className="profile-title">Alejandro Montero</h1>
              <h2 className="profile-subtitle">Proyectos en los que trabajo:</h2>

              <div className="projects-container" ref={projectsContainerRef}>
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div 
                      className="project-card" 
                      key={index}
                      style={{
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        willChange: 'opacity, transform'
                      }}
                    >
                      <div className="project-header">
                        {project.icon}
                        <div>
                          <h3 className="project-title">{project.title}</h3>
                          <span className={`project-status ${project.statusClass}`}>{project.status}</span>
                        </div>
                      </div>
                      {project.desarrollo && <p className="project-desarrollo">{project.desarrollo}</p>}
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-footer">
                        <div className="project-tags">
                          {project.tags.map((tag, tagIndex) => (
                            tag && (
                              <span className="tag" key={tagIndex}>
                                {techIcons[tag] || <FaCode className="tech-icon" />} {tag}
                              </span>
                            )
                          ))}
                        </div>
                        
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                        >
                          Ir<FaExternalLinkAlt className="link-icon" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="social-media-container">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "social-icon active" : "social-icon"}
          >
            <FaHome />
            <span className="icon-tooltip">Inicio</span>
          </NavLink>
          <NavLink 
            to="/proyectos"
            className={({ isActive }) => isActive ? "social-icon active" : "social-icon"}
          >
            <FaBook />
            <span className="icon-tooltip">Proyectos</span>
          </NavLink>
          <NavLink 
            to="/experiencia" 
            className={({ isActive }) => isActive ? "social-icon active" : "social-icon"}
          >
            <FaBriefcase />
            <span className="icon-tooltip">Experiencia</span>
          </NavLink>
          <a href="https://github.com/monte7292" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
            <span className="icon-tooltip">GitHub</span>
          </a>
          <a href="https://x.com/monterito2002" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
            <span className="icon-tooltip">Twitter</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Proyectos;