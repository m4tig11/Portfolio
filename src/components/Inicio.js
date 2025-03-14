import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { memo, useEffect, useState } from 'react';
import { FaCertificate, FaDatabase, FaDownload, FaEnvelope, FaExternalLinkAlt, FaGithub, FaGraduationCap, FaJava, FaJs, FaLinkedin, FaPaperPlane, FaProjectDiagram, FaPython, FaReact, FaTasks, FaTimes, FaUniversity } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import profileImage from '../assets/Foto.jpeg';
import saveUpImage from '../assets/SaveUp/Gastos.jpeg';
import minigamesImage from '../assets/TallerCarpinteriaD/Home.jpeg';
import androidImage from '../assets/TallerCarpinteriaM/homem.jpeg';
import './Inicio.css';

// Componente de tarjeta de tecnología memorizado
const TechCard = memo(({ tech }) => (
  <div 
    className="tech-card"
    style={{ '--hover-color': tech.color }}
  >
    <div className="tech-icon">{tech.icon}</div>
    <span className="tech-name">{tech.nombre}</span>
  </div>
));

// Componente de tarjeta de proyecto memorizado
const ProjectCard = memo(({ proyecto, onSelect }) => (
  <div className="project-card">
    <div className={`project-image-container ${proyecto.isVertical ? 'vertical' : ''}`}>
      <img 
        src={proyecto.imagen} 
        alt={proyecto.titulo}
        loading="lazy"
      />
    </div>
    <div className="project-info">
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>
      <div className="project-tech-tags">
        {proyecto.tecnologias.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      <button 
        className="ver-mas-btn"
        onClick={() => onSelect(proyecto)}
      >
        Ver más
      </button>
    </div>
  </div>
));

// Modal de proyecto memorizado
const ProjectModal = memo(({ project, onClose }) => (
  <div className="project-modal-overlay" onClick={onClose}>
    <div className="project-modal" onClick={e => e.stopPropagation()}>
      <button className="close-modal" onClick={onClose}>
        <FaTimes />
      </button>
      
      <div className="modal-content">
        <h2>{project.titulo}</h2>
        
        <div className="modal-gallery">
          {project.imagenes.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${project.titulo} ${index + 1}`}
              className="gallery-image"
              loading="lazy"
            />
          ))}
        </div>

        <div className="modal-description">
          <h3>Descripción</h3>
          <p>{project.descripcionDetallada}</p>
        </div>

        <div className="modal-features">
          <h3>Características principales</h3>
          <ul>
            {project.caracteristicas.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="modal-tech">
          <h3>Tecnologías utilizadas</h3>
          <div className="tech-tags">
            {project.tecnologias.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
            <FaGithub /> Ver código
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
            <FaExternalLinkAlt /> Ver demo
          </a>
        </div>
      </div>
    </div>
  </div>
));

function Inicio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const tecnologias = [
    { nombre: 'Python', icon: <FaPython />, color: '#3776AB' },
    { nombre: 'Java', icon: <FaJava />, color: '#007396' },
    { nombre: 'SQL', icon: <FaDatabase />, color: '#336791' },
    { nombre: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' },
    { nombre: 'React', icon: <FaReact />, color: '#61DAFB' },
    { nombre: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { nombre: 'Agile', icon: <FaTasks />, color: '#009FDA' },
    { nombre: 'UML', icon: <FaProjectDiagram />, color: '#FF7043' }
  ];

  const proyectos = [
    {
      id: 1,
      titulo: 'Save Up',
      descripcion: 'Aplicación de finanzas personales',
      descripcionDetallada: `Save Up es una aplicación web completa para la gestión de finanzas personales. 
        Permite a los usuarios llevar un control detallado de sus gastos e ingresos, 
        establecer presupuestos y visualizar estadísticas de sus hábitos financieros.`,
      imagen: saveUpImage,
      isVertical: false,
      imagenes: [
        saveUpImage,
        // ... más imágenes del proyecto
      ],
      tecnologias: ['React', 'Node.js'],
      caracteristicas: [
        'Dashboard interactivo',
        'Gestión de gastos e ingresos',
        'Reportes estadísticos',
        'Exportación de datos'
      ],
      github: 'https://github.com/...',
      demo: 'https://...'
    },
    {
      id: 2,
      titulo: 'App de Pedidos',
      descripcion: 'Aplicación móvil para gestión de pedidos',
      imagen: androidImage,
      isVertical: true,
      tecnologias: ['Kotlin', 'Android']
    },
    {
      id: 3,
      titulo: 'Web de Minijuegos',
      descripcion: 'Plataforma de juegos interactivos',
      imagen: minigamesImage,
      tecnologias: ['React', 'JavaScript']
    }
  ];

  const formacion = [
    {
      id: 1,
      titulo: 'Técnico en Computación',
      institucion: 'Escuela Técnica',
      periodo: '2015 - 2020',
      descripcion: 'Formación técnica especializada en computación',
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      titulo: 'Certificación Full Stack',
      institucion: 'Instituto de Desarrollo',
      periodo: '2021',
      descripcion: 'Desarrollo web full stack con tecnologías modernas',
      icon: <FaCertificate />
    },
    {
      id: 3,
      titulo: 'Ciencias de la Computación',
      institucion: 'Universidad de Buenos Aires',
      periodo: '2021 - Presente',
      descripcion: 'Licenciatura en curso',
      icon: <FaUniversity />
    }
  ];

  return (
    <>
      <section id="inicio" className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <img src={profileImage} alt="Matias Greco" className="profile-image" />
          <h1>Matias Greco</h1>
          <h2>Analista Programador & Desarrollador</h2>
          <p className="hero-description">
            Estudiante de Ciencias de la Computación en la UBA con experiencia
            en desarrollo de aplicaciones web y móviles.
          </p>
          <button className="download-cv-btn">
            <FaDownload /> Descargar CV
          </button>
        </div>

        <div className="tech-cards" data-aos="fade-up" data-aos-delay="200">
          {tecnologias.map((tech, index) => (
            <TechCard 
              key={tech.nombre} 
              tech={tech}
            />
          ))}
        </div>
      </section>

      <section id="proyectos" className="projects-section">
        <h2>Mis Proyectos</h2>
        <div className="projects-grid">
          {proyectos.map(proyecto => (
            <ProjectCard 
              key={proyecto.id}
              proyecto={proyecto}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      <section id="formacion" className="formacion-section">
        <h2>Sobre Mí</h2>
        <div className="sobre-mi-content">
          <p className="sobre-mi-texto">
            Soy un apasionado desarrollador de software con un fuerte interés en la creación
            de soluciones tecnológicas innovadoras. Mi formación técnica y académica,
            combinada con mi experiencia práctica en diversos proyectos, me ha permitido
            desarrollar una sólida base en programación y diseño de sistemas.
          </p>
          <p className="sobre-mi-texto">
            Me destaco por mi capacidad de aprendizaje continuo y mi entusiasmo por
            mantenerme actualizado con las últimas tecnologías y mejores prácticas
            de desarrollo. Busco constantemente oportunidades para crecer profesionalmente
            y contribuir a proyectos desafiantes.
          </p>
        </div>

        <h3 className="formacion-titulo">Formación Académica</h3>
        <div className="timeline">
          {formacion.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{item.icon}</div>
                <h3>{item.titulo}</h3>
                <h4>{item.institucion}</h4>
                <p className="periodo">{item.periodo}</p>
                <p className="descripcion">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <section id="contacto" className="contacto-section">
        <div className="contacto-container">
          <h2 data-aos="fade-up">Contacto</h2>
          <p className="contacto-descripcion" data-aos="fade-up">
            ¿Interesado en trabajar juntos? ¡Contáctame!
          </p>
          
          <div className="contacto-content">
            <div className="contacto-info" data-aos="fade-right">
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <h3>Email</h3>
                <p>tu.email@ejemplo.com</p>
              </div>
              <div className="info-item">
                <FaLinkedin className="info-icon" />
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
                  /in/tuusuario
                </a>
              </div>
              <div className="info-item">
                <FaGithub className="info-icon" />
                <h3>GitHub</h3>
                <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
                  /tuusuario
                </a>
              </div>
            </div>

            <form className="contacto-form" data-aos="fade-left">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio; 