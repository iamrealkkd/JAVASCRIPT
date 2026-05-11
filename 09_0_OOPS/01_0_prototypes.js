let computer = {cpu: 12};
let lenevo = {screen: "HD",
    __proto__: computer,
};
let tomhardware = {};

console.log(lenevo.screen);
console.log(lenevo.cpu);
// console.log(`computer`, computer.__proto__);
console.log(`lenevo`, lenevo.__proto__);
console.log(`lenevo`, computer.__proto__);//null because it has not access to it

let geneCar = {
    tyres:4,
}
let tesla = {
    driver:"AI",
};
Object.setPrototypeOf(tesla, geneCar);

console.log(`tesla`, geneCar);
console.log(`tesla`, tesla);
console.log(`tesla`, tesla.tyres);
console.log(`tesla`, Object.getPrototypeOf(tesla));

// ===============================
// PROTOTYPE IN JAVASCRIPT
// ===============================

// Prototype ka simple meaning:
// "Backup object"
//
// Agar current object me koi property/method nahi mile,
// to JavaScript uske prototype object me search karta hai.
//
// Is searching system ko bolte hain:
// "Prototype Chain"


// ---------------------------------
// STEP 1 : NORMAL OBJECT
// ---------------------------------

// let computer = {
//     cpu: 12
// };

// computer object bana
//
// Structure:
//
// computer
// ┌─────────┐
// │ cpu: 12 │
// └─────────┘


// ---------------------------------
// STEP 2 : OBJECT WITH PROTOTYPE
// ---------------------------------

// let lenevo = {
//     screen: "HD",

//     // __proto__ ka matlab:
//     // lenevo ka backup/prototype object = computer

//     __proto__: computer,
// };


// Structure:
//
// lenevo
// ┌─────────────┐
// │ screen: HD  │
// └─────────────┘
//         ↓
//     computer
// ┌─────────────┐
// │ cpu: 12     │
// └─────────────┘


// ---------------------------------
// ACCESSING OWN PROPERTY
// ---------------------------------

// JS pehle current object me search karta hai

// console.log(lenevo.screen);

// Search:
//
// lenevo me screen hai ?
// YES
//
// Output:
// HD


// ---------------------------------
// ACCESSING PROTOTYPE PROPERTY
// ---------------------------------

// console.log(lenevo.cpu);

// Search:
//
// lenevo me cpu hai ?
// NO
//
// prototype(computer) me cpu hai ?
// YES
//
// Output:
// 12


// ---------------------------------
// CHECKING PROTOTYPE
// ---------------------------------

// console.log(lenevo.__proto__);

// Meaning:
// lenevo ka prototype object dikhao
//
// Output:
// { cpu: 12 }


// ---------------------------------
// EVERY OBJECT HAS INTERNAL PROTOTYPE
// ---------------------------------

// console.log(computer.__proto__);

// Output:
// Object.prototype
//
// Because every normal JS object internally
// Object.prototype se linked hota hai.


// Prototype Chain:
//
// computer
//    ↓
// Object.prototype
//    ↓
// null


// ---------------------------------
// SECOND EXAMPLE
// ---------------------------------

// let geneCar = {
//     tyres: 4
// };

// geneCar object


// let tesla = {
//     driver: "AI"
// };

// tesla object


// ---------------------------------
// SETTING PROTOTYPE MANUALLY
// ---------------------------------

// Object.setPrototypeOf(tesla, geneCar);

// Meaning:
//
// tesla ka prototype = geneCar
//
// Structure:
//
// tesla
// ┌─────────────┐
// │ driver: AI  │
// └─────────────┘
//         ↓
//     geneCar
// ┌─────────────┐
// │ tyres: 4    │
// └─────────────┘


// ---------------------------------
// ACCESSING OWN PROPERTY
// ---------------------------------

// console.log(tesla.driver);

// Search:
//
// tesla me driver hai ?
// YES
//
// Output:
// AI


// ---------------------------------
// ACCESSING PROTOTYPE PROPERTY
// ---------------------------------

// console.log(tesla.tyres);

// Search:
//
// tesla me tyres hai ?
// NO
//
// prototype(geneCar) me tyres hai ?
// YES
//
// Output:
// 4


// ---------------------------------
// GET PROTOTYPE
// ---------------------------------

// console.log(Object.getPrototypeOf(tesla));

// Meaning:
// tesla ka prototype object return karo
//
// Output:
// { tyres: 4 }


// ---------------------------------
// IMPORTANT CONCEPT
// ---------------------------------

// JavaScript property search order:
//
// 1. Current object
// 2. Prototype object
// 3. Prototype ka prototype
// 4. Continue until null
//
// Isko bolte hain:
// PROTOTYPE CHAIN


// ---------------------------------
// FINAL ONE-LINE DEFINITION
// ---------------------------------

// Prototype:
// "Ek object jisse dusre objects
// properties aur methods inherit karte hain."


// Prototype-based language:
// "Language where objects inherit
// directly from other objects."
//
// JavaScript is prototype-based.