import { Grid, List, ListItem, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './NutritionalRecordArray.module.css';

const ArrayPart1 = [
  { name: 'Total Fat', nameValue: 'totalFat', important: true },
  { name: 'Saturated Fat', nameValue: 'saturatedFat' },
  { name: 'Unsaturated Fat', nameValue: 'unsaturatedFat' },
  { name: 'Trans Fat', nameValue: 'transFat' },
  { name: 'Cholesterol', nameValue: 'cholesterol' },
];

const ArrayPart2 = [
  { name: 'Total Carb', nameValue: 'totalCarb', important: true },
  { name: 'Dietary Fiber', nameValue: 'dietaryFiber' },
  { name: 'Total Sugars', nameValue: 'totalSugars' },
  { name: 'Protein', nameValue: 'protein', important: true },
];

const ArrayPart3 = [
  { name: 'Sodium', nameValue: 'sodium' },
  { name: 'Iron', nameValue: 'iron' },
  { name: 'Potassium', nameValue: 'potassium' },
  { name: 'Calcium', nameValue: 'calcium' },
  { name: 'Zinc', nameValue: 'zinc' },
];

const ArrayPart4 = [
  { name: 'Vitamin A', nameValue: 'vitaminA' },
  { name: 'Vitamin B6', nameValue: 'vitaminB6' },
  { name: 'Vitamin B12', nameValue: 'vitaminB12' },
  { name: 'Vitamin C', nameValue: 'vitaminC' },
  { name: 'Vitamin D', nameValue: 'vitaminD' },
  { name: 'Vitamin K', nameValue: 'vitaminK' },
  { name: 'Vitamin E', nameValue: 'vitaminE' },
];

const NutritionalRecordArray = (props) => {
  console.log(props.nutriValue[0]);
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.foodDetailArrayRow}>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            {ArrayPart1.map((item) => {
              return (
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {props.nutriValue[0].calories}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            {ArrayPart2.map((item) => {
              return (
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {props.nutriValue[0].calorie}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            {ArrayPart3.map((item) => {
              return (
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {props.nutriValue[0].calorie}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            {ArrayPart4.map((item) => {
              return (
                <ListItem className={classes.foodDetailArrayItem}>
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {props.nutriValue[0].calorie}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordArray;
