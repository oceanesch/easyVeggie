import { Grid, List, ListItem, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import classes from './NutritionalRecordArray.module.css';

const NutritionalRecordArray = (props) => {
  const ArrayPart1 = props.nutriValue.slice(2, 7);

  const ArrayPart2 = props.nutriValue.slice(7, 11);

  const ArrayPart3 = props.nutriValue.slice(11, 16);

  const ArrayPart4 = props.nutriValue.slice(16);

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
