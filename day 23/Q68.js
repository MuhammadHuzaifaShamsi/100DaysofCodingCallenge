"use strict";
// Question 68
function multiplyDecimals(dec1, dec2) {
    const result = dec1 * dec2;
    return parseFloat(result.toFixed(2));
}
console.log(multiplyDecimals(0.4, 0.2));
