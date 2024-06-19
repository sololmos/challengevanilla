import React from "react";
import "./CardSection.css";
import Icon from "../../../assets/Cohete.svg"

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

// const CardSection = ()=>{
//     return(
//         <div className="card-container">
//             <img className="card-image" src={Icon} alt="icon"></img>
//             <h2 className="card-title">Item 1</h2>
//             <div className="card-text">
//                 <p>Aún nuestro sitio está en cosntrucción (somos muy perfeccionistas jeje).
//                 Mientras puedes navegar en nuestro sitio antiguo.</p>
//             </div>
            

//         </div>
//     )
// };

export default CardSection;
