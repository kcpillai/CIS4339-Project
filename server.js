// Kiran Pillai
require('dotenv').config();
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect(process.env.MONGO_URL) // Read environment varibale from .env file.
  .then(() => {
    console.log('Database connection Success!');
  })
  .catch(err => {
    console.error('Mongo Connection Error', err);
  });

const PORT = process.env.PORT || 3000;

app.use(express.json()); //allows us to access request body as req.body

app.listen(PORT, () => {
  console.log('Server started listening on port: ', PORT);
});

// Testing if connection works
mongoose.connection.once('open', () => {
  console.log('MongoDB connectioned!');
});

// logging if there is an error connecting to the MongoDB
mongoose.connection.on('error', err => {
  console.error(err);
});

// Middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

// Setting up routers
// const employeeRouter = require('./routes/employee.router.js');
// app.use('/employees', employeeRouter);

// const eventsRouter = require('./routes/events.router.js');
// app.use('/events', eventsRouter);

// const healthRouter = require('./routes/health.router.js');
// const employeesModel = require('./models/employees.model.js');
// app.use('/health', healthRouter);

// const familiesRouter = require("./routes/families.router.js");
// app.use("/families", familiesRouter);

// const educationRouter = require("./routes/employees.router.js");
// app.use("/education", educationRouter);

// const clientsRouter = require("./routes/clients.router.js");
// app.use("/clients", clientsRouter);

const employeeModel = require('./models/employees.model.js');

app.get('/employees', (req, res, next) => {
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

app.post('/employees', (req, res, next) => {
  employeeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send('Worker information is added to the database.');
    }
  });
});

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
