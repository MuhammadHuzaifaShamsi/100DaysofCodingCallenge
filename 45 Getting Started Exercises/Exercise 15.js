let guestList = ["Mr. Muzamil", "Sir Zia Khan", "Ms. Sadia"];


console.log("Dear " + guestList[0] + ", you are invited to a dinner party.");
console.log("Dear " + guestList[1] + ", join us for dinner. Your contributions to computer science are inspiring.");
console.log("Dear " + guestList[2] + ", we would be honored to have you at our dinner party.");


// GUEST WHO CAN'T MAKE IT
let guestWhoCantMakeIt = guestList[1];
console.log("Unfortunately, " + guestWhoCantMakeIt + " can't make it to the dinner party.");

// REPLACEMENT...
guestList[1] = "Mr. Tariq";


console.log("Dear " + guestList[0] + ", you are invited to a dinner party.");
console.log("Dear " + guestList[1] + ", join us for dinner. Your contributions to computer science are inspiring.");
console.log("Dear " + guestList[2] + ", we would be honored to have you at our dinner party.");