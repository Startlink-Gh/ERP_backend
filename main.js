const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();


const database = require('./database');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.send("Welcome to our homepage.");
})

app.get("/about", (req, res) => {
    res.send("Thanks for learning more about us");
})


app.listen(process.env.PORT);