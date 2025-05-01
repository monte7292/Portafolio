import React from 'react';
import '../assets/css/App.css';
import { Link } from 'react-router-dom';

/* Imporamos iconos e imagenes para poder utilizar */
import yoImage from '../assets/img/yo.webp';

const Proyectos: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container">
          <div className="profile-section">

            {/* SECCION DE IMAGEN */}
            <div className="profile-image-container">
              <img src={yoImage} alt="Montero Developer" className="profile-image" />
              <div className="image-border"></div>
              <Link to="/" className="cta-button secondary">
                    Volver al Inicio
                </Link>
            </div>

            {/* SECCION DE TODO SOBRE MI */}
            <div className="profile-content">
              <h1 className="profile-title">Montero Developer</h1>
              <div className="cta-buttons">
              </div>
              <h2 className="profile-subtitle">Proyectos</h2>
              <p className="profile-description">
                asdsadsdasda
              </p>

              {/* SECCION DE LOS PROYECTOS */}
              <div className="projects-section">
                
                <div className="proyectos">
                    <h3 className="section-title">Proyectos Destacados</h3>
                    <div className="projects-grid">
                    <div className="project-card">
                        <p className="project-description">
                        Sistema de niveles para Discord con dashboard interactivo y API robusta.
                        </p>
                    </div>
                    </div>
                    <a href="https://www.niveles.xyz/" target="_blank" rel="noopener noreferrer">
                    Ver página web
                    </a>
                </div>


                <div className="proyectos">
                    <h3 className="section-title">Proyectos Destacados</h3>
                    <div className="projects-grid">
                    <div className="project-card">
                        <p className="project-description">
                        Sistema de niveles para Discord con dashboard interactivo y API robusta.
                        </p>
                    </div>
                    </div>
                    <a href="https://www.niveles.xyz/" target="_blank" rel="noopener noreferrer">
                    Ver página web
                    </a>
                </div>


                






              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Proyectos;