// import { useState, useEffect } from "react";
// function PraticeTwo() {
//                const [post,setPost] = useState([]);
//                async 
//   return <></>;
// }
// export default PraticeTwo;


import { useState,useEffect } from "react"
function PraticeTwo(){
  const [inputval,setInputValue] = useState("");
  const debounceValue = useDebounce(inputval,200);
  function change(e){
    setInputValue(e.target.value)
  }
  useEffect(()=>{
    console.log("expensive operation")
  },[debounceValue])
  return(
    <>
    <input type="text" id="input" onChange={change} />
    </>
  )
}
export default PraticeTwo