interface user{
               name:string,
               age:number,

}

function sumOfAge(user1:user,user2:user){
               return user1.age + user2.age
}

const age = sumOfAge({name:"rohit",age:23},{name:"mohit",age:43});

console.log(age);