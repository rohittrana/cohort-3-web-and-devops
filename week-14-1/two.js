var Username = "rohit";
console.log(Username);
var age = 23;
console.log(age);
var InStock = true;
console.log(InStock);
var carInformation = [
    {
        Model: "xs",
        brand: "BMW",
        year: 2014
    },
    {
        Model: "x",
        brand: "tesla",
        year: 2020
    }
];
console.log(carInformation);
var lastestCar = carInformation.filter(function (user) { return user.year > 2016; });
console.log(lastestCar);
