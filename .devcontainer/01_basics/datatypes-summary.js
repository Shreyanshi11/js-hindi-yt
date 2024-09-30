// Primitive

// String, Number, Boolean, Null, Undefined, BigInt, Symbol

//  Js - Dynamically language.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 15656242656n



// Reference (Non- Primitive)

// Array, Objects, Functions

const name = ["Shreyanshi", "Nensi", "Ripal"];

let myObj = {
    name: "Shreyanshi",
    age: 24,
}


const myFunction = function(){
    console.log("Hello World")
}

//console.log(typeof myFunction);

// reference link -  https://262.ecma-international.org/5.1/#sec-11.4.3








// ++++++++++++++++

// Stack (Primitive) - "output- Copy" ,  Heap (Non-Primitive) - "output- reference"

let myYoutubename = "shreyanshikhatri"

let anotherName = myYoutubename

anotherName = "Rinky"

console.log (myYoutubename);
console.log (anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@bank",
}

let userTwo = userOne

userTwo.email = "new@gmail.com"

console.log (userOne.email);
console.log (userTwo.email);