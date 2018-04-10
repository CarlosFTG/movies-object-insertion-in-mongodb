var namesGenerator=require('./namesGenerator');

var mongoose = require('mongoose');

//var model=require('./model').Movie;

var Movie=require('./model');

//looping through the moviesObject list created in namesGenerator.js and inserting every single object in the collection
for (let i=0;i<namesGenerator.length;i++){
	
    	var movie= new Movie({movie_name:namesGenerator[i].movie_name,director:namesGenerator[i].director, year:namesGenerator[i].year});

    	movie.save(function (err) {
        if (err){
        	console.log(err)
        }else{console.log('movie '+ [i]+' inserted')}
            
      })
      

    }
