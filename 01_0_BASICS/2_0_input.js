// ==========================================
// Taking different types of input from user
// Run in VS Code using Node.js
// ==========================================

// Import prompt-sync package for taking input
// Import the prompt-sync package
// Ye package user se terminal me input lene ke liye use hota hai
// Ab prompt() function ready ho gaya
// Isse user se input le sakte hain
const prompt = require("prompt-sync")();

// ------------------------------------------
// 1. String Input
// ------------------------------------------
let userName = prompt("Enter your name: ");
console.log("String Output =", userName);

// ------------------------------------------
// 2. Integer Number Input
// ------------------------------------------
let age = Number(prompt("Enter your age: "));
console.log("Number Output =", age);

// ------------------------------------------
// 3. Decimal / Float Input
// ------------------------------------------
let price = parseFloat(prompt("Enter product price: "));
console.log("Float Output =", price);

// ------------------------------------------
// 4. Boolean Input
// ------------------------------------------
let isStudent = prompt("Are you a student? (true/false): ");
isStudent = isStudent === "true";

console.log("Boolean Output =", isStudent);

// ------------------------------------------
// 5. Multiple Inputs
// ------------------------------------------
let city = prompt("Enter city: ");
let country = prompt("Enter country: ");

console.log("City =", city);
console.log("Country =", country);

// ------------------------------------------
// 6. Array Input
// ------------------------------------------
let numbers = prompt("Enter numbers separated by space: ")
  .split(" ")
  .map(Number);

console.log("Array Output =", numbers);

// ------------------------------------------
// 7. Separate variable declaration input
// ------------------------------------------
let x; // variable declared first
x = prompt("Enter your name again: "); // input assigned later

console.log("Your name is:", x);
