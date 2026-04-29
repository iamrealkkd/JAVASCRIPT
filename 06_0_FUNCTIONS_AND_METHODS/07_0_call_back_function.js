let nums = [67, 52, 39];

// calcSquare is a function that takes a number and logs its square
let calcSquare = (num) => {
    console.log(num * num);
};

// passing calcSquare as a callback to forEach
// it will run for each element in nums
nums.forEach(calcSquare);