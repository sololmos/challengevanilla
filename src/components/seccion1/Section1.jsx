import React from "react";
import "./Section1.css";
import CardSection from "./cardSection/CardSection";
import cardsData from "./data";
import mediaelipse from "../../assets/Ellipse1.svg"
import cuartodeelipse from "../../assets/Ellipse2.svg"

const Section1 = () => {
  return (
    <div className="section1-cont">
        <div className="elipses">
        <img src={mediaelipse} alt="Media Elipse" className="media-elipse" />
        <img src={cuartodeelipse} alt="Cuarto de Elipse" className="cuarto-elipse" />

        </div>

      <div className="cards">
        {cardsData.map((card) => (
          <CardSection
            key={card.id}
            title={card.title}
            icon={card.icon}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};
export default Section1;
