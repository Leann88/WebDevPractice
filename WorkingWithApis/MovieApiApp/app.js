var request = require("request");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.listen("3000", "localhost", function(){
    console.log("Server has started");
});

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var searchTerm = req.query.search;
    request(`http://www.omdbapi.com/?s=${searchTerm}&apikey=thewdb`, function(error, response, body) {
    // body...
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("movies", {movies: data});
           
        } else {
            console.log("SOMETHING WENT WRONG!");
            console.log(error);
        }
    });
});