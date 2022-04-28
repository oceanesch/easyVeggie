import React, { useEffect, useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import sharedClasses from '../../../shared/sharedCss.module.css';
import classes from './NutritionRecordList.module.css';
import {
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  StyledEngineProvider,
  Grid,
  Typography,
} from '@mui/material';
import NutritionRecordCard from '../UI/NutritionRecordCard';
import {
  deleteNutritionalRecord,
  getNutritionalRecords,
} from '../../../api-client/nutritional-record/nutritional-record.api';
import { CancelButton } from '../../../shared/Button/CancelButton';
import { MainButton, SearchBar } from '../../../shared';

const NutritionRecordList = () => {
  const [foodList, setFoodList] = useState([]);
  const [searchedFoodList, setSearchedFoodList] = useState([]);
  const [filter, setFilter] = useState('');
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

  const onChangeHandler = (searchedFood) => {
    setFilter(searchedFood);
    setSearchedFoodList(foodList);
    const newFoodList = foodList.filter((food) => {
      const regex = new RegExp(searchedFood, 'gi');
      return food.foodName.match(regex);
    });
    setSearchedFoodList(newFoodList);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS LIST
        </Typography>
        <Grid item className={sharedClasses.searchSection}>
          <SearchBar onChange={onChangeHandler} />
        </Grid>
        <RouterLink to="/admin/addnewrecord" className={sharedClasses.noLink}>
          <MainButton>ADD A NEW RECORD</MainButton>
        </RouterLink>
      </Grid>
      <List className={classes.nutritionRecordsList}>
        {!filter &&
          foodList.map((foodItem) => {
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
        {filter &&
          searchedFoodList.map((foodItem) => {
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
        <DialogContent className={classes.nutritionRecordsListModal}>
          <DialogTitle>Are you sure ?</DialogTitle>
          <DialogContentText
            className={classes.nutritionRecordsListModalContentText}
          >
            You are about to delete a nutritional record. Do you want to
            continue
          </DialogContentText>
          <DialogActions>
            <CancelButton onClick={closeDialogHandler}>Cancel</CancelButton>
            <MainButton onClick={deleteRecordHandler}>Delete</MainButton>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </StyledEngineProvider>
  );
};

export default NutritionRecordList;
