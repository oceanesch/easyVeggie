const express = require('express');
const router = express.Router();
const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/temporary-hold-images/');
//   },
//   filename: (req, file, cb) => {
//     console.log(file);
//     const fileName = req.body.foodName.toLowerCase().split(' ').join('-');
//     let extension;
//     if (file.mimetype === 'image/jpeg') {
//       extension = '.jpeg';
//     } else if (file.mimetype === 'image/jpg') {
//       extension = '.jpg';
//     } else if (file.mimetype === 'image/png') {
//       extension = '.png';
//     } else {
//       throw new Error('Only .png, .jpg and .jpeg format allowed!');
//     }
//     cb(null, fileName + extension);
//   },
// });

// const upload = multer({ storage: storage });
const upload = multer({ dest: './public/images' });

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
