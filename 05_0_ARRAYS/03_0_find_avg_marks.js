const prompt = require("prompt-sync")();

let n = Number(prompt("How many students? "));

let marks = [];

for (let i = 0; i < n; i++) {
    let input = Number(prompt(`Enter marks ${i + 1}: `));
    marks.push(input);
}

let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;

console.log("Marks:", marks.join(" "));
console.log(`avg marks of the class = ${avg}`);