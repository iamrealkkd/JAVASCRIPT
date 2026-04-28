let a = 5;
let b = 5;
let c = 6; //number
let d = "5"; //string -> number converts

console.log("5 == 5", a == b);
console.log("5 == 6", a == c);
console.log("5 != 6", a != c);
console.log("5 != 5", a != b);
console.log("a == d", a == d);
console.log("a === d", a === d); //strictly checks data-type also
console.log("a !== d", a !== d);
console.log("5 < 6", a < c);
console.log("6 > 5", c > a);
console.log("5 <= 5", a <= b);
