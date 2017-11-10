function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked");
    }
}

var ciri = new Dog("Ciri", 1);
var bijoux = new Dog("bijoux", 14);

ciri.bark();
bijoux.bark();