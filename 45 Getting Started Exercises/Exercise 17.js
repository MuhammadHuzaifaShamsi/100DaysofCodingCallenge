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


// ANNOUNCING THE SAD NEWS :(
console.log("Unfortunately, our new dinner table won't arrive in time, and we can only invite two people for dinner.");

while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}


console.log("Dear " + guestList[0] + ", you're still invited to dinner. We appreciate your understanding.");
console.log("Dear " + guestList[1] + ", you're still invited to dinner. We appreciate your understanding.");


guestList.pop();
guestList.pop();

// EMPTY LIST :)
console.log("Final Guest List:", guestList);