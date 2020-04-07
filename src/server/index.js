require('dotenv').config();

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// set aylien API credentias
const aylienapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

// Routes
app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

app.get('/api', (req, res) => {
  let { url } = req.query;
  aylienapi.sentiment(url, (err, data) => {
    if (!err) {
      res.send(data);
    }
  });
});

// designates what port the app will listen to for incoming requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
