const fs = require('fs-extra');
const NutritionalRecord = require('./nutritional-record.model');

exports.getNutritionalRecords = (req, res, next) => {
  const foodName = req.query.foodName || '';
  NutritionalRecord.find({ foodName: { $regex: foodName, $options: 'i' } })
    .exec()
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

exports.addNewNutritionalRecord = async (req, res, next) => {
  try {
    // save nutritional record
    const newNutritionalRecord = new NutritionalRecord(req.body);
    const nutritionalRecord = await newNutritionalRecord.save();

    // move image out of temporary folder with new name
    const nutritionalRecordId = nutritionalRecord._id.toString();
    const imageSourcePath = req.file.path;
    const imageDestinationPath = `public/images/nutritional-records/${nutritionalRecordId}`;
    await fs.move(imageSourcePath, imageDestinationPath);

    // send response to user
    res.status(200).json({ message: 'New nutritional record added.' });
  } catch (error) {
    console.error(error);
  }
};

exports.deleteNutritionalRecord = async (req, res, next) => {
  const { foodId } = req.params;

  try {
    const nutritionalRecord = await NutritionalRecord.findById(foodId);

    if (!nutritionalRecord) {
      const error = new Error('No record found');
      error.statusCode = 404;
      throw error;
      //TODO: adding another if block for verification that admin is authenticated
    } else {
      await NutritionalRecord.findByIdAndRemove(foodId);
      res.status(200).json({ message: 'Record deleted.' });
    }
  } catch (error) {
    console.error(error);
  }
};

exports.editNutritionalRecord = async (req, res, next) => {
  const { foodId } = req.params;

  try {
    const nutritionalRecord = await NutritionalRecord.findById(foodId);
    if (!nutritionalRecord) {
      const error = new Error('No record found');
      error.statusCode = 404;
      throw error;
    } else {
      await NutritionalRecord.findByIdAndUpdate(foodId, req.body);
      res.status(200).json({ message: 'Record successfully edited.' });
    }
  } catch (error) {
    console.error(error);
  }
};
