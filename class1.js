// ES6+ features: let/const, arrow functions, destructuring


let x = 10;
x=5;  //is okey x value changed
const y = 20;
// y=5 // is not okey y value not changed

if(true){
    console.log("This is true");
}

const name =()=>"abid Hasan"; 


// Array destructuring
const arr = [1, 2, 3, 4, 5];    
const [first, second, ...rest] = arr; // first = 1, second = 2, rest = [3, 4, 5]


// Object destructuring
const person = {
    name: "Abid",
    age: 25,
    city: "Dhaka"
};  
const { name: personName, age: personAge, city: personCity } = person; // personName = "Abid", personAge = 25, personCity = "Dhaka" 

//object destructuring with default values
const user = { 
    name: "John",
    age: 30
};


//Nested destructuring
const userDetails = {
    user: { 
        name: "John",
        age: 30,
        address: {
            city: "New York",
            zip: "10001"
        }
    }}
const { user: { name: userName, address: { city: userCity } } } = userDetails; // userName = "John", userCity = "New York"


// async



function dataload( callback){
    setTimeout(() => {console.log("Data loaded")}, 1000);
}
dataload((data)=>{console.log(data)}); // This will log "Data loaded" after 2 seconds


// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; // Simulate success or failure
        if (success) {
            resolve("Data loaded successfully");
        } else {
            reject("Error loading data");
        }
    }, 2000);
});

promise
  .then((data) => console.log(data))
  .catch((err) => console.log(err))



  

import { add, sub, mul, div } from './ExportImport.js';
console.log("Addition:", add(5, 3)); // Addition: 8
console.log("Subtraction:", sub(5, 3)); // Subtraction: 2       
console.log("Multiplication:", mul(5, 3)); // Multiplication: 15
console.log("Division:", div(5, 3)); // Division: 1.666


