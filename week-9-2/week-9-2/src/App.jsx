import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
// useEffect(function(){
//   setInterval(function(){
//     setCount(function(count){
//       return count+1;
//       },1000)
//   })
// },[])

 
  return (

    <>
     <h1 id='text'>{count}</h1>
    </>
  )
}
export default App
