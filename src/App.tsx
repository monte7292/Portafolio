import React from 'react';
import './assets/css/App.css';
import yoImage from './assets/img/yo.webp';
import { FaJs, FaReact, FaNodeJs, FaDiscord, FaHtml5 } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container">
          <div className="profile-section">
            <div className="profile-image-container">
              <img src={yoImage} alt="Montero Developer" className="profile-image" />
              <div className="image-border"></div>
            </div>
            <div className="profile-content">
              <h1 className="profile-title">Monterito Developer</h1>
              <h2 className="profile-subtitle">Desarrollador Web Full Stack</h2>
              <p className="profile-description">
                Hola, soy monte7292, estudiante de Desarrollo de Aplicaciones Web (DAW) con más de dos años de experiencia en desarrollo web, bots de Discord y soporte técnico. 
                Me especializo en crear soluciones digitales eficientes y escalables.
              </p>



              <div className="projects-section">
                <h3 className="section-title">Proyectos Destacados</h3>
                <div className="projects-grid">
                  <div className="project-card">
                    <h4 className="project-title">https://niveles.xyz</h4>
                    <p className="project-description">
                      Sistema de niveles para Discord con dashboard interactivo y API robusta.
                    </p>
                  </div>
                </div>
              </div>



              <div className="skills-tags">
                <span className="skill-tag">
                  {(<FaJs className="skill-icon" />) as React.ReactElement} JavaScript
                </span>
                <span className="skill-tag">
                  {(<FaReact className="skill-icon" />) as React.ReactElement} React
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
              </div>



              
              <div className="cta-buttons">
                <a href="#contact" className="cta-button primary">Contáctame</a>
                <a href="https://github.com/monte7292" className="cta-button secondary" target="_blank" rel="noopener noreferrer">
                  Ver Proyectos
                </a>
              </div>
              
            </div>

            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;