let Username: String = "rohit";
console.log(Username);
const age: number = 23;
console.log(age);
const InStock: boolean = true;
console.log(InStock)


interface CarInfo {
               Model: string,
               brand: string,
               year: number
}

const carInformation: CarInfo[] = [
               {
                              Model: "xs",
                              brand: "BMW",
                              year: 2014
               }
               , {
                              Model: "x",
                              brand: "tesla",
                              year: 2020
               }
]

console.log(carInformation);

const lastestCar = carInformation.filter((user) => user.year > 2016);
console.log(lastestCar);
