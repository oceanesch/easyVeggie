const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nutritionalRecordSchema = new Schema({
  foodName: {
    type: String,
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
  },
  foodQuantity: {
    type: String,
    required: true,
  },
  calories: {
    type: String,
    required: true,
  },
  totalFat: {
    type: String,
    required: true,
  },
  saturatedFat: {
    type: String,
    required: true,
  },
  unsaturatedFat: {
    type: String,
    required: true,
  },
  transFat: {
    type: String,
    required: true,
  },
  cholesterol: {
    type: String,
    required: true,
  },
  totalCarbs: {
    type: String,
    required: true,
  },
  dietaryFiber: {
    type: String,
    required: true,
  },
  totalSugars: {
    type: String,
    required: true,
  },
  proteins: {
    type: String,
    required: true,
  },
  sodium: {
    type: String,
    required: true,
  },
  iron: {
    type: String,
    required: true,
  },
  potassium: {
    type: String,
    required: true,
  },
  calcium: {
    type: String,
    required: true,
  },
  zinc: {
    type: String,
    required: true,
  },
  vitaminA: {
    type: String,
    required: true,
  },
  vitaminB6: {
    type: String,
    required: true,
  },
  vitaminB12: {
    type: String,
    required: true,
  },
  vitaminC: {
    type: String,
    required: true,
  },
  vitaminD: {
    type: String,
    required: true,
  },
  vitaminE: {
    type: String,
    required: true,
  },
  vitaninK: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Nutritional Record', nutritionalRecordSchema);
