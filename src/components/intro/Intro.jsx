import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <div className="intro-text-pre-title">TEXTO PREVIO AL TÍTULO</div>
        <h1 className="intro-title">Título banner principal</h1>
        <button className="btn btn-primary">Enviar</button>
      </div>
    </div>
  );
};

export default Intro;
