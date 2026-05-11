let computer = {cpu: 12};
let lenevo = {screen: "HD",
    __proto__: computer,
};
let tomhardware = {};

// console.log(`computer`, computer.__proto__);
console.log(`lenevo`, lenevo.__proto__);
console.log(`lenevo`, computer.__proto__);//null because it has not access to it

let geneCar = {
    tyres:4,
}
let tesla = {
    driver:"AI",
};
Object.setPrototypeOf(tesla, geneCar);

console.log(`tesla`, geneCar);
console.log(`tesla`, tesla);
console.log(`tesla`, tesla.tyres);
console.log(`tesla`, Object.getPrototypeOf(tesla));