import React, { useState } from 'react';
import './Proyectos.css';
// Importar las imágenes de los proyectos
import saveUpImg1 from '../assets/SaveUp/Gastos.jpeg';
import saveUpImg2 from '../assets/SaveUp/Historial.jpeg';
import saveUpCover from '../assets/SaveUp/Inicio.jpeg'; // Asegúrate de tener estas imágenes

function Proyectos() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Nuevos proyectos
const proyectos = [
  {
    id: 1,
    titulo: 'Save Up',
    descripcion: 'Aplicación de finanzas personales',
    imagen: saveUpImage,
    tecnologias: ['React', 'Node.js']
  },
  {
    id: 2,
    titulo: 'App de Pedidos',
    descripcion: 'Aplicación móvil para gestión de pedidos',
    imagen: androidImage,
    tecnologias: ['Kotlin', 'Android']
  },
  {
    id: 3,
    titulo: 'Web de Minijuegos',
    descripcion: 'Plataforma de juegos interactivos',
    imagen: minigamesImage,
    tecnologias: ['React', 'JavaScript']
  },
  {
    id: 4,
    titulo: 'Taller de Carpintería',
    descripcion: 'Aplicación de escritorio para gestión de pedidos en un taller de carpintería',
    imagen: workshopAppImage,
    tecnologias: ['Java', 'MySQL']
  },
  {
    id: 5,
    titulo: 'Robot Arduino',
    descripcion: 'Robot autónomo controlado mediante Arduino y sensores',
    imagen: arduinoRobotImage,
    tecnologias: ['Arduino', 'C++', 'Sensores']
  }
];

  if (selectedProject) {
    return (
      <div className="proyecto-detalle-container">
        <button 
          className="back-button"
          onClick={() => setSelectedProject(null)}
        >
          ← Volver a Proyectos
        </button>

        <div className="proyecto-detalle">
          <h2>{selectedProject.titulo}</h2>
          
          <div className="proyecto-hero">
            <img 
              src={selectedProject.portada} 
              alt={selectedProject.titulo}
              className="proyecto-hero-image"
            />
          </div>

          <div className="proyecto-info-detallada">
            <div className="proyecto-descripcion">
              <h3>Descripción General</h3>
              <p>{selectedProject.descripcionDetallada}</p>
            </div>

            <div className="proyecto-tecnologias">
              <h3>Tecnologías Utilizadas</h3>
              <div className="tech-tags">
                {selectedProject.tecnologias.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="proyecto-caracteristicas">
              <h3>Características Principales</h3>
              <ul>
                {selectedProject.caracteristicas.map((caracteristica, index) => (
                  <li key={index}>{caracteristica}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="proyecto-galeria">
            <h3>Galería</h3>
            <div className="galeria-grid">
              {selectedProject.imagenes.map((imagen, index) => (
                <img 
                  key={index}
                  src={imagen}
                  alt={`${selectedProject.titulo} - imagen ${index + 1}`}
                  className="galeria-imagen"
                />
              ))}
            </div>
          </div>

          <div className="proyecto-links">
            <a 
              href={selectedProject.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="proyecto-link github"
            >
              Ver en GitHub
            </a>
            <a 
              href={selectedProject.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="proyecto-link demo"
            >
              Ver Demo
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="proyectos-container">
      <h2>Mis Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map(proyecto => (
          <div 
            key={proyecto.id} 
            className="proyecto-card"
            onClick={() => setSelectedProject(proyecto)}
          >
            <img 
              src={proyecto.portada} 
              alt={proyecto.titulo} 
              className="proyecto-card-imagen"
            />
            <div className="proyecto-card-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="proyecto-card-tecnologias">
                {proyecto.tecnologias.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button className="ver-mas-btn">Ver más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos; 