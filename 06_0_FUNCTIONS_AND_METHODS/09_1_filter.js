let marks = [87, 93, 64, 99, 86];

let result = marks.filter((val) => {
    return val >= 90;
});

console.log(result); // [93, 99]