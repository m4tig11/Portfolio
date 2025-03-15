import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';
import Inicio from './components/Inicio';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">MG</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('inicio')}>Inicio</button>
          <button onClick={() => scrollToSection('formacion')}>Formación</button>
          <button onClick={() => scrollToSection('proyectos')}>Proyectos</button>
          <button onClick={() => scrollToSection('contacto')}>Contacto</button>
        </div>
      </nav>

      <main className="main-content">
        <Inicio />
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/m4tig11" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/matias-greco/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        
          <a href="/Matias_Greco_Resume.pdf" download="Matias_Greco_CV.pdf" className="download-cv-btn">
            <FaDownload /> Descargar CV
          </a>
        
      </footer>
    </div>
  );
}

export default App;
