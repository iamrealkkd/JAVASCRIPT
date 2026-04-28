const prompt = require("prompt-sync")();
let name = prompt("Enter your name ");
let x = name.length;

console.log(`@${name}${x}`);
