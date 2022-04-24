const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nutritionalRecordRoutes = require('./nutritional-record/nutritional-record.router');

// instantiate express application
const app = express();

// set bodyParser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// set CORS policy middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// set static server for public files
app.use(express.static('public'));

// set nutritional records routes
app.use('/admin', nutritionalRecordRoutes);

// handling errors middleware
app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// connection to DB
mongoose
  .connect(
    'mongodb+srv://Oceane:easyveggiepassword@easyveggie.ob7oc.mongodb.net/EasyVeggie?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(8080);
  })
  .catch((error) => {
    console.log(error);
  });
