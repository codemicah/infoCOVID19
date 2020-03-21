const express = require("express"),
            ejs          = require("ejs")

const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")


app.get("/", function(req,res){
    res.render("home")
})

app.get("/tips", function(req,res){
    res.render("tips")
})
app.get("/diagnose", function(req,res){
    res.render("diagnose");
})
app.get("/report", function(req,res){
    res.render("report")
})


app.listen(process.env.PORT || 5000, function(){
    console.log("let's save the world >>>")
})