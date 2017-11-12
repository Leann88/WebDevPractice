var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/05/17/bf/75/panorama-campsite.jpg",
        description: "A nice campground"
    },
    {
        name: "Granite Hill", 
        image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
        description: "This is a huge Granite hill, no bathrooms. No water. Beatiful Granite"
    },
    {
        name: "Tranquil Forest", 
        image: "https://media-cdn.tripadvisor.com/media/photo-s/05/c6/94/80/red-squirrel-campsite.jpg",
        description: "Camp in the wilderness surrounded by beautiful trees"
    }
];

function seedDB() {
    // body...
    Campground.remove({}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log("Removed Campgrounds!");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Add a campground");
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created a comment");
                                }
                        });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;

