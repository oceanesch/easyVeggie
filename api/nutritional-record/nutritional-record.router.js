const express = require('express');
const router = express.Router();

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
  nutritionalRecordController.addNewNutritionalRecord
);

module.exports = router;
