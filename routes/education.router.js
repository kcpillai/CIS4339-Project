//CRUD Op APIs
const express = require('express');
const educationRouter = express.Router();
const educationModel = require('../models/education.model.js');

//DONE
// GET education
educationRouter.get('/', (req, res, next) => { //retrieve data from the collection using mongoose schema
  educationModel.find((error, data) => {
    if (error) {
      // using a call to next() function to send out error message if error is encountered
      return next(error);
    } else {
      res.json(data);
    }
  });
});
//DONE
// ADD education records
educationRouter.post('/', (req, res, next) => {
  educationModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('new education record added to the database via POST.');
    }
  });
});


//DONE
// // Update education records given id

educationRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  educationModel.findOneAndUpdate(
    { clientID: id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('education record is edited via PUT');
        console.log('education record has been successfully updated!', data);
      }
    }
  );
});

// DELETE Education records given id
educationRouter.delete('/education/:id', (req, res, next) => {
  //mongoose deletes record based off of document id
  educationModel.findOneAndRemove(
    { educationId: req.params.id },
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

module.exports = educationRouter;
