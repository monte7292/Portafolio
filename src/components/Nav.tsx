import { useState } from 'react';
import '../assets/css/App.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-classic">
      <div className="nav-container-classic">
        <a href="#home" className="logo-classic">MiPortafolio</a>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Menú de navegación"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-links-classic ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;