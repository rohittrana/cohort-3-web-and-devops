const express = require("express");
const app = express();

let requestCount = 0;

function count(req, res, next) {
  requestCount = requestCount + 1;
  console.log(`current request is ${requestCount}`);
  // if(){
  //                res.json(
  //                               {msg:"i ened the request"}
  //                )
  // }
  // else{
  //                next();
  // }
}
app.get("/sum", count, (req, res) => {});

app.listen(3000);
