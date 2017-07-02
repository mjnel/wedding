var mongoose = require("mongoose");

var userSchema =  mongoose.Schema({
    
    userid: Number,
    name:   String,
    testData: String
});


module.exports = mongoose.model("User", userSchema);