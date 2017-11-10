function outer() {
    var data = "closures are ";
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
console.log(counter1());
console.log(counter1());

var counter2 = counter();

console.log(counter2());
console.log(counter2());

console.log(counter1());

count; // used to illustrate count is private