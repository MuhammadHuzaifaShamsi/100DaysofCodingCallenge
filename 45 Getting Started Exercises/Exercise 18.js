let placesToVisit = ["Tokyo", "Paris", "London", "New York", "Great Wall of China"];

console.log("Original Order:", placesToVisit);

console.log("Alphabetical Order:", [...placesToVisit].sort());

console.log("Original Order (unchanged):", placesToVisit);

console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());

console.log("Original Order (unchanged):", placesToVisit);



placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);

placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);

placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);

placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);