"use strict"; // Enables strict mode in JavaScript

let hasDriversL = false;
const passTest = true;

if (passTest) hasDriverL = true;

// IMPORTANT NOTES:
// 1. We declared hasDriversL but mistakenly wrote hasDriverL.
// 2. Without strict mode, JavaScript allows this assignment
//    and creates an accidental global variable (in a classic script).
// 3. With strict mode, it throws a ReferenceError because
//    hasDriverL was never declared.
// 4. Strict mode helps catch spelling mistakes and common bugs.
// 5. Strict mode does NOT require explicit data type declarations.

// Corrected line:
// if (passTest) hasDriversL = true;

if (hasDriversL) console.log("I can Drive :D");
