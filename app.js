//packages
var express = require ("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require ("body-parser");
var methodOverride = require ("method-override");

//methods/models
var User = require ("./models/user")
var seedDB = require ("./seeds")

//app config
mongoose.connect ("mongodb://localhost/wedding");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public")); 
app.use(methodOverride("_method"));


//seed-db
seedDB();

app.get("/", function(req,res){
    res.render("landing");
    
})




app.get("/home", function(req,res){
    res.render("home");
    
})

//doing the search
app.post("/search", function(req,res){  
        User.findOne({"userid": req.body.userid}, function (err, foundUser){
            if(foundUser.testData != undefined){
                res.render("show", {user: foundUser})
            }else{
                res.render("new",{user: foundUser})
            }
        })        
})



//adding test data 

app.put("/search/:id", function(req,res){
res.send ("got here")
    //    User.findByIdAndUpdate(req.params.id, 
})








//router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
//    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedBlog){
//        if(err){
//            console.log(err);
//            res.redirect("/campgrounds");
//            
//        }else{
//            console.log("updated");
//            res.redirect("/campgrounds/"+req.params.id);
//        }
//    })



app.listen(3000, function () {
  console.log('up on localhost:3000')
})




