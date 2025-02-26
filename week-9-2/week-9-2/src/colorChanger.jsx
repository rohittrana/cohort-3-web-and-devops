import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("blue");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}>
      <h2>The background is {color}</h2>
      <button onClick={() => changeColor("red")}>Change to Red</button>
      <button onClick={() => changeColor("green")}>Change to Green</button>
      <button onClick={() => changeColor("yellow")}>Change to Yellow</button>
    </div>
  );
}

export default ColorChanger;
