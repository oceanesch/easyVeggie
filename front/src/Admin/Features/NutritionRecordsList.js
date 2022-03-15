import classes from './NutritionRecordsList.module.css';
import { Box } from '@mui/material';
import NutritionCard from '../UI/NutritionCard';

const NutritionRecordsList = () => {
  const foodList = [
    { name: 'Broccoli' },
    { name: 'Asparagus' },
    { name: 'Cinnamon' },
    { name: 'Pomegranate' },
    { name: 'Grapefruit' },
    { name: 'Spinach' },
    { name: 'Sweet Potatoes' },
    { name: 'Carrot' },
    { name: 'Red Bell Pepper' },
    { name: 'Tofu' },
  ];

  return (
    <Box className={classes.nutritionRecordsList}>
      {foodList.map((foodItem) => {
        return <NutritionCard name={foodItem.name} />;
      })}
    </Box>
  );
};

export default NutritionRecordsList;
