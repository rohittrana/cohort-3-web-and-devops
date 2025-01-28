// class Rectangle{
//                constructor(width,height,color){
//                               this.width= width;
//                               this.height = height;
//                               this.color= color;

//                }
//                area(){
//                               const area= this.width*this.height;
//                               return area;
//                }
//                paint(){
//                               console.log(`painting with color ${this.paint}`)
//                }
// }
// const react = new Rectangle(2,4);
// const area = react.area();
// console.log(area);

// maps
// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));

// promises
// function setTimeoutPromisified(ms){
//                return new promiseHooks(resolve=>setTimeout(resolve,ms));
// }
// function callback(){
//                console.log("3 seconds haved  passed"
//                )
// }

// setTimeoutPromisified(3000).then(callback);

// callback

// function one(){
//                setTimeout(()=>{
//                               console.log("hi")
//                },1000)
//                setTimeout(()=>{
//                               console.log("hello")
//                },2000)
//                setTimeout(()=>{
//                               console.log('hello there')
//                },3000)
// }
// one();

function delayMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

function one() {
  delayMessage("hi", 1000)
    .then(() => delayMessage("hello", 1000))
    .then(() => delayMessage("hello there", 1000));
}

one();
