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
const employeeRouter = require('./routes/employee.router.js');
app.use('/employees', employeeRouter);

const eventsRouter = require('./routes/events.router.js');
app.use('/events', eventsRouter);

const healthRouter = require('./routes/health.router.js');
app.use('health', healthRouter);

const familiesRouter = require('./routes/families.router.js');
app.use('/families', familiesRouter);

const educationRouter = require('./routes/employees.router.js');
app.use('/education', educationRouter);

const clientsRouter = require('./routes/clients.router.js');
app.use('/clients', clientsRouter);

const organziationsRouter = require('./routes/organizations.router.js');
app.use('/organizations', organziationsRouter);
