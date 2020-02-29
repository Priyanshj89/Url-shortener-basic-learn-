const mongoose= require("mongoose");
const Course=require("./courses.model");

mongoose.connect("mongodb://localhost:27017/userinfo",{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
    //userinfo=database;
   // db.createCollection("info", function(err, result) {
     //   if (err) throw err;
       // console.log("Collection is created!"); 
   // });
    if(error)
    {
        console.log("error in starting database");
    }
    else
    {
        console.log("Successfully started the database");
    }

});