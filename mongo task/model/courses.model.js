const mongoose= require("mongoose");

var UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:"required"
    },
    Email:{
        type:String
    },
    Phonenumber:{
        type:String
    },
    userid:{
        type:String
    },

});

mongoose.model("Course",UserSchema);//the collection Course now will take
 //record only in this particular schema.
