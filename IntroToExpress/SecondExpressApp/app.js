var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assigment!");
});
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Meow"
    }
    var sound = sounds[animal];

    res.send(`The ${animal} says '${sound}'`);
});
app.get("/repeat/:phrase/:num", function(req, res){
    var phrase = req.params.phrase;
    var count = Number(req.params.num);
    var string = "";

    for(var i = 0; i < count; i++) {
        string += (phrase + " ");
    }

    res.send(string);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found");
});

app.listen("3000", "localhost", function(){
    console.log("Server has started");
});