import { Grid, List, ListItem, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './NutritionalRecordArray.module.css';

const NutritionalRecordArray = (props) => {
  const nutriArray = [
    { name: 'Total Fat', value: props.nutriValue.totalFat },
    { name: 'Saturated Fat', value: props.nutriValue.saturatedFat },
    { name: 'Unsaturated Fat', value: props.nutriValue.unsaturatedFat },
    { name: 'Trans  Fat', value: props.nutriValue.transFat },
    { name: 'Cholesterol', value: props.nutriValue.cholesterol },
    { name: 'Total Carbs', value: props.nutriValue.totalCarbs },
    { name: 'Dietary Fiber', value: props.nutriValue.dietaryFiber },
    { name: 'Total Sugars', value: props.nutriValue.totalSugars },
    { name: 'Protein', value: props.nutriValue.protein },
    { name: 'Sodium', value: props.nutriValue.sodium },
    { name: 'Iron', value: props.nutriValue.iron },
    { name: 'Potassium', value: props.nutriValue.potassium },
    { name: 'Calcium', value: props.nutriValue.calcium },
    { name: 'Zinc', value: props.nutriValue.zinc },
    { name: 'Vitamin A', value: props.nutriValue.vitaminA },
    { name: 'Vitamin B6', value: props.nutriValue.vitaminB6 },
    { name: 'Vitamin B12', value: props.nutriValue.vitaminB12 },
    { name: 'Vitamin C', value: props.nutriValue.vitaminC },
    { name: 'Vitamin D', value: props.nutriValue.vitaminD },
    { name: 'Vitamin E', value: props.nutriValue.vitaminE },
    { name: 'Vitamin K', value: props.nutriValue.vitaminK },
  ];

  const ArrayPart1 = nutriArray.slice(2, 7);

  const ArrayPart2 = nutriArray.slice(7, 11);

  const ArrayPart3 = nutriArray.slice(11, 16);

  const ArrayPart4 = nutriArray.slice(16);

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.foodDetailArrayRow}>
        <Grid item className={classes.foodDetailArrayColumn}>
          <List>
            {ArrayPart1.map((item) => {
              return (
                <ListItem
                  key={ArrayPart1.indexOf(item)}
                  className={classes.foodDetailArrayItem}
                >
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {item.value}
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
                <ListItem
                  key={ArrayPart2.indexOf(item)}
                  className={classes.foodDetailArrayItem}
                >
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {item.value}
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
                <ListItem
                  key={ArrayPart3.indexOf(item)}
                  className={classes.foodDetailArrayItem}
                >
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {item.value}
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
                <ListItem
                  key={ArrayPart4.indexOf(item)}
                  className={classes.foodDetailArrayItem}
                >
                  <Typography className={`${classes.foodDetailArrayText}`}>
                    {item.name}
                  </Typography>
                  <Typography
                    className={`${classes.foodDetailArrayNutriValue} ${classes.foodDetailArrayText}`}
                  >
                    {item.value}
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
