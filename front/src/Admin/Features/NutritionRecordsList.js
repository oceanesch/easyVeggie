import classes from './NutritionRecordsList.module.css';
import { Box, List, ListItem } from '@mui/material';
import NutritionCard from '../UI/NutritionCard';

const NutritionRecordsList = () => {
  const foodList = [
    { key: 1, name: 'Broccoli' },
    { key: 2, name: 'Asparagus' },
    { key: 3, name: 'Cinnamon' },
    { key: 4, name: 'Pomegranate' },
    { key: 5, name: 'Grapefruit' },
    { key: 6, name: 'Spinach' },
    { key: 7, name: 'Sweet Potatoes' },
    { key: 8, name: 'Carrot' },
    { key: 9, name: 'Red Bell Pepper' },
    { key: 10, name: 'Tofu' },
  ];

  return (
    <List className={classes.nutritionRecordsList}>
      {foodList.map((foodItem) => {
        return <NutritionCard key={foodItem.key} name={foodItem.name} />;
      })}
    </List>
  );
};

export default NutritionRecordsList;
