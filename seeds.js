var mongoose = require("mongoose");
var User = require ("./models/user");


var userData = [{
    userid: 123, 
    name: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"

    
    
},{
    userid: 456, 
    name: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
    testData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tortor mi. Nullam iaculis orci velit, ac laoreet justo euismod rhoncus. Proin lorem metus, tristique ac diam ac, porta sagittis felis. Ut vitae sagittis arcu. Duis tristique tempus urna id rutrum. Nulla bibendum ultricies mauris, sed elementum libero condimentum at. In vitae fermentum ipsum. In ultricies dignissim justo id laoreet. Sed risus nisl, sagittis quis nulla vel, semper dignissim nunc. Phasellus varius enim vel purus tincidunt scelerisque. Morbi non diam blandit, commodo eros nec, vestibulum lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut est eleifend, sollicitudin ante viverra, mattis enim. Quisque dui arcu, porttitor in ligula vitae, finibus malesuada nisi."
    
    
},{
    userid: 789, 
    name: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
    testData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tortor mi. Nullam iaculis orci velit, ac laoreet justo euismod rhoncus. Proin lorem metus, tristique ac diam ac, porta sagittis felis. Ut vitae sagittis arcu. Duis tristique tempus urna id rutrum. Nulla bibendum ultricies mauris, sed elementum libero condimentum at. In vitae fermentum ipsum. In ultricies dignissim justo id laoreet. Sed risus nisl, sagittis quis nulla vel, semper dignissim nunc. Phasellus varius enim vel purus tincidunt scelerisque. Morbi non diam blandit, commodo eros nec, vestibulum lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque ut est eleifend, sollicitudin ante viverra, mattis enim. Quisque dui arcu, porttitor in ligula vitae, finibus malesuada nisi."
    
    
}]




function seedDB(){
    //Remove all campgrounds
      User.remove({}, function(err){
          if (!err){
              console.log("database wiped");
          }
          
      })
      
    userData.forEach(function(seed){
        User.create(seed, function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log("created");
                
            }
            
        })
        
        
        
    })  
      
      
}
      






module.exports = seedDB;
                   