const express=require("express");
const mongoose= require("mongoose");

const router=express.Router();
const CourseModel=mongoose.model("Course");

//setting data in database
//router.get("/test",(req,res)=>{
//    var hell=new CourseModel()
//hell.courseName="node js"
//hell.courseId="12s"
//hell.save()
//    res.send("testing database data save");
//});


router.get("/add",(req,res)=>{
    res.render("add-course")
});

router.post("/add",(req,res)=>{
    //res.render("add-course")
    var Course=new CourseModel();
    Course.Name=req.body.Name;
    Course.Email=req.body.Email;
    Course.Phonenumber=req.body.Phonenumber;
    Course.userid=Math.ceil(Math.random()*10000000)+"";
    Course.save((err,doc)=>{
        if(err)
        {
            console.log("error saving in database");
            res.send("error occured oops");
        }
        else
        {
          res.redirect("/course/list");
        //  res.json({
        //      message:"Succefully stored into the database", 
        //  });
        }
    });
});

router.get("/list",(req,res)=>{
    CourseModel.find((err,docs)=>{
        if(!err)
        {
            console.log(docs);
            //CourseModel.save();
            res.render("list",{ data:docs})
        }
    });
    
});

router.get('/search/:nameid', (req,res,next)=>{
    var id=req.params.nameid;
    //CourseModel.index({ request: 'text' });
   // console.log(id);
   /* CourseModel.find({
        $text:{
            $search: id
        }
    },
    function(err, result) {
        console.log(result);
        if (err)
        {
            res.send("Error displaying user info/not found")
        }
        if (result) 
        {
            res.json(result)
        }
    });*/
    CourseModel.find({
        "Name": id
      },
      
      function(err, docs) {
        if (err)
        {
            res.send("Error displaying user info/not found")
        }
        if (docs) 
        {
            //console.log(docs);
           // res.json(docs)
            res.render("infodisplay",{ data:docs})
          // res.send(mongo task/yo.html)
           //res.render("list",{ data:docs})
        }
    });
      

});

module.exports =router;