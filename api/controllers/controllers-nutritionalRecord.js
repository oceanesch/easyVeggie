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
  const {
    foodName,
    foodDescription,
    foodQuantity,
    calories,
    totalFat,
    saturatedFat,
    transFat,
    cholesterol,
    totalCarbs,
    dietaryFiber,
    totalSugars,
    proteins,
    sodium,
    iron,
    potassium,
    calcium,
    zinc,
    vitaminA,
    vitaminB6,
    vitaminB12,
    vitaminC,
    vitaminD,
    vitaminE,
    vitaminK,
  } = req.body;

  const newNutritionalRecord = new NutritionalRecord({
    foodName,
    foodDescription,
    foodQuantity,
    calories,
    totalFat,
    saturatedFat,
    transFat,
    cholesterol,
    totalCarbs,
    dietaryFiber,
    totalSugars,
    proteins,
    sodium,
    iron,
    potassium,
    calcium,
    zinc,
    vitaminA,
    vitaminB6,
    vitaminB12,
    vitaminC,
    vitaminD,
    vitaminE,
    vitaminK,
  });

  newNutritionalRecord
    .save()
    .then(() => {
      res.status(200).json({ message: 'New nutritional record added.' });
    })
    .catch((error) => {
      console.error(error);
    });
};
