const NutritionalRecord = require('../models/nutritionalRecord');

exports.getNutritionalRecords = (req, res, next) => {
  NutritionalRecord.find()
    .then((records) => {
      res.status(200).json({
        message: 'Nutritional records successfully fetched.',
        nutritionalRecords: records,
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

exports.addNewNutritionalRecord = (req, res, next) => {
  console.log(req.body);
  const newNutritionalRecord = new NutritionalRecord(req.body);

  newNutritionalRecord
    .save()
    .then(() => {
      res.status(200).json({ message: 'New nutritional record added.' });
    })
    .catch((error) => {
      console.error(error);
    });
};
