const score = 400
//console.log(score);


const balance = new Number (100)
//console.log(balance);
//console.log(typeof balance);


//console.log(balance.toString().length); // convert it into string and gives length of string
//console.log(balance.toFixed(2)); // will add point . afer the value

const numberone = 748.4684
//console.log(numberone.toPrecision(3)); // will round of the value

const otherNumber = 1748.4684
//console.log(otherNumber.toPrecision(3));

const newNumber = 1000000
// console.log(newNumber.toLocaleString());
// console.log(newNumber.toLocaleString('en-IN')); // Indian format    


// ++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5)); // absolute value - positive value
// console.log(Math.round(1.5)); 
// console.log(Math.ceil(2.5)); 
// console.log(Math.floor(1.5)); 
// console.log(Math.min(5, 7, 8 ,9 )); 
// console.log(Math.max(5, 7, 8 ,9 )); 

// console.log(Math.random());   // output in b/w 0 to 1
// console.log((Math.random()*10) + 1);
// console.log(Math.floor((Math.random()*10)) + 1);

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));
