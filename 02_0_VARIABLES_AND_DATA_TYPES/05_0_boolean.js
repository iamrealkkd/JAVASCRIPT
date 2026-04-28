love = false;
hate = true;
console.log(love, "love", 143);
console.log(hate);
/*
PROBLEM CODE

love = false;
hate = true;

console.log(love "love" 5);   // ❌ ERROR
console.log(hate);

---------------------------------------

WHY THIS IS WRONG?

JavaScript me values ko directly side-by-side likh nahi sakte.

Example:

console.log(love "love" 5);

Parser confuse ho jata hai kyunki
JavaScript ko pata nahi hota values ka relation kya hai.

Isliye ERROR aata hai.

---------------------------------------

C++ STYLE

C++ me:

cout << love << "love" << 5;

C++ me << operator values ko output stream me bhejta hai.

JavaScript me aisa operator nahi hai.

---------------------------------------

CORRECT JAVASCRIPT METHODS

METHOD 1 (Best way)

console.log(love, "love", 5);

Output:
false love 5

console.log automatically space laga deta hai.

---------------------------------------

METHOD 2 (String concatenation)

console.log(love + " love " + 5);

Output:
false love 5

---------------------------------------

METHOD 3 (Template literals - Modern JS)

console.log(`${love} love ${5}`);

Output:
false love 5

---------------------------------------

BEST PRACTICE

Use commas inside console.log()

Example:

console.log(love, "love", 5);

---------------------------------------

INTERVIEW ONE-LINE

JavaScript does not support C++ style stream operators (<<),
so values must be separated using commas, concatenation,
or template literals inside console.log().
*/
