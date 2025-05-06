import React from "react";

// components
import StepArea from "./StepArea";
import DataCard from "./DataCard";
export default  function About(){
    const CardDataelement = DataCard[0].map( function(element, index , arr){
     
        return ( 

                <StepArea
                id={element.id}
                area_num={element.area_num}
                pretitle={element.pretitle}
                title = {element.title}
                image_src ={element.image_src}
                describtion = {element.describtion}
                reversed={element.reversed}

                />
        )
}
    )
    return(
        <div className="about_section my_section">
            <div className="container">
                {CardDataelement}
                {/* <StepArea/> */}
            </div>
        </div>
    )
}