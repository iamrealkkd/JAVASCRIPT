// ======================================================
// JavaScript Variable Naming Rules - All in One Example
// Run this in VS Code using Node.js
// ======================================================

// ------------------------------------------------------
// 1. Variable cannot start with a digit
// ------------------------------------------------------

// let 1name = "Krishna";
// ❌ Wrong: variable name number se start nahi ho sakta

let name1 = "Krishna";
// ✅ Correct: number end me use kar sakte hain

console.log("name1 =", name1);

// ------------------------------------------------------
// 2. JavaScript is case-sensitive
// ------------------------------------------------------

let Name = "Krishna";
// Capital N

let name = "Rohan";
// Small n

// ✅ Dono different variables hain

console.log("Name =", Name);
console.log("name =", name);

// ------------------------------------------------------
// 3. Reserved keywords cannot be variable names
// ------------------------------------------------------

// let for = 10;
// ❌ Wrong: 'for' JavaScript keyword hai

let number = 10;
// ✅ Correct

console.log("number =", number);

// ------------------------------------------------------
// 4. Spaces are not allowed
// ------------------------------------------------------

// let first name = "Krishna";
// ❌ Wrong: spaces allowed nahi hai

let firstName = "Krishna";
// ✅ Correct: camelCase use karo

console.log("firstName =", firstName);

// ------------------------------------------------------
// 5. Hyphen (-) is not allowed
// ------------------------------------------------------

// let my-name = "Krishna";
// ❌ Wrong: hyphen minus operator ki tarah treat hota hai

let myName = "Krishna";
// ✅ Correct

console.log("myName =", myName);

// ------------------------------------------------------
// 6. Valid variable examples
// ------------------------------------------------------

let age = 19;
// normal variable

let totalAmount = 500;
// camelCase style

let price$ = 100;
// ✅ $ allowed hai

let _count = 5;
// ✅ underscore allowed hai

console.log("age =", age);
console.log("totalAmount =", totalAmount);
console.log("price$ =", price$);
console.log("_count =", _count);

// ------------------------------------------------------
// 7. Tips for naming variables
// ------------------------------------------------------

// ✅ Meaningful names use karo
let userName = "Krishna";
let userAge = 20;
let totalScore = 95;

console.log("userName =", userName);
console.log("userAge =", userAge);
console.log("totalScore =", totalScore);

// ------------------------------------------------------
// 8. Temporary variables (short names)
// ------------------------------------------------------

let x = 10;
// ✅ Temporary use ke liye okay

let i = 1;
// ✅ loops me common

console.log("x =", x);
console.log("i =", i);

// ======================================================
// NOTES:
// 1. Number start me nahi
// 2. Space nahi
// 3. Hyphen nahi
// 4. $ and _ allowed
// 5. Use camelCase
// 6. Meaningful names best
// ======================================================
