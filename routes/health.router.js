//CRUD Op APIs -Hsiang-Ju (Julia) Chen

//declare variables
const express = require('express');
const healthRouter = express.Router();
const healthModel = require('../models/health.model.js');

//DONE
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

//DONE
// GET a specific health based on healthID
healthRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  healthModel.findOne({ clientID: id }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send('health record not found');
    } else {
      res.json(data);
    }
  });
});


//DONE
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


// DONE
// // Update health records given id

healthRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  healthModel.findOneAndUpdate(
    { clientID: id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('health record is edited via PUT');
        console.log('health record has been successfully updated!', data);
      }
    }
  );
});

//DONE
// DELETE Health records given id

healthRouter.delete('/:id', (req, res, next) => {
  //mongoose deletes record based off of document id
  healthModel.deleteOne(
    { clientID: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    }
  );
});

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
