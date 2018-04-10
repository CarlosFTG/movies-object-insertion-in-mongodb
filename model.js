var namesGenerator=require('./namesGeneratorv3');

var mongoose = require('mongoose');

console.log(namesGenerator.length)

mongoose.connect("mongodb://localhost:27017/movies_exercise", function(err) {
    if (err){
        console.log("Error connecting with DB")
    }else{console.log('DB connected')}
});

var Schema = mongoose.Schema;
var movieSchema = new Schema({
 movie_name: String,
 director:String,
 year:Number
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports=Movie;
