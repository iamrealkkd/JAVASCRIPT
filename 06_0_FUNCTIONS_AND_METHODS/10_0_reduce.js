let arr = [1, 2, 3, 4];

// reduce() saare elements ko ek single value me convert karta hai
// res = accumulator (running total)
// curr = current element
const output = arr.reduce((res, curr) => {
    return res + curr; // running total me current element add karo
});

console.log(output); // 10

let nums = [5, 3, 9, 1];
let max = nums.reduce((res, curr) => curr > res ? curr : res);
console.log(max); // 9