"use strict";
// Question 72
{
    let adminAge = 24;
    const userAge = 21;
    console.log(adminAge);
    console.log(userAge);
}
try {
    console.log(adminAge);
}
catch (error) {
    console.log("Error: Cannot find name 'adminAge'.");
}
try {
    console.log(userAge);
}
catch (error) {
    console.log("Error: Cannot find name 'userAge'.");
}
