import React from 'react';
import './tarjeta-css.css';

function Tarjetas({ title, image, onClick }) {
  return (

    <div className="project-card" onClick={onClick}>
    
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default Tarjetas;
