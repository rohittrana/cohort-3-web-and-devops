// console.log("hello rohit rana ")
// let a :number =  343;
// console.log(a);

// function greet(name:string):string{
//                return(`hello world ${name}`);
// }
// console.log(greet("harkirat"));

// function add(a:number ,b :number):number{
//                return a+b;
// }
// console.log(add(23,26));


// function isLegal(age:number):string{
//                if(age>18){
//                               return( "you r elgible to vote");
//                }
//                else{
//                               return("you are not elgible to vote")
//                }
// }

// console.log(isLegal(23));


// function checker(){
//                setTimeout(()=>{
//                               console.log("hey there");
//                },1000);
// }

// checker();



interface User {
               name: string,
               age: number,
               address: string
}

const user: User[] = [
               {
               name: "rohit",
                              age : 23,
                                             address : "h.no 133 b block",},

{
               name: "mohit",
                              age : 23,
                                             address : "h.no 133 b block",
               },
]


interface studentId{
               name:string,
               age:number,
               address:string,
               rollNo:string,

}
const student :studentId[]=[
               {name:"rohit",
               age:23,
               address:"h.no 122",
               rollNo:"21BCE11343"
               },
               {
                              name:"kirat",
                              age:23,
                              address:"xtydf",
                              rollNo:'21BCE2323'
               }
]

console.log(student);
console.log(user);