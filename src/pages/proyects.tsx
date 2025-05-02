import React from 'react';
import '../assets/css/App.css';
import '../assets/css/card.css';
import { Link } from 'react-router-dom';
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
  FaReact
} from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiExpress } from 'react-icons/si';

// Changed JSX.Element to React.ReactNode and removed unused icons
const techIcons: Record<string, React.ReactNode> = {
  'React': <FaReact className="tech-icon" />,
  'TypeScript': <SiTypescript className="tech-icon" />,
  'Node.js': <FaNodeJs className="tech-icon" />,
  'Discord.js': <FaDiscord className="tech-icon" />,
  'MongoDb': <SiMongodb className="tech-icon" />,
  'Express': <SiExpress className="tech-icon" />,
  'PostgreSQL': <SiPostgresql className="tech-icon" />,
};


const Proyectos: React.FC = () => {
  const projects = [
    {
      title: "Niveles",
      status: "Activo",
      statusClass: "status-active",
      description: "Niveles es una app web hecha con React y TypeScript para administrar niveles y roles en servidores de Discord. Usa Vite, está desplegada en Vercel y cuenta con autenticación OAuth2, manejo seguro de tokens y control de acceso por servidor, garantizando una experiencia segura y escalable",
      link: "https://www.niveles.xyz/",
      icon: <FaDiscord className="project-icon" />,
      tags: ["TypeScript", "React", "Node.js", "MongoDb" , "Express", "Discord.js", ]
    },
    {
      title: "Portfolio",
      status: "Activo",
      statusClass: "status-active",
      description: "Sitio web personal , para mostrar mi progreso, proyectos y trabajos.",
      link: "/",
      icon: <FaCode className="project-icon" />,
      tags: ["React", "TypeScript"]
    },
    {
      title: "API Service",
      status: "Proximamente...",
      statusClass: "status-inactive",
      description: "Backend para aplicaciones web con autenticación JWT",
      link: "#",
      icon: <FaCode className="project-icon" />,
      tags: ["Node.js", "PostgreSQL"]
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container">
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

              <div className="projects-container">
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                      <div className="project-header">
                        {project.icon}
                        <div>
                          <h3 className="project-title">{project.title}</h3>
                          <span className={`project-status ${project.statusClass}`}>{project.status}</span>
                        </div>
                      </div>
                      
                      <p className="project-description">{project.description}</p>
                      
                      <div className="project-footer">
                        <div className="project-tags">
                          {project.tags.map((tag, tagIndex) => (
                            <span className="tag" key={tagIndex}>
                              {techIcons[tag] || <FaCode className="tech-icon" />} {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                        >
                          <FaExternalLinkAlt className="link-icon" />
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
          <Link to="/" className="social-icon">
            <FaHome />
            <span className="icon-tooltip">Inicio</span>
          </Link>
          <Link to="/proyectos" className="social-icon">
            <FaBook />
            <span className="icon-tooltip">Proyectos</span>
          </Link>
          <a href="https://github.com/monte7292" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
            <span className="icon-tooltip">GitHub</span>
          </a>
          <a href="https://x.com/monterito2002" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
            <span className="icon-tooltip">Twitter</span>
          </a>
          <a href="https://www.niveles.xyz/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaDiscord />
            <span className="icon-tooltip">Discord</span>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Proyectos;