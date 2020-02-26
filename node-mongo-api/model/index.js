const mongoose= require("mongoose");
const Course=require("./courses.model");

mongoose.connect("mongodb://localhost:27017/Edureka",{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
    if(error)
    {
        console.log("error in starting database");
    }
    else
    {
        console.log("Successfully started the database");
    }

});