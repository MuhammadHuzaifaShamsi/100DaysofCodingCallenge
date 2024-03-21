"use strict";
// Question 60
const userProfile = () => {
    let name = "Ahmed";
    let age = 18;
    return {
        displayInfo() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
};
userProfile().displayInfo();
