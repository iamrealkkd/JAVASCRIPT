let nums = [67, 52, 39];

// map() creates a BRAND NEW array by transforming each element
// val * 2 means every number gets doubled
let newArr = nums.map((val) => {
    return val * 2;
});

console.log(newArr); // [134, 104, 78]

// calcSquare is just sitting here separately (not connected to map above)
let calcSquare = (num) => {
    console.log(num * num);
};