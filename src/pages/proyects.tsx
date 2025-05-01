import React from 'react';
import '../assets/css/App.css';
import { Link } from 'react-router-dom';

/* Imporamos iconos e imagenes para poder utilizar */
import yoImage from '../assets/img/yo.webp';
import { 
  FaGithub,
  FaTwitter,
  FaHome,
  FaBook
} from 'react-icons/fa';

const Proyectos: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container">
          <div className="profile-section">

            {/* SECCION DE IMAGEN */}
            <div className="profile-image-container">
              <img src={yoImage} alt="Alejandro Montero" className="profile-image" />
              <div className="image-border"></div>
              <Link to="/" className="cta-button secondary">
                    Volver Inicio
                </Link>
            </div>

            {/* SECCION DE TODO SOBRE MI */}
            <div className="profile-content">
              <h1 className="profile-title">Alejandro Montero</h1>
              <div className="cta-buttons">
              </div>
              <h2 className="profile-subtitle">Proyectos:</h2>

              {/* SECCION DE LOS PROYECTOS */}
              <div className="projects-section">
                
                <div className="proyectos">
                    <h3 className="section-title">Niveles - Dashboard & Bot de Discord</h3>
                    <div className="projects-grid">
                    <div className="project-card">
                    <span className="terminado">Estado: En desarrollo activo</span>
                    <p className="project-description">
                        Niveles.xyz es un bot de Discord avanzado que gamifica servidores con un sistema de niveles, experiencia (XP) y recompensas. 
                        Incluye un dashboard web interactivo donde los usuarios pueden ver rankings personalizados, configurar recompensas por niveles y ajustar parámetros de XP. 
                        La plataforma ofrece una API robusta para desarrolladores, estadísticas en tiempo real y roles automáticos al subir de nivel. 
                        Perfecto para comunidades que buscan aumentar la participación con mecánicas de progreso intuitivas.
                    </p>
                    </div>
                    </div>
                    <a href="https://www.niveles.xyz/" target="_blank" rel="noopener noreferrer">
                    Visitar Dashboard
                    </a>
                </div>


                <div className="proyectos">
                    <h3 className="section-title">Proximamente...</h3>
                    <div className="projects-grid">
                    <div className="project-card">
                    <span className="planificacion">Estado: En planificación</span>
                        <p className="project-description">

                        </p>
                    </div>
                    </div>
                    <Link to="/proyectos">
                        En desarrollo...
                    </Link>
                </div>

                

              </div>
            </div>
          </div>
        </div>
        <div className="socialmedia">
            <Link to="/">
              <FaHome />
            </Link>
            <Link to="/proyectos">
              <FaBook />
            </Link>
            <a href="https://github.com/monte7292" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://x.com/monterito2002" target="_blank" rel="noopener noreferrer" >
              <FaTwitter />
            </a>
            
        </div>
      </header>
    </div>
  );
};

export default Proyectos;