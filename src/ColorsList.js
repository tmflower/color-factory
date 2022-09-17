import React from "react";
import { NavLink } from "react-router-dom";

const ColorsList = ({colors}) => {

    return (
        <div className="colors">
            <h1>Color Factory!</h1>
            <ul className="colorsList">Choose a color:
                {colors.map(color =>
                <NavLink to={`/colors/${color}`} key={color}><li className="singleColor">{color}</li></NavLink>
                )}                
            </ul>
            <NavLink to="/colors/new"><button>Add a color to the list!</button></NavLink>
        </div>
    )
}

export default ColorsList;