import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ColorForm = ({addColor}) => {  

    let INITIAL_STATE = {
        color: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {color} = formData;
        addColor({color});
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="colorForm" onSubmit={handleSubmit}>
            <h1>Add a Color to the List!</h1>
            <label htmlFor="color">Add a new color:
                <input 
                    type="text"
                    name="color"
                    value={formData.color}                    
                    onChange={handleChange}
                    />
            </label>
            <button>Add color</button>
            <NavLink to="/colors"><p>Back to All Colors</p></NavLink>
        </form>
    )
}

export default ColorForm;