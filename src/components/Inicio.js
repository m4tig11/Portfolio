import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { memo, useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';
import {
  FaCertificate, FaDatabase,
  FaDownload, FaEnvelope, FaGithub, FaGraduationCap, FaJava, FaJs, FaLinkedin,
  FaPhoneAlt, FaProjectDiagram, FaPython, FaReact, FaTasks,
  FaTimes,
  FaUniversity
} from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import arduinoRobotImage from '../assets/ArduinoRobot/Robot.jpeg';
import minigamesImage from '../assets/CultureQuizz/home (1).jpeg';
import img1 from '../assets/CultureQuizz/WhatsApp Image 2024-12-03 at 20.18.54 (1).jpeg';
import img3 from '../assets/CultureQuizz/WhatsApp Image 2024-12-03 at 20.19.29 (1).jpeg';
import img2 from '../assets/CultureQuizz/WhatsApp Image 2024-12-03 at 20.22.12 (1).jpeg';
import profileImage from '../assets/Foto.jpeg';
import saveUpImage from '../assets/SaveUp/Gastos.jpeg';
import historial from '../assets/SaveUp/Historial.jpeg';
import inicio from '../assets/SaveUp/Inicio.jpeg';
import Login from '../assets/SaveUp/Login.jpeg';
import workshopAppImage from '../assets/TallerCarpinteriaD/Home.jpeg';
import pedido from '../assets/TallerCarpinteriaD/Pedido.jpeg';

import androidImage from '../assets/TallerCarpinteriaM/homem.jpeg';
import pedidos from '../assets/TallerCarpinteriaM/pedidom.jpeg';

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
const ProjectCard = memo(({ proyecto, onSelect, t }) => {
  const { language } = useLanguage();
  
  const getTranslatedText = (text, language) => {
    if (language === 'en') {
      switch(text) {
        case "Save Up":
          return "Save Up";
        case "Gestion pedidos AndroidApp":
          return "Order Management AndroidApp";
        case "Web de Minijuegos":
          return "Mini Games Web";
        case "Taller de Carpintería":
          return "Carpentry Workshop";
        case "Robot Arduino":
          return "Arduino Robot";
        case "Aplicación de finanzas personales":
          return "Personal finance application";
        case "Aplicación móvil para gestión de pedidos de taller":
          return "Mobile application for workshop order management";
        case "Plataforma de juegos interactivos":
          return "Interactive games platform";
        case "Aplicación de escritorio para gestión de pedidos en un taller de carpintería":
          return "Desktop application for order management in a carpentry workshop";
        case "Robot bailarín":
          return "Dancing Robot";
        case "Save-UP es una aplicación de escritorio desarrollada en Python con Tkinter que permite a los usuarios gestionar sus gastos de manera eficiente. La aplicación ofrece una interfaz gráfica amigable donde los usuarios pueden registrar, visualizar y analizar sus gastos en diferentes categorías, a traves de graficos":
          return "Save-UP is a desktop application developed in Python with Tkinter that allows users to efficiently manage their expenses. The application offers a user-friendly graphical interface where users can record, visualize and analyze their expenses in different categories, through graphs";
        case "Esta aplicación para Android permite gestionar pedidos de manera eficiente, facilitando la creación, modificación y seguimiento de su estado en tiempo real. También incluye herramientas para administrar clientes y sincroniza los datos con una base de datos PostgreSQL a través de una API. Con una interfaz intuitiva, los usuarios pueden actualizar y consultar pedidos de forma rápida y sencilla, optimizando así la gestión de ventas y operaciones.":
          return "This Android application allows efficient order management, facilitating creation, modification and real-time status tracking. It also includes tools to manage customers and synchronizes data with a PostgreSQL database through an API. With an intuitive interface, users can quickly and easily update and consult orders, optimizing sales and operations management.";
        case "Es una plataforma de juegos interactivos diseñada para poner a prueba tus conocimientos de cultura general. Disfruta de desafíos como ordenar eventos históricos, adivinar capitales, identificar banderas y mucho más. Con una dinámica entretenida e intuitiva, esta aplicación te permite aprender de manera divertida mientras compites y mejoras tus habilidades en distintos temas.":
          return "It is an interactive games platform designed to test your general knowledge. Enjoy challenges like ordering historical events, guessing capitals, identifying flags and much more. With an entertaining and intuitive dynamic, this application allows you to learn while having fun as you compete and improve your skills in different topics.";
        case "Una aplicación de escritorio desarrollada en Python con PyQt diseñada para la gestión eficiente de pedidos en talleres. Permite crear, modificar y monitorear el estado de los pedidos en tiempo real, además de administrar clientes de forma sencilla. Se conecta a una base de datos PostgreSQL a través de una API para almacenar y sincronizar la información, asegurando un flujo de trabajo optimizado. Con una interfaz intuitiva y funcional, facilita la organización de los pedidos y mejora la productividad del taller.":
          return "A desktop application developed in Python with PyQt designed for efficient order management in workshops. It allows creating, modifying and monitoring order status in real time, as well as easily managing customers. It connects to a PostgreSQL database through an API to store and synchronize information, ensuring an optimized workflow. With an intuitive and functional interface, it facilitates order organization and improves workshop productivity.";
        case "Es un robot que cuenta con 18 servos controlado mediante arduino":
          return "It's a robot that features 18 servos controlled by Arduino";
        default:
          return text;
      }
    }
    return text;
  };

  return (
    <div className="project-card">
      <div className={`project-image-container ${proyecto.isVertical ? "vertical" : ""}`}>
        <img 
          src={proyecto.imagen} 
          alt={getTranslatedText(proyecto.titulo, language)}
          loading="lazy"
        />
      </div>

      <div className="project-info">
        <h3>{getTranslatedText(proyecto.titulo, language)}</h3>
        <p>{getTranslatedText(proyecto.descripcion, language)}</p>

        <div className="project-tech-tags">
          {proyecto.tecnologias.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <button 
          className="ver-mas-btn"
          onClick={() => onSelect({
            ...proyecto,
            titulo: getTranslatedText(proyecto.titulo, language),
            descripcion: getTranslatedText(proyecto.descripcion, language),
            descripcionDetallada: getTranslatedText(proyecto.descripcionDetallada, language)
          })}
        >
          {t('verMas')}
        </button>
      </div>
    </div>
  );
});

const ProjectModal = ({ project, onClose, t }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;

  return (
    <div className="project-modal-overlay">
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>{project.titulo}</h2>
        <p className="modal-description">
          {project.descripcionDetallada || t('descripcionNoDisponible')}
        </p>

        <div className="modal-gallery">
          {project.imagenes && project.imagenes.length > 0 ? (
            project.imagenes.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.titulo} ${index + 1}`}
                className="gallery-image"
                loading="lazy"
                onClick={() => setSelectedImage(img)}
              />
            ))
          ) : (
            <p>{t('noImagenes')}</p>
          )}
        </div>

        <div className="modal-tech">
          <h3>{t('tecnologiasUtilizadas')}</h3>
          <div className="tech-tags">
            {project.tecnologias.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <FaGithub /> {t('verEnGithub')}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-btn"
            >
              {t('verDemo')}
            </a>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
          <div className="fullscreen-background"></div>
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="fullscreen-image"
          />
          <button className="close-fullscreen" onClick={() => setSelectedImage(null)}>
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};





function Inicio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();
  

  const handleCloseModal = () => {
    setSelectedProject(null);
  };


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
      titulo: "Save Up",
      descripcion: "Aplicación de finanzas personales",
      descripcionDetallada: "Save-UP es una aplicación de escritorio desarrollada en Python con Tkinter que permite a los usuarios gestionar sus gastos de manera eficiente. La aplicación ofrece una interfaz gráfica amigable donde los usuarios pueden registrar, visualizar y analizar sus gastos en diferentes categorías, a traves de graficos",
      imagen: saveUpImage,
      isVertical: false,
      tecnologias: ['Python', 'SQL','TKinter'],
      github: 'https://github.com/m4tig11/Save-UP.git',
      imagenes: [saveUpImage, inicio, historial, Login],
    },
    {
      id: 2,
      titulo: "Gestion pedidos AndroidApp",
      descripcion: "Aplicación móvil para gestión de pedidos de taller",
      descripcionDetallada: "Esta aplicación para Android permite gestionar pedidos de manera eficiente, facilitando la creación, modificación y seguimiento de su estado en tiempo real. También incluye herramientas para administrar clientes y sincroniza los datos con una base de datos PostgreSQL a través de una API. Con una interfaz intuitiva, los usuarios pueden actualizar y consultar pedidos de forma rápida y sencilla, optimizando así la gestión de ventas y operaciones.",
      imagen: androidImage,
      isVertical: true,
      tecnologias: ['Kotlin', 'Android','PostgreSQL','django'],
      github: 'https://github.com/m4tig11/TallerCarpinteriaApp.git',
      imagenes: [androidImage, pedidos],
    },
    {
      id: 3,
      titulo: "Web de Minijuegos",
      descripcion: "Plataforma de juegos interactivos",
      descripcionDetallada: "Es una plataforma de juegos interactivos diseñada para poner a prueba tus conocimientos de cultura general. Disfruta de desafíos como ordenar eventos históricos, adivinar capitales, identificar banderas y mucho más. Con una dinámica entretenida e intuitiva, esta aplicación te permite aprender de manera divertida mientras compites y mejoras tus habilidades en distintos temas.",
      imagen: minigamesImage,
      tecnologias: ['React', 'JavaScript'],
      imagenes: [minigamesImage, img1, img2, img3],
    },
    {
      id: 4,
      titulo: "Taller de Carpintería",
      descripcion: "Aplicación de escritorio para gestión de pedidos en un taller de carpintería",
      descripcionDetallada: "Una aplicación de escritorio desarrollada en Python con PyQt diseñada para la gestión eficiente de pedidos en talleres. Permite crear, modificar y monitorear el estado de los pedidos en tiempo real, además de administrar clientes de forma sencilla. Se conecta a una base de datos PostgreSQL a través de una API para almacenar y sincronizar la información, asegurando un flujo de trabajo optimizado. Con una interfaz intuitiva y funcional, facilita la organización de los pedidos y mejora la productividad del taller.",
      imagen: workshopAppImage,
      tecnologias: ['Python', 'PostgreSQL','Django','PyQt'],
      github: 'https://github.com/m4tig11/TallerCarpinteria.git',
      imagenes: [workshopAppImage, pedido],
    },
    {
      id: 5,
      titulo: "Robot Arduino",
      descripcion: "Robot bailarín",
      descripcionDetallada: "Es un robot que cuenta con 18 servos controlado mediante arduino",
      imagen: arduinoRobotImage,
      tecnologias: ['Arduino', 'C++', 'Sensores','Servo motores']
    }
  ];
  const formacion = [
    {
      id: 1,
      titulo: "Técnico en Computación",
      institucion: "Escuela Técnica Maria Sanchez de Thompson",
      periodo: "2019 - 2024",
      descripcion: "Formación técnica especializada en computación",
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      titulo: "Certificación Full Stack",
      institucion: "Streambe",
      periodo: "2021",
      descripcion: "Desarrollo web full stack con tecnologías modernas",
      icon: <FaCertificate />
    },
    {
      id: 3,
      titulo: "Ciencias de la Computación",
      institucion: "Universidad de Buenos Aires",
      periodo: "2024 - Presente",
      descripcion: "Licenciatura en curso",
      icon: <FaUniversity />
    }
  ];
  

  return (
    <>
      <section id="inicio" className="hero-section">
        <div className="hero-content" data-aos="fade-up">
          <img src={profileImage} alt="Matias Greco" className="profile-image" />
          <h1>Matias Greco</h1>
          <h2>{t('heroTitle')}</h2>
          <p className="hero-description">
            {t('heroDescription')}
          </p>
          <a href="/Matias_Greco_Resume.pdf" download="Matias_Greco_CV.pdf" className="download-cv-btn">
            <FaDownload /> {t('descargarCV')}
          </a>
        </div>

        <div className="tech-cards" data-aos="fade-up" data-aos-delay="200">
          {tecnologias.map((tech) => (
            <TechCard key={tech.nombre} tech={tech} />
          ))}
        </div>
      </section>

      <section id="proyectos" className="projects-section">
        <h2>{t('misProyectos')}</h2>
        <div className="projects-grid">
          {proyectos.map(proyecto => (
            <ProjectCard 
              key={proyecto.id}
              proyecto={proyecto}
              onSelect={setSelectedProject}
              t={t}
            />
          ))}
        </div>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal} 
            t={t} 
          />
        )}
      </section>
      <section id="formacion" className="formacion-section">
        <h2>{t('sobreMi')}</h2>
        <div className="sobre-mi-content">
          <p className="sobre-mi-texto">
            {t('sobreMiTexto1')}
          </p>
          <p className="sobre-mi-texto">
            {t('sobreMiTexto2')}
          </p>
        </div>

        <h3 className="formacion-titulo">{t('formacionAcademica')}</h3>
        <div className="timeline">
          {formacion.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{item.icon}</div>
                <h3>{t(item.titulo)}</h3>
                <h4>{t(item.institucion)}</h4>
                <p className="periodo">{t(item.periodo)}</p>
                <p className="descripcion">{t(item.descripcion)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="contacto-section">
        <div className="contacto-container">
          <h2 data-aos="fade-up">{t('contactoTitulo')}</h2>
          <p className="contacto-descripcion" data-aos="fade-up">
            {t('contactoDescripcion')}
          </p>

          <div className="contacto-content">
            <div className="contacto-info" data-aos="fade-up">
              <div className="info-grid">
                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <h3>Email</h3>
                  <p>matiasegreco@gmail.com</p>
                </div>
                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <h3>{t('telefono')}</h3>
                  <p>+54 9 11 4069-8194</p>
                </div>
                <div className="info-item">
                  <FaLinkedin className="info-icon" />
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/matias-greco/" target="_blank" rel="noopener noreferrer">
                    {t('visitarLinkedIn')}
                  </a>
                </div>
                <div className="info-item">
                  <FaGithub className="info-icon" />
                  <h3>GitHub</h3>
                  <a href="https://github.com/m4tig11" target="_blank" rel="noopener noreferrer">
                    {t('visitarGithub')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
