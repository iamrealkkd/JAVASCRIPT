function greet(mssg){
    console.log("Hello", `${mssg}`);
}
greet("Krishna");

function Person(name, age){
    this.name = name;
    this.age = age;
}
function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Defender", "LC");//new keyword for creating new object
console.log(myCar);

let yoCar = Car("BMW", "Li");
console.log(yoCar);

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea");
console.log("lemon");
console.log(lemonTea.describe());

function Animal(species){
    this.species = species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
console.log(dog.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("tea");
// let coffee = Drink("coffee"); will throw error