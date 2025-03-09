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

// const { useState } = require("react")

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

// import { useEffect, useState } from 'react';
// import Pratice from './Hooks/Pratice'
// import PraticeTwo from './Hooks/praticetwo';
// function App(){

//   return(
//     <>
//     <PraticeTwo></PraticeTwo>
//     <Pratice></Pratice>
//     </>
//   )
// }
// export default App;

// import { use } from "react";
// import { useState,useEffect } from "react";

// function App(){
//   const [count, setCount]= useState(0);
//   function Increment(){
//     setCount(count+1);
//   }

//   useEffect(()=>{
//     const interval = setInterval(() => {
//         setCount((prev)=>prev+1);
//     }, 1000);
//     return()=>clearInterval(interval);
//   },[])

//   return(
//     <>
//       <button> Increment {count}</button>
//     </>
//   )
// }
// export default App

// import { useState, useEffect } from "react";

// function App() {
//   const [post, setPost] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await response.json();
//         setPost(data);
//       } catch (error) {
//         console.log(`Error is in data`, error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
//   if (loading) {
//     return <div>loading....</div>;
//   }
//   return (
//     <>
//       <>
//         {post.map((user) => (
//           <div
//             key={user.id}
//             style={{
//               display: "flex",
//               alignContent: "center",
//               listStyle: "none",
//               padding: "10px 30px",
//               gap: 40,
//             }}
//           >
//             <ol>
//               <li style={{ color: "red" }}>{user.name}</li>
//               <li style={{ color: "pink" }}>{user.email}</li>
//             </ol>
//           </div>
//         ))}
//       </>
//     </>
//   );
// }
// export default App;

// import { useState,useEffect } from "react"
// function App(){
//   function Greeting({name}){
//     return <div>hello {name} </div>

//   }
//   return(
//     <>
//     <Greeting name="rohit rana"></Greeting>
//     </>
//   )
// }
// export default App

// import { useState } from "react";
// function App(){
//   const [isToggle , setIsToggle] = useState(false);
//    return(
//     <>
//     <button onClick={()=>setIsToggle(!isToggle)}> Toggle message</button>
//     {isToggle && <p>This message is conditionally rendered!</p>}
//     </>
//   )
// }

// export default App;

import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
};
const Picture = ({ Image }) => {
  return (
    <div style={{ height: "200px", width: "400px", objectFit: "fill" }}>
      {Image}
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This card has different content!</p>
      </Card>
      <Card>
        <h2>third card</h2>
        <p>this card has different content! </p>
      </Card>

      <Picture>
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          alt="image"
        />
        <p>this is image of animal</p>
      </Picture>
    </div>
  );
};

export default App;
