// Encapsulation

class Bank {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    getBal() {
        return `$ ${this.#balance}`;
    }
}

let account = new Bank();

account.deposit(500);

console.log(account.getBal());
// console.log(account.#balance); // Invalid (private field)

//Abstraction

class CoffeeMachine {
    start(){
        //call db
        //filter value
        return `Starting the machine...`;
    }
    bewCoffee(){
        //complex calculation
        return `Brewing coffee`;
    }
}

let MyMachine = new CoffeeMachine;

console.log(MyMachine.start());
console.log(MyMachine.bewCoffee());

//Polymorphism

class Bird{

    fly(){
        return `flying...`;
    }

}

class Peng extends Bird{
    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penn = new Peng();

console.log(bird.fly());
console.log(penn.fly());


//static method(can be called by class only)

class Calculator{
    static add(a, b){
        return a + b;
    }
}

// let miniCal = new Calculator();
// console.log(miniCal.add(1, 3)); static jab tk rhega nhi chlega a wala

console.log(Calculator.add(4, 7));

//Getters and Setters

class Employee{
    constructor(name, salary){
        this.name = name;
        this._salary = salary;
    }

    get salary(){
        return this._salary;
    }

    set salary(value){
        if(value < 0){
            console.error("Invalid Salary");
        }else{
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", -68888);
console.log(emp._salary);
emp.salary = -90000;


