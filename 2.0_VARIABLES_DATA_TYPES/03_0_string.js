name = "Krishna";
//let name = "Krishna";
console.log(name);
/*
Difference between:

name = "Krishna";
let name = "Krishna";

--------------------------------------

1️⃣ name = "Krishna";

Yeh line JavaScript me ek GLOBAL VARIABLE bana deti hai
agar variable pehle declare nahi hua hai.

Example:

name = "Krishna";
console.log(name);

Output:
Krishna

But yeh BAD PRACTICE hai kyunki variable implicitly
global scope me create ho jata hai.

--------------------------------------

2️⃣ let name = "Krishna";

Yeh modern JavaScript variable declaration hai.

Example:

let name = "Krishna";
console.log(name);

Output:
Krishna

--------------------------------------

3️⃣ Problem kab aata hai

Agar tum pehle bina let variable bana do
aur phir dubara let use karo.

Example:

name = "Krishna";   // global variable create
let name = "Krishna"; // ERROR

Error:
Identifier 'name' has already been declared

Reason:
JavaScript allow nahi karta ki same scope me
ek variable ko do baar declare karo.

--------------------------------------

4️⃣ Correct way

let name = "Krishna";
console.log(name);

--------------------------------------

5️⃣ Interview One-Line Answer

'name = value' creates an implicit global variable,
while 'let name = value' properly declares a block-scoped variable.
*/