let heroes = ["ironman", "spiderman", "krish", "shaktiman"];

// line by line
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
for (let hero of heroes){
    console.log(hero);
}
// same line
console.log(heroes.join(", "));

let numbers = [10, 20, 30, 40, 50];
console.log(numbers.join(", "));
