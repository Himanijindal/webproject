const express = require("express");
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 9797;

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

// routing
app.get("/", (req, res) => {
    // res.send("welcome to web development by himani")
    res.render('index');
})
app.get("/about", (req, res) => {
    // res.send("welcome to about web development by himani")
    res.render('about');
})
app.get("/weather", (req, res) => {
    // res.send("welcome to weather web development by himani")
    res.render('weather')
})
app.get("*", (req, res) => { //agr kl ke din upr wale pages mai sai koi page match ni hota then 404 error page
    res.render("404error", {
        errorMsg: "Opps! Page Not Found"
    })
})
app.listen(port, () => {
    console.log("listening");
})