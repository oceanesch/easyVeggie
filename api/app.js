const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.status(200).json({message:'Success!'})
})

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
