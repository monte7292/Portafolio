import React from 'react';
import '../assets/css/App.css';
import '../assets/css/card.css';
import { Link, NavLink  } from 'react-router-dom';
import yoImage from '../assets/img/yo.webp';
import { 
  FaGithub,
  FaTwitter,
  FaHome,
  FaBook,
  FaBriefcase
} from 'react-icons/fa';


const Experiencia: React.FC = () => {
  const projects = [
    {
      title: "Hola Mundo",
      statusClass: "status-active",
      description: ".",
      link: "https://www.niveles.xyz/",
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
              <h2 className="profile-subtitle">Mi experiencia laboral:</h2>

              <div className="projects-container">
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                      <div className="project-header">
                        <div>
                          <h3 className="project-title">{project.title}</h3>
                        </div>
                      </div>
                      
                      <p className="project-description">{project.description}</p>
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

export default Experiencia;