const express = require("express");
const port = 3000;
const app = express();


function multi(a,b){
          
               return(a*b);

}

app.get('/multi',(req,res)=>{
         const a = parseInt(req.query.a);
         const b = parseInt(req.query.b);
         res.json({ans:multi(a,b)});

})

function sum(a,b){
               
               return a+b;

}
app.get("/sum",(req,res)=>{
               const a = parseInt(req.query.a);
               const b = parseInt(req.query.b);
        res.json({
               ans:sum(a,b)
        })
})

app.listen(port,()=>{
               console.log(` this is running on port ${port}`);
})