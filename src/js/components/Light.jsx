import React from "react";

export const Light = ({color, active, onClick})=>{
    return(
        <div 
            className={`light ${color} ${active ? 'active': ''}`}
            onClick = { ()=> onClick(color)}
        ></div>
    )
}