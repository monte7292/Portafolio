import React, { useEffect } from 'react';

import '../assets/css/contact.css';
/* Imporamos iconos e imagenes para poder utilizar */
import { MdEmail } from 'react-icons/md'; // Ícono de correo
import { FaGithub } from 'react-icons/fa'

// Importar componentes
import Footer from '../components/footer';
import SobreMi from '../components/sobremifoto';

const Contactar: React.FC = () => {
  useEffect(() => {
    // Script de validación de Bootstrap
    const forms = document.querySelectorAll('.needs-validation');
    
    const handleSubmit = function(event: Event) {
      const form = event.target as HTMLFormElement;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    };

    forms.forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });

    // Limpieza del efecto
    return () => {
      forms.forEach(form => {
        form.removeEventListener('submit', handleSubmit);
      });
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="hero-container-proyectos">
          <div className="profile-section">
            <SobreMi />

            <div className="profile-content">
              <h1 className="profile-title">Alejandro Montero</h1>
              <p className="profile-description">
                <MdEmail style={{ marginRight: '8px' }} />
                Correo: <a href="mailto:amontor1507trabajo@gmail.com">amontor1507trabajo@gmail.com</a>
              </p>
              <p className="profile-description">
                <FaGithub style={{ marginRight: '8px' }} />
                GitHub: <a href="https://github.com/monte7292" target="_blank" rel="noopener noreferrer">monte7292</a>
              </p>
            


              {/* Formulario de contacto */}
              <div className="container mt-4">
              <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Tu nombre"
                    required
                    />
                    <div className="invalid-feedback">
                    Por favor ingresa tu nombre.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nombre@ejemplo.com"
                    required
                    />
                    <div className="invalid-feedback">
                    Por favor ingresa un correo válido.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="asunto" className="form-label">Asunto</label>
                    <input
                    type="text"
                    className="form-control"
                    id="asunto"
                    placeholder="Asunto del mensaje"
                    required
                    />
                    <div className="invalid-feedback">
                    El asunto es obligatorio.
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                    className="form-control"
                    id="mensaje"
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    required
                    ></textarea>
                    <div className="invalid-feedback">
                    Por favor escribe tu mensaje.
                    </div>
                </div>
                <button className="btn btn-primary">*En Desarrollo*</button>
                </form>
                </div>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </header>
    </div>
  );
};

export default Contactar;
