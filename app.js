var namesGenerator=require('./namesGenerator');

var mongoose = require('mongoose');



var Model=require('./model');


mongoose.connect("mongodb://localhost:27017/movies_exercise", function(err) {
    if (err){
        console.log("Error connecting with DB")
    }else{console.log('DB connected')}
});

//looping through the moviesObject list created in namesGenerator.js and inserting every single object in the collection
for (let i=0;i<namesGenerator.length;i++){

    	var movie= new Model({movie_name:namesGenerator[i].movie_name,director:namesGenerator[i].director, year:namesGenerator[i].year});

    	movie.save(function (err) {
        if (err){
        	console.log(err)
        }else{console.log('movie '+ [i]+' inserted')}
         mongoose.connection.close()
      	

    })
    }
