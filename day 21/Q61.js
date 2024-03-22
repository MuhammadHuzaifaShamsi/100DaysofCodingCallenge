"use strict";
// Question 61
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Bike"] = 0] = "Bike";
    vehicleType[vehicleType["Car"] = 1] = "Car";
    vehicleType[vehicleType["Bus"] = 2] = "Bus";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Bike);
console.log(vehicleType.Car);
console.log(vehicleType.Bus);
