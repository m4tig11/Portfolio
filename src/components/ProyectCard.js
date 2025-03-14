import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, image, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default ProjectCard;
