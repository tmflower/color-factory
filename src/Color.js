import React from "react";
import "./App.css";
import { useParams, NavLink, Navigate } from "react-router-dom";


const Color = () => {
    const color = useParams();
    let colorName = color.color
    const noSpacesColorName = colorName.replace(/ /g, "");

    const isValidColor = (color) => {
        const result = CSS.supports("color", noSpacesColorName);
          return result;
      }

    return (
        <div>
            {!isValidColor() ? <Navigate replace to="/colors" /> : 
            <div>
                <div className="color" style={{backgroundColor: noSpacesColorName}} key={color}>           
                    <h1>Hello! I am {colorName}!
                    {colorName === "chocolate" ? <p>(But oddly, I look more like orange, don't I?</p>: ""}
                    </h1>                           
                </div>
            <NavLink to="/colors"><button>Back to All Colors</button></NavLink>
            </div>}
        </div>
    )
}

export default Color;