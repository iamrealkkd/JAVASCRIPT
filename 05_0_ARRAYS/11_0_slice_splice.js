let arr = [10, 20, 30, 40, 50];

console.log("Original:", arr);

// ----------- SLICE -----------
let sliced = arr.slice(1, 4);
console.log("Sliced (1,4):", sliced);
console.log("After slice, original:", arr);

// ----------- SPLICE -----------
let spliced = arr.splice(1, 2, 99, 100);
console.log("Removed using splice:", spliced);
console.log("After splice, original:", arr);