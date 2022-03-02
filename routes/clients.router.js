//CRUD Op APIs
const express = require('express');
const clientsRouter = express.Router();
const clientsModel = require('../models/clients.model.js');

//DONE
// GET clients

clientsRouter.get('/', (req, res, next) => {
  //retrieve data from the collection using mongoose schema
  clientsModel.find((error, data) => {
    if (error) {
      // using a call to next() function to send out error message if error is encountered
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//DONE
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

//DONE
// // Update clients records given id

clientsRouter.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  clientsModel.findOneAndUpdate(
    { clientID: id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('clients record is edited via PUT');
        console.log('clients record has been successfully updated!', data);
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
