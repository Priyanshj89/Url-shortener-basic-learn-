const connection = require("./model");

const express= require("express");
const application=express();
const path=require("path");
const expressHandlerbars=require("express-handlebars");
const bodyparser=require("body-parser");

const CourseController= require("./controllers/courses");

application.use(bodyparser.urlencoded({
      extend:true,
}));

application.set("views",path.join(__dirname,"/views/"));

application.engine("hbs",  expressHandlerbars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}));

application.set("view engine","hbs");

application.get("/",(req,res)=>{
    //res.send("<h1>HELLO WORLD<h1>")
    res.render("index",{})
});

application.use("/course",CourseController);

application.listen("5000", ()=>{
    console.log("localhost 5000 started");
});