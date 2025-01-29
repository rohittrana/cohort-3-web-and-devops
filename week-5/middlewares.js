const express = require('express');
const app = express();
const port = 3000;
let countValue = 0;
function count(req,res,next){
               countValue +=1;
               console.log(`number of request you done is ${countValue}`);
           
               next();
}

// app.use(count());
app.get("/sum",count,(req,res)=>{
               
               res.send(`hi there`);
               next();
})

app.get('/sumtwo',count,(req,res)=>{
             res.json({
                ans:"this is running on port 2"
             })
             
               
})

app.listen(port,()=>{

               console.log('ths is running on port 3000');
})