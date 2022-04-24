const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: './public/images/temp' });

const nutritionalRecordController = require('./nutritional-record.controller');

router.get(
  '/nutritionalrecord/:foodId',
  nutritionalRecordController.getNutritionalRecord
);

router.get(
  '/nutritionalrecord',
  nutritionalRecordController.getNutritionalRecords
);

router.post(
  '/nutritionalrecord',
  upload.single('image'),
  nutritionalRecordController.addNewNutritionalRecord
);

router.delete(
  '/nutritionalrecord/:foodId',
  nutritionalRecordController.deleteNutritionalRecord
);

router.patch(
  '/nutritionalrecord/:foodId',
  nutritionalRecordController.editNutritionalRecord
);

module.exports = router;
