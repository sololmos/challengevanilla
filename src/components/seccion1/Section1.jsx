import React from "react";
import "./Section1.css";
import CardSection from "./cardSection/CardSection";
import cardsData from "./data";



const Section1 =()=>{
    return(
        <div className="section1-cont">
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
    )
}
export default Section1