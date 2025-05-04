import React from 'react';
import '../assets/css/App.css';
import '../assets/css/card.css';
import '../assets/css/exp.css';
import { Link, NavLink } from 'react-router-dom';
import yoImage from '../assets/img/yo.webp';
import { 
  FaGithub,
  FaTwitter,
  FaHome,
  FaBook,
  FaBriefcase
} from 'react-icons/fa';

// Importar banderas (asegúrate de tener estas imágenes en tu proyecto)
import italyFlag from '../assets/img/italia.webp';
import spainFlag from '../assets/img/espania.webp';

const Experiencia: React.FC = () => {
  const experiences = [
    {
      company: "GEOTRONICS",
      country: "España",
      position: "Desarrollo de Aplicaciones Web - Dual Grado Superior",
      description: `
    Competencias adquiridas durante la estancia formativa:
    
    **ACTIVIDADES / TAREAS LLEVADAS A CABO**
    - Desarrollo de aplicaciones web con Angular y Spring Boot
    - Implementación de APIs RESTful
    - Trabajo con bases de datos relacionales y NoSQL (MongoDB)
    - Implementación de autenticación JWT y OAuth2
    - Despliegue de aplicaciones en entornos cloud
    - Control de versiones con Git y GitHub
    
    **COMPETENCIAS RELACIONADAS CON EL EMPLEO**
    - Desarrollo frontend con Angular (componentes, directivas, servicios)
    - Desarrollo backend con Java/Spring Boot (microservicios, Spring Cloud)
    - Implementación de principios SOLID y Clean Code
    - Trabajo con arquitecturas de microservicios (Eureka, API Gateway)
    - Integración de sistemas y APIs externas
    
    **COMPETENCIAS DE ORGANIZACIÓN / GESTIÓN**
    - Gestión del tiempo en proyectos de desarrollo ágil
    - Coordinación con equipos multidisciplinares
    - Adaptación a nuevas tecnologías y tendencias del sector
    
    **COMPETENCIAS COMUNICATIVAS**
    - Comunicación técnica con equipos de desarrollo
    - Documentación de proyectos y soluciones técnicas
    - Trabajo colaborativo en entornos remotos
    `,
      period: "2024-2025",
      flag: spainFlag,
      status: "Actualmente",
      statusClass: "status-actualmente"
    },
    {
      company: "RADIO SATA",
      country: "Italia",
      position: "Sistemas Microinformáticos y Redes - FCT Grado Medio",
      description: `
    Competencias adquiridas durante la estancia formativa:
    
    **ACTIVIDADES / TAREAS LLEVADAS A CABO**
    - Instalación de software
    - Programación básica
    - Programación de sitios web y de dispositivos
    - Montaje y configuración de dispositivos
    - Detectar disfunciones en sistemas microinformáticos
    - Recuperación de datos y aplicaciones ante fallos y pérdidas de datos en el sistema
    
    **COMPETENCIAS RELACIONADAS CON EL EMPLEO**
    - Instalar y configurar software básico y de aplicación, redes locales cableadas
    - Instalar, configurar y mantener servicios multiusuario, aplicaciones y dispositivos compartidos en un entorno de red local
    - Montar y configurar ordenadores y periféricos
    - Diagnosticar disfunciones en sistemas microinformáticos y redes
    - Ejecución de procesos de programación
    
    **COMPETENCIAS DE ORGANIZACIÓN / GESTIÓN**
    - Integrarse en un equipo existente
    - Organizar las tareas de trabajo con los compañeros
    
    **COMPETENCIAS COMUNICATIVAS**
    - Trabajo en equipo y comunicación con los compañeros
    `,
      period: "2023-2024",
      flag: italyFlag,
      status: "Terminado",
      statusClass: "status-terminado"
    },
  ];

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
              <h2 className="profile-subtitle">Mi experiencia laboral:</h2>

              <div className="projects-container">
                <div className="experiences-grid">
                  {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                      <div className="experience-header">
                        <div className="country-flag-container">
                          <img src={exp.flag} alt={`Bandera de ${exp.country}`} className="country-flag" />
                        </div>
                        <div className="experience-title">
                          <h3>{exp.company}</h3>
                          <div className="experience-meta">
                            <span className="experience-country">🌏 País: {exp.country}</span>
                            <span className="experience-period">🗓️ Periodo: {exp.period}</span>
                          </div>
                          <span className={`project-status ${exp.statusClass}`}>{exp.status}</span>
                        </div>
                      </div>
                      
                      <div className="experience-position">
                       {exp.position}
                      </div>
                      
                      <div
                          className="experience-description"
                          dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                        />

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resto del código (social media container) permanece igual */}
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