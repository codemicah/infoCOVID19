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

            //initialise  countries then change later
            var nigeria = "",
                    ghana = "",
                    benin  = "",
                    chad = "",
                    niger = "",
                    gambia = "",
                    burkina_faso = "",
                    ivory_coast = "",
                    mauritania = "",
                    togo = "",
                    liberia = "",
                    cabo_verde = "",
                    senegal = "",
                    guinea  = ""

            for(i in newBody.countries_stat){
                var count = newBody.countries_stat[i]
                if (count.country_name == "Nigeria"){
                   nigeria = count
                }else if(count.country_name == "Ghana"){
                    ghana = count
                }else if(count.country_name == "Benin"){
                    benin = count
                }else if(count.country_name == "Chad"){
                    chad = count
                }else if(count.country_name == "Niger"){
                    niger = count
                }else if(count.country_name == "Gambia"){
                    gambia = count
                }else if(count.country_name == "Liberia"){
                    liberia = count
                }else if(count.country_name == "Togo"){
                    togo = count
                }else if(count.country_name == "Senegal"){
                    senegal = count
                }else if(count.country_name == "Cabo Verde"){
                    cabo_verde = count
                }else if(count.country_name == "Burkina Faso"){
                    burkina_faso = count
                }else if(count.country_name == "Ivory Coast"){
                    ivory_coast = count
                }else if(count.country_name == "Mauritania"){
                    mauritania = count
                }else if(count.country_name == "Guinea"){
                    guinea = count
                }
            }

            const countries = [nigeria, ghana, benin, chad, niger, gambia, guinea, burkina_faso, liberia, senegal, cabo_verde, togo, mauritania,ivory_coast]
            res.render("stats", {countries: countries})
        }
    });
})


app.listen(process.env.PORT || 4000, function(){
    console.log("let's save the world >>>")
})