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
            var countries = [],
                    others = []
            for(i in newBody.countries_stat){
                var count = newBody.countries_stat[i]
                if (count.country_name == "Nigeria"){
                   nigeria = count
                   countries.push(nigeria)
                }else if(count.country_name == "Ghana"){
                    ghana = count
                    countries.push(ghana)
                }else if(count.country_name == "Benin"){
                    benin = count
                    countries.push(benin)
                }else if(count.country_name == "Chad"){
                    chad = count
                    countries.push(chad)
                }else if(count.country_name == "Niger"){
                    niger = count
                    countries.push(niger)
                }else if(count.country_name == "Gambia"){
                    gambia = count
                    countries.push(gambia)
                }else if(count.country_name == "Liberia"){
                    liberia = count
                    countries.push(liberia)
                }else if(count.country_name == "Togo"){
                    togo = count
                    countries.push(togo)
                }else if(count.country_name == "Senegal"){
                    senegal = count
                    countries.push(senegal)
                }else if(count.country_name == "Cabo Verde"){
                    cabo_verde = count
                    countries.push(cabo_verde)
                }else if(count.country_name == "Burkina Faso"){
                    burkina_faso = count
                    countries.push(burkina_faso)
                }else if(count.country_name == "Ivory Coast"){
                    ivory_coast = count
                    countries.push(ivory_coast)
                }else if(count.country_name == "Mauritania"){
                    mauritania = count
                    countries.push(mauritania)
                }else if(count.country_name == "Guinea"){
                    guinea = count
                    countries.push(guinea)
                }else if(count.country_name == "USA"){
                    usa = count
                    others.push(usa)
                }else if(count.country_name == "UK"){
                    uk = count
                    others.push(uk)
                }else if(count.country_name == "Italy"){
                    italy = count
                    others.push(italy)
                }else if(count.country_name == "China"){
                    china = count
                    others.push(china)
                }
            }

            res.render("stats", {countries: countries, others: others})
        }
    });
})


app.listen(process.env.PORT || 4000, function(){
    console.log("let's save the world >>>")
})