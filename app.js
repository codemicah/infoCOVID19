const express = require("express"),
            ejs          = require("ejs"),
            request = require("request"),
            bodyParser = require("body-parser")

const app = express()
app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))


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

app.get("/stats", function(req, res){
    var request = require("request");
    var options = {
    method: 'GET',
    url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
    qs: {country: 'Nigeria'},
    headers: {
        'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
        'x-rapidapi-key': 'ce6eed163cmshe72597862eb749cp10932ejsn8209333a4ca5'
    }
    };
    request(options, function (error, response, body) {
        if (error) {
            console.log(error)
        }else{
            newBody = JSON.parse(body)

            var nigeria = newBody.countries_stat[110]
            var ghana = newBody.countries_stat[116]
            var benin = newBody.countries_stat[165]
            var chad = newBody.countries_stat[177]
            var niger = newBody.countries_stat[173]
            var gambia = newBody.countries_stat[181]
            
            const countries = [nigeria, ghana, benin, chad, niger, gambia]
            res.render("stats", {countries: countries})
        }
    });
})


app.listen(process.env.PORT || 4000, function(){
    console.log("let's save the world >>>")
})