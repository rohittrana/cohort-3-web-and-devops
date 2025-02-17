import { useState } from "react";
import "./App.css";
import todo from "./Todo";
function ButtonComponent({ changeColor }) {
  return (
    <>
      <button onClick={() => changeColor("red")}>Change to Red</button>
      <button onClick={() => changeColor("blue")}>Change to Blue</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <>
     <todo></todo>
      <div
        style={{
          backgroundColor: color,
          width: "100vw",
          height: "100vh",
          padding: "20px",
        }}
      >
        <button onClick={onClickHandler}>Counter {count}</button>
        <ButtonComponent changeColor={setColor} />
      </div>
    </>
  );
}

export default App;
