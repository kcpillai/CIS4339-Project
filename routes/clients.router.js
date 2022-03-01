//CRUD Op APIs
const express = require('express');
const clientsRouter = express.Router();
const clientsModel = require('../models/clients.model.js');


// GET clients
clientsRouter.get('/', (req, res, next) => { //retrieve data from the collection using mongoose schema
  clientsModel.find((error, data) => {
    if (error) {
      // using a call to next() function to send out error message if error is encountered
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// ADD clients records
clientsRouter.post('/', (req, res, next) => {
  clientsModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('new clients record added to the database via POST.');
    }
  });
});


// Update clients records given id
clientsRouter.put('/clients/:id', (req, res, next) => {
  clientsModel.findOneAndUpdate(
    { clientsId: req.params.id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('clients record edited via PUT');
        console.log('clients record successfully updated via PUT', data);
      }
    }
  );
});

// DELETE Health records given id
clientsRouter.delete('/clients/:id', (req, res, next) => {
  //mongoose deletes record based off of document id
  clientsModel.findOneAndRemove(
    { clientsId: req.params.id },
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

module.exports = clientsRouter;
