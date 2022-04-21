const NutritionalRecord = require('./nutritional-record.model');

exports.getNutritionalRecords = (req, res, next) => {
 
  const { filter } = req.query;
  console.log(filter)

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
      const foodId = newNutritionalRecord._id.toString();
      console.log(foodId);
      const foodImage = req.file;
      foodImage.filename = foodId;

      // let foodImage;

      // foodImage = req.file;
      // foodImage.filename = foodId;
      // foodImage.destination = './public/images';
      // console.log(foodImage);
    })
    .catch((error) => {
      console.error(error);
    });
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
