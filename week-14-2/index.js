function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
var age = sumOfAge({ name: "rohit", age: 23 }, { name: "mohit", age: 43 });
console.log(age);
