// QUESTION: 46

let myLaptop = {
    make: "Dell",
    model: "Latitude 7480",
    year: 2020,
    describe: function() {
        console.log(`This Laptop is of ${this.make}: ${this.model}, made in ${this.year}.`)
    }
};

myLaptop.describe();
