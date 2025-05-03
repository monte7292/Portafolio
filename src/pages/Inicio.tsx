import React from 'react';
import '../assets/css/App.css';

/* Imporamos iconos e imagenes para poder utilizar */
import yoImage from '../assets/img/yo.webp';
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaDiscord, 
  FaHtml5, 
  FaBootstrap,
  FaGithub,
  FaTwitter,
  FaHome,
  FaBook,
  FaBriefcase,
  FaJava,
  FaGit
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiMysql 
} from 'react-icons/si';
import { Link, NavLink  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container">
          <div className="profile-section">
            

            {/* SECCION DE IMAGEN */}
            <div className="profile-image-container">
              <img src={yoImage} alt="Alejandro Montero" className="profile-image" />
              <div className="image-border"></div>
                <Link to="/proyectos" className="cta-button secondary">
                    Ver Proyectos
                </Link>
            </div>
            

            {/* SECCION DE TODO SOBRE MI */}
            <div className="profile-content">
              <h1 className="profile-title">Alejandro Montero</h1>
              <h2 className="profile-subtitle">Desarrollador Web Full Stack</h2>
              <p className="profile-description">
              Hola, me llamo Alejandro Montero Del Toro, soy estudiante de Desarrollo de Aplicaciones Web (DAW) y tengo más de tres años de experiencia creando páginas webs, bots de Discord y ofreciendo soporte técnico.
              </p>


              {/* SECCION DE LOS LENGUAJES */}
              <div className="skills-tags">
                <span className="skill-tag">
                  {(<FaReact className="skill-icon" />) as React.ReactElement} React
                </span>
                <span className="skill-tag">
                  {(<FaJs className="skill-icon" />) as React.ReactElement} JavaScript
                </span>
                <span className="skill-tag">
                  {(<FaJava className="skill-icon" />) as React.ReactElement} Java
                </span>
                <span className="skill-tag">
                  {(<SiMysql className="skill-icon" />) as React.ReactElement} MySql
                </span>
                <span className="skill-tag">
                  {(<FaGit className="skill-icon" />) as React.ReactElement} Git
                </span>
                <span className="skill-tag">
                  {(<FaNodeJs className="skill-icon" />) as React.ReactElement} Node.js
                </span>
                <span className="skill-tag">
                  {(<FaDiscord className="skill-icon" />) as React.ReactElement} Discord.js
                </span>
                <span className="skill-tag">
                  {(<FaHtml5 className="skill-icon" />) as React.ReactElement} HTML/CSS
                </span>
                <span className="skill-tag">
                  {(<FaBootstrap className="skill-icon" />) as React.ReactElement} Bootstrap
                </span>
                <span className="skill-tag">
                  {(<SiMongodb className="skill-icon" />) as React.ReactElement} MongoDB
                </span>
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
}

export default App;