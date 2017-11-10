var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("Ciri!!!");
});

app.get("*", function(req, res){
    res.send("Page not found");
});

app.listen("3000", "localhost", function(){
    console.log("Server has started");
});