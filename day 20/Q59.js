"use strict";
// Question 59
let makeAdder = (value) => {
    return function (number) {
        return number + value;
    };
};
let addTwo = makeAdder(2);
console.log(addTwo(8));
