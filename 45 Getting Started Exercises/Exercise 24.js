let string1 = 'hello';
let string2 = 'world';
let number1 = 42;
let number2 = 20;
let array = ['apple', 'banana', 'orange'];

// TEST FOR EQUALITY AND INEQULITY
console.log("Are string1 and string2 equal? I predict False.");
console.log(string1 === string2);

console.log("Are string1 and string2 not equal? I predict True.");
console.log(string1 !== string2);

// TESTS USING LOWERCASE FUNCTIONS
console.log("Is string1 in lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() === 'hello');

// NUMERIC TESTS
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 !== number2);

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// TEST USING "and" AND "or" OPERATORS
console.log("Is number1 greater than 30 and number2 less than 30? I predict True.");
console.log(number1 > 30 && number2 < 30);

console.log("Is number1 greater than 50 or number2 greater than 30? I predict True.");
console.log(number1 > 50 || number2 > 30);

// TEST WHETHER AN ITEM IS IN AN ARRAY
console.log("Is 'banana' in the array? I predict True.");
console.log(array.includes('banana'));

// TEST WHETHER AN ITEM IS NOT IN AN ARRAY
console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape'));