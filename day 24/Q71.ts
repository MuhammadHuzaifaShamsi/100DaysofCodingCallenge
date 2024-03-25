// Question 71

// Example 1:
let num: number = 2;
console.log(num); // prints 2

num = 4;
console.log(num); // prints 4 now (reassigned)

// Example 2
const age: number = 18;
console.log(age); // prints 18

try{
    age = 25;
}
catch (error){
    console.log("Error: Cannot assign to 'age' because it is a constant.");
}
