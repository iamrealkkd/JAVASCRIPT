const prompt = require("prompt-sync")();
let age = Number(prompt("Enter your age "));
let mode = prompt("Enter light or dark ");
let colour;
let num = Number(prompt("Enter your num "));

if (age >= 18) {
  console.log("You Can Vote");
} else {
  console.log("You Can't Vote");
}
if (mode == "dark") {
  colour = "black";
} else if (mode == "light") {
  colour = "white";
} else {
  colour = "pink";
}
console.log(colour);
if(num % 2 == 0){
  console.log("Even");
}else{
  console.log("Odd");
}
