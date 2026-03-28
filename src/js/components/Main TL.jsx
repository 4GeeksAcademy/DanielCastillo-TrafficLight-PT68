import React, {useState} from "react";
import { Light } from "./Light";

export const TrafficLight = ()=> {
    const [activeColor, setActiveColor] = useState(null)

    const handleLightClick = (color)=> {
        setActiveColor(activeColor === color ? null : color);
    } 
     
    return (
        <div className="traffic-light-container">
            <h1>Traffic Light</h1>
            <div className="traffic-light-wrapper">
                <div className="traffic-light">
                    <Light 
                        color="red" 
                        active={activeColor === 'red'} 
                        onClick={handleLightClick}
                    />
                    <Light 
                        color="yellow" 
                        active={activeColor === 'yellow'}
                        onClick={handleLightClick}
                    />
                    <Light 
                        color="green" 
                        active={activeColor === 'green'}
                        onClick={handleLightClick}
                    />
                    
                </div>
            </div>
        </div>
    
)}