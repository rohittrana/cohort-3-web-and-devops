import { useState } from "react";

function Counter() {
  const [count,setCount] = useState(0);
  function increment(){
    setCount(count=>count+1);
  }
     function decrement(){
        setCount(count=>count-1);
     };
  return <>
    <h4>{count}</h4>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>   
  </>;
}
export default Counter;