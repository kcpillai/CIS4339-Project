const e = require("express");
const express = require("express");
const employeeRouter = express.Router();
const employeeModel = require("../models/employees.model.js");

// POST(CREATE): an endpoint that will insert an employee info into DB.
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

// POST(CREATE): an endpoint that will insert an employee info into DB.
// employeeRouter.post('/',async(req,res)=>)

module.exports = employeeRouter;
