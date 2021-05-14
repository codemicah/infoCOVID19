require("dotenv");
const express = require("express");
const ejs = require("ejs");
const request = require("request");

const { X_RAPIDAPI_KEY, API_URL, X_RAPIDAPI_HOST, COUNTRY } = process.env;

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/tips", (req, res) => {
  res.render("tips");
});
app.get("/diagnose", (req, res) => {
  res.render("diagnose");
});
app.get("/report", (req, res) => {
  res.render("report");
});

app.get("/stats", (req, res) => {
  const options = {
    method: "GET",
    url: API_URL,
    qs: { country: COUNTRY },
    headers: {
      "x-rapidapi-host": X_RAPIDAPI_HOST,
      "x-rapidapi-key": X_RAPIDAPI_KEY,
    },
  };
  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      const newBody = JSON.parse(body);
      //initialise  countries
      const countries = [];
      const others = [];
      for (i in newBody.countries_stat) {
        const count = newBody.countries_stat[i];

        switch (count.country_name) {
          case "Nigeria":
            countries.push(count);
            break;
          case "Ghana":
            countries.push(count);
            break;
          case "Benin":
            countries.push(count);
            break;
          case "Chad":
            countries.push(count);
            break;
          case "Niger":
            countries.push(count);
            break;
          case "Gambia":
            countries.push(count);
            break;
          case "Liberia":
            countries.push(count);
            break;
          case "Togo":
            countries.push(count);
            break;
          case "Senegal":
            countries.push(count);
            break;
          case "Cabo Verde":
            countries.push(count);
            break;
          case "Burkina Faso":
            countries.push(count);
            break;
          case "Ivory Coast":
            countries.push(count);
            break;
          case "Mauritania":
            countries.push(count);
            break;
          case "Guinea":
            countries.push(count);
            break;
          case "USA":
            others.push(count);
            break;
          case "UK":
            others.push(count);
            break;
          case "Italy":
            others.push(count);
            break;
          case "China":
            others.push(count);
            break;
          case "Spain":
            others.push(count);
            break;
          case "S. Korea":
            others.push(count);
            break;

          default:
            break;
        }
      }

      res.render("stats", { countries: countries, others: others });
    }
  });
});

app.listen(process.env.PORT || 4000, function () {
  console.log("let's save the world >>>");
});
