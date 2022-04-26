import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNutritionalRecord } from '../../../api-client/nutritional-record/nutritional-record.api';
import NutritionRecordForm from '../UI/NutritionRecordForm';

const NutritionRecordCreate = () => {
  const [openSuccessSnackBar, setSuccessOpenSnackBar] = useState(false);
  const [openErrorSnackBar, setErrorOpenSnackBar] = useState(false);
  const [SuccessSnackBarMessage, setSuccessSnackBarMessage] = useState('');

  const navigate = useNavigate();

  const onSubmitHandler = async ({ uploadedImage, ...nutritionalRecord }) => {
    console.log(nutritionalRecord);
    const formData = new FormData();
    Object.entries(nutritionalRecord).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('image', uploadedImage);

    try {
      const createResponse = await createNutritionalRecord(formData);
      console.log(createResponse.data.message);
      setSuccessOpenSnackBar(true);
      setSuccessSnackBarMessage(createResponse.data.message);
      setTimeout(() => {
        setSuccessOpenSnackBar(false);
      }, 15000);
    } catch (error) {
      console.log(error);
      setErrorOpenSnackBar(true);
      setTimeout(() => {
        setErrorOpenSnackBar(false);
      }, 15000);
    }
  };

  const onCancelHandler = () => {
    navigate('/admin/nutritionalrecordslist');
  };

  return (
    <React.Fragment>
      <NutritionRecordForm
        onSubmit={onSubmitHandler}
        onCancel={onCancelHandler}
      />
      <Snackbar open={openSuccessSnackBar} autoHideDuration={15000}>
        <Alert severity="success">{SuccessSnackBarMessage}</Alert>
      </Snackbar>
      <Snackbar open={openErrorSnackBar} autoHideDuration={15000}>
        <Alert severity="error">
          Something went wrong. Record creation failed.
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default NutritionRecordCreate;
