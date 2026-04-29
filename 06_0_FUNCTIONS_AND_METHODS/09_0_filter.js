let arr = [1, 2, 3, 4, 5, 6, 7];

// filter() ek naya array banata hai
// sirf unhi elements ko rakhta hai jinka condition true ho
let evenArr = arr.filter((val) => {
    return val % 2 === 0; // agar number even hai toh true return karo
});

console.log(evenArr); // [2, 4, 6]