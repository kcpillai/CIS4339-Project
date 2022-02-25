//CRUD Op APIs
const express = require('express');
const healthRouter = express.Router();
const healthModel = require('../models/health.models.js');





//////////////health apis

// GET health
app.get('/health', (req, res, next) => { //retrieve data from the collection using mongoose schema
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
app.post('/health', (req, res, next) => {
  healthModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Employee information is added to the database.');
    }
  });
});


// Update health records given id
app.put('/health/:id', (req, res, next) => {
  StudentModel.findOneAndUpdate(
    { healthId: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('health is edited via PUT');
        console.log('Employee has been successfully updated!', data);
      }
    }
  );
});

// DELETE Health records given id
app.delete('/employees/:id', (req, res, next) => {
  //mongoose will use studentID of document
  employeeModel.findOneAndRemove(
    { employeeId: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
        res.send('Employee has been deleted');
      }
    }
  );
});


/////// delete later
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
