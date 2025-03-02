// import { useState } from "react";

// function Login() {
//   const [count, setCount] = useState(0);
//   const [bulb, setBulb] = useState(true);

//   return (
//     <>
//       <h1>{bulb ? "Bulb is ON" : "Bulb is OFF"}</h1>
//       <button onClick={() => setBulb(!bulb)}>Toggle Bulb</button>
//     </>
//   );
// }

// export default Login;


import { useEffect, useState } from "react";

function Login(){
               const [ user, setUser] = useState(true);
               const [bulb,setCount]= useState(true);
               return(
                              <>
                              <h1>{user?"user is login" :"user is not login"}</h1>
                              <button onClick={()=>setUser(!user)}>User button</button>
                              <h1>{bulb ?"bulb is on":"bulb is OFF"}</h1>
                              <button  onClick={()=>setBulb(!bulb)}>Toggle Bulb</button>
                              </>
               )
}

