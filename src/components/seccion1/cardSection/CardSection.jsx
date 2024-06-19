import React from "react";
import "./CardSection.css";

const CardSection = ({ title, icon, text }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={icon} alt="icon" />
      <h2 className="card-title">{title}</h2>
      <div className="card-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardSection;
