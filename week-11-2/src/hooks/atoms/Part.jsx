import { useEffect, useState } from "react";

function Part(){
               const[count,setCount]= useState(0);
               const [color,setColor] = useState('');
               
return(
               <>
               <div className="fleex p-2 justify-center m-3 ">
               <button className="bg-red-500 text-yellow-100" onClick={()=>setCount(count+1)}>Incrase</button>
               <button onClick={()=>setCount(count-1)}>Decrease</button>
               <button onClick={()=>setCount(count*3)}>multiply*3</button>
               <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={()=>setCount(count*5)}>multiply  * 5</button>
               <button onClick={()=>setCount(0)}>reset</button>
               </div>
               
               <p>{count}</p>
               <h1>Devanshu</h1>
               </>
)
}
export default Part;