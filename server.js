// Kiran Pillai
require("dotenv").config();
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

const PORT = 3000;
const server = http.createServer(app);

// Testing if connection works
mongoose.connection.once("open", () => {
  console.log("MongoDB connectioned!");
});

// logging if there is an error connecting to the MongoDB
mongoose.connection.on("error", (err) => {
  console.error(err);
});

// Middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//Connecting to MongoDB
server.listen(PORT, () => {
  console.log(` is Listening on port ${PORT}...`);
});

// Setting up routers
const employeeRouter = require("./routes/employee.router.js");
app.use("/employees", employeeRouter);

const eventsRouter = require("./routes/events.router.js");
app.use("/events", eventsRouter);
