const NutritionalRecord = require('./nutritional-record.model');

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

exports.getNutritionalRecord = (req, res, next) => {
  const { foodId } = req.params;
  NutritionalRecord.findById(foodId)
    .then((record) => {
      res.status(200).json({
        message: 'Nutritional record successfully fetched.',
        nutritionalRecord: record,
      });
    })
    .catch((error) => console.error(error));
};

exports.addNewNutritionalRecord = (req, res, next) => {
  const newNutritionalRecord = new NutritionalRecord(req.body);
  newNutritionalRecord
    .save()
    .then(() => {
      res.status(200).json({ message: 'New nutritional record added.' });
    })
    .then(() => {
      const foodId = newNutritionalRecord._id;
    })
    .catch((error) => {
      console.error(error);
    });
};
