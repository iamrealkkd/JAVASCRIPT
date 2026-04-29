const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: ")); // user se input lo

// 1 se n tak array banao
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
console.log(arr); // [1, 2, 3, ... n]

// reduce se sum nikalo
let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("Sum:", sum);

// reduce se product nikalo
let product = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("Product:", product);