import { useEffect, useState } from 'react';
import classes from './NutritionRecordsList.module.css';
import { List } from '@mui/material';
import NutritionCard from '../UI/NutritionCard';
import { getNutritionalRecords } from '../../api-client/nutritional-record/nutritional-record.api';

const NutritionRecordsList = () => {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getNutritionalRecords()
      .then((records) => {
        setFoodList(records);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <List className={classes.nutritionRecordsList}>
      {foodList.map((foodItem) => {
        return <NutritionCard key={foodItem._id} name={foodItem.foodName} />;
      })}
    </List>
  );
};

export default NutritionRecordsList;
