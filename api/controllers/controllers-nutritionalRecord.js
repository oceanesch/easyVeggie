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
  const { foodName, foodDescription, foodQuantity } = req.body;

  const {
    calories,
    totalFat,
    saturatedFat,
    unsaturatedFat,
    transFat,
    cholesterol,
    totalCarbs,
    dietaryFiber,
    totalSugars,
    protein,
  } = req.body.macroNutrition;

  const {
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
  } = req.body.microNutrition;

  const newNutritionalRecord = new NutritionalRecord({
    foodName,
    foodDescription,
    foodQuantity,

    calories,
    totalFat,
    saturatedFat,
    unsaturatedFat,
    transFat,
    cholesterol,
    totalCarbs,
    dietaryFiber,
    totalSugars,
    protein,

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
