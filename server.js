// Kiran Pillai
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

// Connection string for MongoDB
const MONGO_URL =
  "mongodb+srv://group14:cis4339@projectcluster.kd8kw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL);

const app = express();

const PORT = 3000;
const server = http.createServer(app);

// Testing if connection works
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
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
async function startServer() {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(` is Listening on port ${PORT}...`);
  });
}

// Setting up routers
const employeeRouter = require("./routes/employee.router.js");
app.use("/employees", employeeRouter);

const eventsRouter = require("./routes/events.router.js");
app.use("/events", eventsRouter);

startServer();
