var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var seedDB = require("./seeds");
var methodOverride = require("method-override");
var flash =require("connect-flash");

var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

var app = express();

app.use(require("express-session")({
    secret: "Im always tired :P",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.set("view engine", "ejs");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelpCamp", {useMongoClient: true});

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// seedDB();

app.listen("3000", "localhost", function(){
    console.log("Server has started");
});
