let a = 6;
let b = 5;
let c = 7;

let cond1 = a > b;//true
let cond2 = a == 6;//true
let cond3 = c < b;//false
console.log("cond1 && cond2", cond1 && cond2);//both condition should true
console.log("cond1 || cond3", cond1 || cond2);//one condition should true
console.log("!(cond1)", !(cond1));//reverse the result
