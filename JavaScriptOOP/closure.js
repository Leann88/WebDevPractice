function outer() {
    var data = "closures are";
    return function inner() {
        var innerData = "awesome";
        return data + innerData;
    }
}

console.log(outer());
console.log(outer()());

function counter() {
    var count = 0;
    return function(){
        return ++count;
    }
}

var counter1 = counter();
counter1();
counter1();

var counter2 = counter();

counter2();
counter2();

counter1();

count;