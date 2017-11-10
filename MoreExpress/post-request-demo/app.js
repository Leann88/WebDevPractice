var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Cirilla", "Becca", "Tong", "Karen"];

app.listen("3000", "localhost", function(){
    console.log("Server has started");
});

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
    
});