import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './NutritionRecordList.module.css';
import {
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import NutritionRecordCard from '../UI/NutritionRecordCard';
import {
  deleteNutritionalRecord,
  getNutritionalRecords,
} from '../../../api-client/nutritional-record/nutritional-record.api';
import { CancelButton } from '../../../shared/Button/CancelButton';
import { MainButton } from '../../../shared';

const NutritionRecordList = () => {
  const [foodList, setFoodList] = useState([]);
  const [foodId, setFoodId] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const navigation = useNavigate();

  useEffect(() => {
    getNutritionalRecords()
      .then((records) => {
        setFoodList(records);
      })
      .catch((error) => console.error(error));
  }, []);

  const openDeleteModalHandler = (foodId) => {
    setFoodId(foodId);
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setFoodId('');
    setOpenDialog(false);
  };

  const deleteRecordHandler = async () => {
    try {
      const response = await deleteNutritionalRecord(foodId);
      if (response.status !== 200) {
        throw new Error('Deleting record failed.');
      } else {
        const updatedList = foodList.filter((record) => record._id !== foodId);
        setFoodList(updatedList);
      }
    } catch (error) {
      console.error(error);
    }
    setFoodId('');
    setOpenDialog(false);
  };

  const editRecordHandler = (foodId) => {
    navigation(`/admin/editrecord/${foodId}`);
  };

  return (
    <React.Fragment>
      <List className={classes.nutritionRecordsList}>
        {foodList.map((foodItem) => {
          return (
            <NutritionRecordCard
              key={foodItem._id}
              id={foodItem._id}
              name={foodItem.foodName}
              onDelete={openDeleteModalHandler}
              onEdit={editRecordHandler}
            />
          );
        })}
      </List>
      <Dialog open={openDialog} onClose={closeDialogHandler}>
        <DialogTitle>Are you sure ?</DialogTitle>
        <DialogContentText>
          You are about to delete a nutritional record. Do you want to continue
        </DialogContentText>
        <DialogActions>
          <CancelButton onClick={closeDialogHandler}>Cancel</CancelButton>
          <MainButton onClick={deleteRecordHandler}>Delete</MainButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default NutritionRecordList;
