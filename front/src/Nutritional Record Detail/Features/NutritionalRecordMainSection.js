import { Divider, Grid, List, ListItem, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordMainSection.module.css';
import NutritionalRecordArray from '../UI/NutritionalRecordArray';

const DUMMY_NUTRITIONAL_VALUES = [
  {
    quantity: '100g of cooked broccoli',
    calories: '28kcal',
    totalFat: 'tr',
    saturatedFat: 'tr',
    unsaturatedFat: 'tr',
    transFat: 'tr',
    cholesterol: 'tr',
    totalCarbs: '6g',
    dietaryFiber: '2.2g',
    totalSugars: '1g',
    protein: '2.1g',
    sodium: '34mg',
    iron: '0.6mg',
    potassium: '241mg',
    calcium: 'tr',
    zinc: 'n.d',
    vitaminA: '0mg',
    vitaminB6: 'n.d.',
    vitaminB12: '0mcg',
    vitaminC: '53mg',
    vitaminD: 'n.d.',
    vitaminE: '1.03mg',
    vitaminK: '141mcg',
  },
];

const NutritionalRecordMainSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.foodDetailMainSection}>
        <Grid item>
          <img
            alt="stack of broccoli"
            src="../../images/image_broccoli.jpg"
            className={classes.foodDetailImage}
          />
        </Grid>
        <Grid item>
          <Typography component="h5" className={classes.foodDetailArrayTitle}>
            NUTRITION FOR: {DUMMY_NUTRITIONAL_VALUES[0].quantity}{' '}
          </Typography>
          <Typography component="p" className={sharedClasses.mainText}>
            Calories: {DUMMY_NUTRITIONAL_VALUES[0].calories}{' '}
          </Typography>
          <Divider />
          <NutritionalRecordArray nutriValue={DUMMY_NUTRITIONAL_VALUES} />
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordMainSection;
