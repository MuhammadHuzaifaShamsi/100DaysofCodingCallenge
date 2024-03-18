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

// INFORMING ABOUT THE BIGGER DINNER TABLE
console.log("Good news! We found a bigger dinner table.");

// ADDING MORE GUESTS
guestList.unshift("Ms. Mehreen "); // ADD TO THE START
guestList.splice(3, 0, "Mr. Raafe"); // ADD TO THE MIDDLE
guestList.push("Mr. Nadeem"); // ADD TO THE END


console.log("Dear " + guestList[0] + ", you are invited to a dinner party.");
console.log("Dear " + guestList[1] + ", join us for dinner. Your contributions to computer science are inspiring.");
console.log("Dear " + guestList[2] + ", we would be honored to have you at our dinner party.");
console.log("Dear " + guestList[3] + ", join us for dinner. Your leadership is remarkable.");
console.log("Dear " + guestList[4] + ", you are invited to a dinner party. Your discoveries of nature are amazing.");
console.log("Dear " + guestList[5] + ", we would be delighted to have you at our dinner party. Your literary works are timeless.");