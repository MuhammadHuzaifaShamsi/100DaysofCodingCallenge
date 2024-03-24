"use strict";
// Question 69
function divideAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return {
        Quotient: quotient,
        Remainder: remainder
    };
}
console.log(divideAndRemainder(10, 3));
