import React from 'react';
import '../assets/css/App.css';
import '../assets/css/card.css';
import '../assets/css/exp.css';
import { NavLink } from 'react-router-dom';
import { 
  FaGithub,
  FaTwitter,
  FaHome,
  FaBook,
  FaBriefcase,
  FaPhone
} from 'react-icons/fa';


const Footer: React.FC = () => {
  
    return (
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
        <NavLink 
            to="/contactar" 
            className={({ isActive }) => isActive ? "social-icon active" : "social-icon"}
            >
            <FaPhone /> {/* Aquí cambiamos el ícono */}
            <span className="icon-tooltip">Contáctame</span>
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
    );
  };
  
  export default Footer;