let x = null;
let y = undefined
console.log(x);
console.log(y);
/*
DETAILED NOTES: null vs undefined in JavaScript

Example Code
------------------------------------------------
let x = null;
let y = undefined;

console.log(x); // null
console.log(y); // undefined

------------------------------------------------
1️⃣ WHAT IS undefined?

undefined means:
A variable exists but it has NOT been given a value yet.

JavaScript automatically assigns undefined in several cases.

Example:

let a;
console.log(a); 

Output:
undefined

Reason:
Variable declared but no value assigned.

------------------------------------------------
2️⃣ WHEN DOES undefined APPEAR?

Case 1 — Variable declared but not initialized

let a;
console.log(a); // undefined

--------------------------------

Case 2 — Function does not return anything

function test(){
}

console.log(test()); 
// undefined

--------------------------------

Case 3 — Accessing non-existing object property

let user = {name: "Krishna"};

console.log(user.age);
// undefined

--------------------------------

Case 4 — Missing function parameter

function greet(name){
    console.log(name);
}

greet(); 
// undefined

------------------------------------------------
3️⃣ WHAT IS null?

null means:
An intentional absence of value.

Programmer deliberately assigns null to show that the variable currently has no value.

Example:

let selectedUser = null;

Meaning:
User variable exists but currently no user selected.

------------------------------------------------
4️⃣ IMPORTANT DIFFERENCE

undefined → JavaScript decides  
null → Programmer decides

Example:

let a;          // undefined (JS decides)
let b = null;   // null (developer decides)

------------------------------------------------
5️⃣ TYPE DIFFERENCE

console.log(typeof null);      
// object (this is a historical JavaScript bug)

console.log(typeof undefined); 
// undefined

Important:
Even though typeof null gives "object", null is NOT an object.

------------------------------------------------
6️⃣ PRACTICAL USE CASES

🔹 Use undefined when value is not assigned yet

Example:

let data;

if(data === undefined){
    console.log("Value not assigned yet");
}

--------------------------------

🔹 Use null when you intentionally want to clear a value

Example:

let user = {
    name: "Krishna"
};

user = null; 

Meaning:
User removed / no user logged in.

------------------------------------------------
7️⃣ DATABASE / API USAGE

In APIs and databases:

null → value intentionally empty

Example JSON

{
  "middleName": null
}

Meaning:
User exists but has no middle name.

--------------------------------

undefined usually does NOT appear in JSON.

If property is undefined it is normally removed.

Example

let obj = {
   name: "Krishna",
   age: undefined
}

JSON.stringify(obj)

Result:

{
  "name": "Krishna"
}

age removed.

------------------------------------------------
8️⃣ COMPARISON BEHAVIOR

console.log(null == undefined);
// true

console.log(null === undefined);
// false

Reason:
== converts types
=== checks type + value

------------------------------------------------
9️⃣ BEST PRACTICE

Use:

undefined → default uninitialized state  
null → intentional empty value

Example:

let currentUser = null;  // intentional
let result;              // undefined until computed

------------------------------------------------
🔟 INTERVIEW LEVEL ONE-LINE ANSWER

undefined means a variable has been declared but not assigned a value,
while null represents an intentional absence of value set by the developer.
*/