import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './NutritionRecordsList.module.css';
import { List } from '@mui/material';
import NutritionCard from '../UI/NutritionCard';
import {
  deleteNutritionalRecord,
  getNutritionalRecords,
} from '../../../api-client/nutritional-record/nutritional-record.api';

const NutritionRecordsList = () => {
  const [foodList, setFoodList] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    getNutritionalRecords()
      .then((records) => {
        setFoodList(records);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteRecordHandler = async (foodId) => {
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
  };

  const editRecordHandler = (foodId) => {
    navigation(`/admin/editrecord/${foodId}`);
  };

  return (
    <List className={classes.nutritionRecordsList}>
      {foodList.map((foodItem) => {
        return (
          <NutritionCard
            key={foodItem._id}
            id={foodItem._id}
            name={foodItem.foodName}
            onDelete={deleteRecordHandler}
            onEdit={editRecordHandler}
          />
        );
      })}
    </List>
  );
};

export default NutritionRecordsList;
