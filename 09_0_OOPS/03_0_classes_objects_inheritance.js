let car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2026,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
// console.log(car.start());

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.drive());

function Person(name, age){
    this.name = name;
    this.age = age;
}

let john = new Person("John Deo", 20);
// console.log(john.name);

function Animal(type){
    this.type = type;
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.kkd = function(){
     return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.kkd());