const name = "Shreyanshi"
const age  = 24

// console.log(name + age + " years old");  --> Old method

//console.log(`${name} is ${age} years old.`);

const personName = new String('Shreyu-Khatri-R')

// console.log(personName);
// console.log(personName [0]);
// console.log(personName.__proto__);


// console.log(personName.length);
// console.log(personName.toUpperCase());
// console.log(personName.charAt(2));
// console.log(personName.indexOf('r'));



const newString = personName.substring(0, 4)
// console.log(newString);

// not included last character "4th numbered" , not accept negative values


const anotherString = personName.slice(0, 4)
// console.log(anotherString);

// accept negative values


const newStringOne = "  Shreyu   "
// console.log(newStringOne);
// console.log(newStringOne.trim());
 
// trim will remove all the spaces/white-spaces.


const url= "https://google.com/test%20url"

// console.log(url.replace('%20', '-'));

// console.log(url.includes('test'))

console.log(personName.split('-'));