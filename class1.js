// ES6+ features: let/const, arrow functions, destructuring

let x = 10;
x=5;  //is okey x value changed
const y = 20;
y=5 // is not okey y value not changed

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