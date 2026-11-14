const add = (a, b) => {
    return a + b;
};
console.log(add(3, 8));

let mul = (a, b) => {
    return a * b;
};
console.log(mul(3, 8));

const calcAge = function(birthYear){
    return 2037 - birthYear;
}
//calcAge(500);
console.log(calcAge(500));
const calc = birthYear => 2037 - birthYear;
const age = calc(800);
console.log(age);

const yearR = (birth, name) => {
    const age = 2037 - birth;
    const ret = 65 - age;
    return `${name} retires in ${ret} years`;
}
console.log(yearR(2000, "Krishna"));