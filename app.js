require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
//var cors = require('cors');
var request = require('request');
const https = require('https');
var _ = require('lodash');              
const fspath = require('path');

const fs = require('fs');
const global = require('./global');


// package to upload image 
const multer = require('multer');
const { info } = require('console');
const { extname } = require('path');

const app = express();

/* SETTING THE TYPE OF DATA THAT CAN BE SENT TO THIS SERVER*/
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    extended: true
}));
app.use(bodyParser.text({
    extended: true
}));
// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

/* SETTING THE STATIC FOLDER OF THE SERVER */
//app.use(express.static('public'));
port = 3000

/*SETTING HOME ROUTE AND GETTING SITE URL*/
const homeRoute = "/"
const url = process.env.URL;



/* SETTING RESPONSE HEADERS FOR THE SERVER */
app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

const router = express.Router();

app.use(homeRoute, router);

app.listen(port, () => {
    console.log(`Server is running! Port: ${port}`)
})




var votingRouter=require('./routes/voting');
//Redirecting Voting endpoint to voting folder
router.use("/voting",votingRouter)
