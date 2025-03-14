import React from 'react';
import { FaCertificate, FaGraduationCap, FaUniversity } from 'react-icons/fa';
import './SobreMi.css';

function SobreMi() {
  const educacion = [
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
    <div className="sobre-mi-container">
      <h2 data-aos="fade-up">Formación Académica</h2>
      
      <div className="timeline">
        {educacion.map((item, index) => (
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
    </div>
  );
}

export default SobreMi; 