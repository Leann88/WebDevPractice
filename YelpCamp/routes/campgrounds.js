var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");

router.get("/", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds });
        }
    });
});

router.get("/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, campground){
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", { campground });
        }
    })
});

router.post("/", isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username 
    };
    var newCampground = { name, image, description, author };
    Campground.create(newCampground, function(err, campground){
        if (err) {
            console.log(err);
        } else {
            res.redirect("campgrounds");
        }
    });
});

router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", { campground });
        }
    });
});

router.put("/:id", checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, campground){
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});


router.delete("/:id", checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
})


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next){
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, function(err, campground){
            if(err) {
                res.redirect("back");
            } else {

                if(campground.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
}

module.exports = router;