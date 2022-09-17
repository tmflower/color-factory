import './App.css';
import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorsList from './ColorsList';
import Color from './Color';
import ColorForm from './ColorForm';

function App() {
  const startingColors = ["olive drab", "crimson", "goldenrod", "light sea green", "chocolate", "dark salmon", "steel blue"];
  const [colors, setColors] = useState(startingColors);

  const checkIfValidColor = (color) => {
    const result = CSS.supports("color", color.color);
      return result;
  }

  const addColor = (color) => {
    let newColor = {...color, key: color } 
    checkIfValidColor(color) ? setColors(prevColors => [...prevColors, newColor.color]) : alert("Sorry, that's not a valid color")
    }

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/colors" element={<ColorsList colors={colors}/>}/>
            <Route path="/colors/:color" element={<Color />}/>
            <Route path="/colors/new" element={<ColorForm addColor={addColor}/>}/>
            <Route path="*" element={<Navigate replace to="/colors"/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
