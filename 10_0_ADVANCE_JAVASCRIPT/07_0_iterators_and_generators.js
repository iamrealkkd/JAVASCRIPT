function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
let genTwo = numberGenerator();
// console.log(gen());
// console.log(numberGenerator());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);//we can call three times not more than three