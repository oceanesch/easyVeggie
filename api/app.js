const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const nutritionalRecordRoutes = require('./routes/routes-nutritionalRecord');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/admin', nutritionalRecordRoutes);

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
