// QUESTION: 46
var myLaptop = {
    make: "Dell",
    model: "Latitude 7480",
    year: 2020,
    describe: function () {
        console.log("This Laptop is of ".concat(this.make, ": ").concat(this.model, ", made in ").concat(this.year, "."));
    }
};
myLaptop.describe();
