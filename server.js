// Kiran Pillai
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
//Adding better logging functionality
const morgan = require('morgan');

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

app.use(morgan('dev')); //enable incoming request logging in dev mode

app.listen(PORT, () => {
  console.log('Server started listening on port: ', PORT);
});

// Testing if connection works
mongoose.connection.once('open', () => {
  console.log('MongoDB connectioned!');
});

// Setting up routers
const employeeRouter = require('./routes/employee.router.js');
app.use('/employees', employeeRouter);

const eventsRouter = require('./routes/events.router.js');
app.use('/events', eventsRouter);

const healthRouter = require('./routes/health.router.js');
app.use('/health', healthRouter);

const familiesRouter = require('./routes/families.router.js');
app.use('/families', familiesRouter);

const educationRouter = require('./routes/education.router.js');
app.use('/education', educationRouter);

const clientsRouter = require('./routes/clients.router.js');
app.use('/clients', clientsRouter);

const organziationsRouter = require('./routes/organizations.router.js');
app.use('/organizations', organziationsRouter);

const incomeRouter = require('./routes/income.router.js');
app.use('/incomes', incomeRouter);

const residencesRouter = require('./routes/residences.router.js');
app.use('/residences', residencesRouter);

const clientvaccineinfoRouter = require('./routes/clientvaccineinfo.router.js');
app.use('/clientvaccineinfo', clientvaccineinfoRouter);
