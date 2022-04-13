const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const multer = require('multer');
const nutritionalRecordRoutes = require('./nutritional-record/nutritional-record.router');

const app = express();

// app.use(multer({ dest: 'images' }).single('image'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

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
