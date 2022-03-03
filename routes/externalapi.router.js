const express = require('express');
//const eventsRouter = express.Router();
const axios = require('axios');

// get all data
axios
  .get('https://cis-4339.herokuapp.com/api/v1/data')
  .then(response => {
    console.log(response.data.status);
    // console.log(response.data);
    res.send(response.data.status);
  })
  .catch(error => {
    console.log(error);
  });

// get data from specific client

axios
  .get(
    'https://cis-4339.herokuapp.com/api/v1/data/{{first_name}}/{{last_name}}/{{phone_number}}'
  )
  .then(response => {
    console.log(response.data.status);
    // console.log(response.data);
    res.send(response.data.status);
  })
  .catch(error => {
    console.log(error);
  });
