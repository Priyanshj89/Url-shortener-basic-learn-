const mongoose= require("mongoose");

var CourseSchema=new mongoose.Schema({
    courseName:{
        type:String,
        required:"required"
    },
    courseId:{
        type:String
    },
    courseDuration:{
        type:String
    },
    courseFee:{
        type:String
    },

});

mongoose.model("Course",CourseSchema);//the collection Course now will take
 //record only in this particular schema.
