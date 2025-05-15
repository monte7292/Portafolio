import React from 'react';
import '../assets/css/App.css';
import '../assets/css/card.css';
import '../assets/css/exp.css';
import yoImage from '../assets/img/yo.webp';
import { Link } from 'react-router-dom';


const SobreMi: React.FC = () => {
  
    return (
        <div className="profile-image-container">
            <img src={yoImage} alt="Alejandro Montero" className="profile-image" />
            <div className="image-border"></div>
            <Link to="/" className="cta-button secondary">
            Volver Inicio
            </Link>
        </div>
    );
  };
  
  export default SobreMi;