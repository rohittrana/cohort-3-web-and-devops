import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Counter from "./Counter";
import Autoup from "./Autoup";
import ColorChanger from "./colorChanger";
import Pro from "./Pro";

function App() {
  const [count, setCount] = useState(0);
  // useEffect(function(){
  //   setInterval(function(){
  //     setCount(function(count){
  //       return count+1;
  //       },1000)
  //   })
  // },[])

  return (
    <>
    <Pro></Pro>
      <Counter></Counter>
      <h1 id="text">{count}</h1>
    </>
  );
}
// testing i am doing
export default App;
