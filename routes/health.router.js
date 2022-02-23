//CRUD Op APIs
const express = require('express');
const healthRouter = express.Router();
const healthModel = require('../models/health.models.js');

//CREATE(POST) - api endpoint that creates a health document
healthRouter.post('/', (req, res, next) => {
  healthModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Health Info successfully recorded to Database.');
    }
  });
});

//READ

//UPDATE

//DELETE

//server app

//error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
//   console.log(error.response.data);
//   console.log(error.response.status);
//   console.log(error.response.headers);
//   console.log(error.toJSON());
// });
module.exports = healthRouter;
