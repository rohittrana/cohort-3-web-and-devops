// import { useState } from "react";
// import New from "./New";
// import {usePrev} from "./use-prev";
// function useCounter() {
//   const [count, setCount] = useState(0);
//   function increse() {
//     setCount(count + 1);
//   }
//   return {
//     count: count,
//     increse: increse,
//   };
// }
// function useColor() {
//   const [color, setColor] = useState("pink");
//   function changeColor(newColor) {
//     setColor(newColor);
//   }
//   return { color, changeColor };
// }
// function App() {
//   const [state, setState] = useState(0);
//   const prev = usePrev(state);

//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={() => setState((curr) => curr + 1)}> click me </button>
//       <p>the previous value was {prev}</p>
//       {/* <New></New>
//     <Counter></Counter>
//     <Counter></Counter>
//     <Background></Background> */}
//     </>
//   );
// }
// function Background() {
//   const { color, changeColor } = useColor();
//   return (
//     <div>
//       <div style={{ height: "100vh", backgroundColor: color }}></div>
//       <button onClick={() => changeColor("red")}> red</button>
//     </div>
//   );
// }
// function Counter() {
//   const { count, increse } = useCounter();
//   return (
//     <>
//       <button onClick={increse}> Increment{count}</button>
//     </>
//   );
// }
// export default App;
// import { useRef, useState, useEffect } from 'react'
// import './App.css'

// export const usePrev = (value) => {
//   const ref = useRef();

//   // Update the ref with the current value after each render
//   useEffect(() => {
//     ref.current = value;
//   }, [value]);

//   // Return the previous value (current value of ref before it is updated)
//   return ref.current;
// };

// function App() {
//   const [count, setCount] = useState(0);
//   const prevCount = usePrev(count); // Track the previous count value

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Counter with usePrev Hook</h1>
//       <p>Current Count: {count}</p>
//       <p>Previous Count: {prevCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
//     </div>
//   );
// }

// export default App

import { useEffect, useState } from 'react';
import Pratice from './Hooks/Pratice'
import PraticeTwo from './Hooks/praticetwo';
function App(){

  return(
    <>
    <PraticeTwo></PraticeTwo>
    <Pratice></Pratice>
    </>
  )
}
export default App;