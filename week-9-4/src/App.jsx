import { useState } from 'react'

function App() {


  return (
    <div style={{display:"flex",background:"gray"}}>
      <Card>
        <div style={{color:"Green"}}> What do you want to post</div>
      </Card>
      <Card>
        <div>
        hi there
        </div>
      
      </Card>
    </div>
  )
}
function Card({children}){
  return(
    <div style={{background:"white",borderRadius:10,color:"black",padding:10,margin:10}}>
         {children}
         {children}
    </div>
  )
}
export default App
