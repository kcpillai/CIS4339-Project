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


// GET a specific education based on educationID
educationRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  educationModel.findOne({ clientID: id }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send('education record not found');
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

//DONE
// DELETE Education records given id

educationRouter.delete('/:id', (req, res, next) => {
  //mongoose deletes record based off of document id
  educationModel.deleteOne(
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

module.exports = educationRouter;
