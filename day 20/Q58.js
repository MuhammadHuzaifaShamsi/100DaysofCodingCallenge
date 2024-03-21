"use strict";
// Question 58
function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let average = sum / scores.length;
    console.log(average);
}
calculateAverage([90, 89, 90, 76, 78]);
