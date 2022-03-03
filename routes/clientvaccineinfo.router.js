//CRUD APIs
const express = require('express');
const clientVaccineInfoRouter = express.Router();
const clientVaccineInfoModel = require('../models/clientVaccineInfo.model.js');

// only has brackets
// GET all client vaccine info
clientVaccineInfoRouter.get('/', (req, res, next) => { //retrieve data from the collection using mongoose schema
    clientVaccineInfoModel.find((error, data) => {
    if (error) {
      // using a call to next() function to send out error message if error is encountered
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// ADD client vaccine info
clientVaccineInfoRouter.post('/', (req, res, next) => {
    clientVaccineInfoModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('client vaccine info has been added.');
    }
  });
});


// Update client vaccine info with client vaccine info id
clientVaccineInfoRouter.put('/:id', (req, res, next) => {
    clientvaccineinfoModel.findOneAndUpdate(
    { clientvaccineinfoId: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('client vaccine info edited via PUT');
        console.log('client vaccine info successfully updated via PUT', data);
      }
    }
  );
});

// DELETE client vaccine info records given id
clientVaccineInfoRouter.delete('/:id', (req, res, next) => {
  //mongoose deletes record based off of document id
  clientVaccineInfoModel.findOneAndRemove(
    { clientVaccineInfoId: req.params.id },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
        res.send('client vaccine info is deleted.');
      }
    }
  );
});

module.exports = clientVaccineInfoRouter;
