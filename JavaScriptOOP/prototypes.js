function Person(name){
    this.name = name;
}

Person.prototype.isInstructor = true;


var leann = new Person("Leann");
var ashley = new Person("Ashley");

leann.isInstructor = false;

console.log(leann.isInstructor);
console.log(ashley.isInstructor);

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning) {
        return "beep!";
    }
}
