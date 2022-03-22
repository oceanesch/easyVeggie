const express = require('express');
const router = express.Router();

const nutritionalRecordController = require('../controllers/controllers-nutritionalRecord');

router.get(
  '/nutritionalrecord',
  nutritionalRecordController.getNutritionalRecords
);

router.post(
  '/nutritionalrecord',
  nutritionalRecordController.addNewNutritionalRecord
);

module.exports = router;
