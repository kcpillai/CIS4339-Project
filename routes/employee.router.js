const express = require('express');
const employeeRouter = express.Router();
const employeeModel = require('../models/employees.model.js');

// GET all Employees
employeeRouter.get('/', (req, res, next) => {
  //very plain way to get all the data from the collection through the mongoose schema
  employeeModel.find((error, data) => {
    if (error) {
      //here we are using a call to next() to send an error message back
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// GET a specific employee based on employeeID
employeeRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  employeeModel.findOne({ employeeId: id }, (error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send('Employee not found');
    } else {
      res.json(data);
    }
  });
});

// Adding an Employee
employeeRouter.post('/', (req, res, next) => {
  employeeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Worker information is added to the database.');
    }
  });
});

// Updating Employee
employeeRouter.put('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  employeeModel.findOneAndUpdate(
    { employeeId: id },
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.send('Employee is edited via PUT');
        console.log('Employee has been successfully updated!', data);
      }
    }
  );
});

// Deleting an Employee based on EmployeeID
employeeRouter.delete('/:id', (req, res, next) => {
  employeeModel.deleteOne({ employeeId: req.params.id }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = employeeRouter;
