const e = require("express");
const express = require("express");
const employeeRouter = express.Router();
const employeeModel = require("../models/employees.model.js");

// // POST(CREATE): an endpoint that will insert an employee info into DB.
employeeRouter.post("/", (req, res, next) => {
  employeeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send("Worker information is added to the database.");
    }
  });
});
// Getting all the employees
employeeRouter.get("/", (req, res, next) => {
  employeeModel.find((error, data) => {
    if (error) {
      return next(error);
    } else if (data === null) {
      res.status(404).send("Employee information not found");
    } else {
      res.json(data);
    }
  });
});
// Getting all the employees
employeeRouter.get("/", async (req, res) => {
  try {
    const employees = await employees.find();
    res.json(employees);
  } catch (err) {
    res.status(404).send("Employee information not found");
  }
});
// Deleting an Employee
employeeRouter.delete("/:id", async (req, res, next) => {
  // find the event using the id and deletes it.
  await employeeModel.findOneAndRemove({ _id: req.params.id });
  await employeeModel.updateMany({ $pullAll: { events: [req.params.id] } });

  res.send("Event was deleted");
});
// POST(CREATE): an endpoint that will insert an employee info into DB.
// employeeRouter.post("/", async (req, res) => {
//   const employee = new employeeModel({
//     employeeId: req.body.employeeId,
//     lastName: req.body.lastName,
//     firstName: req.body.firstName,
//     organizationName: req.body.organizationName,
//     jobTitle: req.body.jobTitle,
//     employeeEmail: req.body.employeeEmail,
//     startDate: req.body.startDate,
//     endDate: req.body.endDate,
//     phoneNumber: req.body.phoneNumber,
//     clientId: req.body.clientId,
//   });
//   try {
//     const newEmployee = await employee.save;
//     res.status(200).json(newEmployee);
//   } catch (err) {
//     res.status(404).send("Employee information could not be added");
//   }
// });

module.exports = employeeRouter;
