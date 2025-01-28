
// this code is for step by step ;
// const fs= require('fs');
// const content = fs.readFileSync('a.txt','utf-8');
// console.log(content);

// const content2 = fs.readFileSync('b.txt','utf-8');
// console.log(content2);


// now this code async

// const fs = require('fs');
// const content = fs.readFile('a.txt','utf-8',(err,data)=>{
//                if(err){
//                               console.log(err)
//                }
//                else{
//                               console.log(data);
//                }
// })
// const conntenttwo = fs.readFile('b.txt','utf-8',(err,data)=>{
//                if(data){
//                               console.log(data);
                              
//                }
//                else{
//                               console.log(err);
//                }
// })
 

// setTimeout;

// function run (){
//                console.log('i wil run after 1s');
// }
// setTimeout(run,1000)
// console.log('i will run immedietely');



// callback function

function first(){
               console.log("First");

}
function second(){
               first();
               console.log("second");
}
function third()
{
               second();
               console.log('third');
}
const fourth = third();
console.log(fourth);