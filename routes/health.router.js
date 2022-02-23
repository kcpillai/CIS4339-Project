//CRUD Op APIs
const express = require("express");
const mongoose = require("mongoose"); 
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
// delete later- const health = require("../../CFC-main/project-cis_4339_project_43-main/backend/models/health");

//CREATE(POST) - api endpoint that creates a health document 
app.post('/', (req, res, next) => {

    healthRouter.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.send('Health Info successfully recorded to Database.');
        }
    });
});



//READ


//UPDATE


//DELETE


//server app
app.listen(PORT, () => {
    console.log("Server started and listening on port: ", PORT);
  });


 //error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.toJSON());
});