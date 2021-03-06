require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const chalk = require('chalk');


//PORT
const port = process.env.PORT || 8000;


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//DB Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("DB CONNECTED");
    });







app.listen(port, () => {
    console.log(chalk.red('Hi ', chalk.underline('Server Started at : ' + port) + '!'));
});