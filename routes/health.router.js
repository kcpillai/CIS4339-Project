//CRUD Op APIs -Hsiang-Ju Chen

//declare variables
const express = require('express');
const healthRouter = express.Router();
const healthModel = require('../models/health.model.js');

// GET health
healthRouter.get('/', (req, res, next) => { //retrieve data from the collection using mongoose schema
  healthModel.find((error, data) => {
    if (error) {
      // using a call to next() function to send out error message if error is encountered
      return next(error);
    } else {
      res.json(data);
    }
  });
});


// ADD health records
healthRouter.post('/', (req, res, next) => {
  healthModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('new health record added to the database via POST.');
    }
  });
});


// Update health records given id
healthRouter.put('/health/:id', (req, res, next) => {
  healthModel.findOneAndUpdate(
    { healthId: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('health record edited via PUT');
        console.log('health record successfully updated via PUT', data);
      }
    }
  );
});


// DELETE Health records given id
healthRouter.delete('/health/:id', (req, res, next) => {
  //mongoose deletes record based off of document id
  healthModel.findOneAndRemove(
    { healthId: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
        res.send('Health record deleted via DELETE');
      }
    }
  );
});


///// delete later maybe?
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


//server healthRouter

//error handler
// healthRouter.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
//   console.log(error.response.data);
//   console.log(error.response.status);
//   console.log(error.response.headers);
//   console.log(error.toJSON());
// });
module.exports = healthRouter;
