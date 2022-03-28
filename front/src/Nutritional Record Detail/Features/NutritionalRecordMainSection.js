import { Divider, Grid, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordMainSection.module.css';
import NutritionalRecordArray from '../UI/NutritionalRecordArray';

const DUMMY_VALUES = [
  { name: 'Quantity', value: '100g of cooked broccoli' },
  { name: 'Calories', value: '28kcal' },
  { name: 'Total Fat', value: 'tr' },
  { name: 'Saturated Fat', value: 'tr' },
  { name: 'Unsaturated Fat', value: 'tr' },
  { name: 'Trans  Fat', value: 'tr' },
  { name: 'Cholesterol', value: 'tr' },
  { name: 'Total Carbs', value: '6g' },
  { name: 'Dietary Fiber', value: '2.2g' },
  { name: 'Total Sugars', value: '1g' },
  { name: 'Protein', value: '2.1g' },
  { name: 'Sodium', value: '34mg' },
  { name: 'Iron', value: '0.6mg' },
  { name: 'Potassium', value: '241mg' },
  { name: 'Calcium', value: 'tr' },
  { name: 'Zinc', value: 'n.d.' },
  { name: 'Vitamin A', value: '0mg' },
  { name: 'Vitamin B6', value: 'n.d.' },
  { name: 'Vitamin B12', value: '0mcg' },
  { name: 'Vitamin C', value: '53mg' },
  { name: 'Vitamin D', value: 'n.d.' },
  { name: 'Vitamin E', value: '1.03mg' },
  { name: 'Vitamin K', value: '141mcg' },
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
            NUTRITION FOR: {DUMMY_VALUES[0].value}{' '}
          </Typography>
          <Typography component="p" className={sharedClasses.mainText}>
            Calories: {DUMMY_VALUES[1].value}{' '}
          </Typography>
          <Divider />
          <NutritionalRecordArray nutriValue={DUMMY_VALUES} />
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordMainSection;
