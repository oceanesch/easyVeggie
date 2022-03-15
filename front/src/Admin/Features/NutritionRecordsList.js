import classes from './NutritionRecordsList.module.css';
import { Box } from '@mui/material';
import NutritionCard from '../UI/NutritionCard';

const NutritionRecordsList = () => {
  return (
    <Box className={classes.nutritionRecordsList}>
      <NutritionCard />
      <NutritionCard />
    </Box>
  );
};

export default NutritionRecordsList;
