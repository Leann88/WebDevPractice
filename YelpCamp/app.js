var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});

var campgrounds = [
    {name: "Salmon Creek", image: "https://assets.vg247.com/current//2017/03/the_witcher_3.jpg"},
    {name: "Granite Hill", image: "https://assets.vg247.com/current//2017/03/the_witcher_3.jpg"},
    {name: "Mountain Goat's Rest", image: "https://assets.vg247.com/current//2017/03/the_witcher_3.jpg"},
]

app.listen("3000", "localhost", function(){
    console.log("Server has started");
});

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds});
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name, image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});
