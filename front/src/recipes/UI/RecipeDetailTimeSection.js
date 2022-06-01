import { Box, Grid, StyledEngineProvider, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './RecipeDetailTimeSection.module.css';

const RecipeDetailTimeSection = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.recipeDetailTimeBox}>
        <Grid item>
          <Typography component="h5" className={sharedClasses.subTitle}>
            Servings
          </Typography>
          <Box
            className={`${classes.servingBox} ${sharedClasses.mainText} ${classes.recipeDetailCookingTimeText}`}
          >
            {props.recipeServings}
          </Box>
        </Grid>
        <Grid item>
          <Typography component="h5" className={sharedClasses.subTitle}>
            Total time
          </Typography>
          <Typography
            component="h6"
            className={`${sharedClasses.mainText} ${classes.recipeDetailCookingTimeText}`}
          >
            {props.recipeTotalTime}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h5" className={sharedClasses.subTitle}>
            Prep time
          </Typography>
          <Typography
            component="h6"
            className={`${sharedClasses.mainText} ${classes.recipeDetailCookingTimeText}`}
          >
            {props.recipePrepTime}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h5" className={sharedClasses.subTitle}>
            Cook time
          </Typography>
          <Typography
            component="h6"
            className={`${sharedClasses.mainText} ${classes.recipeDetailCookingTimeText}`}
          >
            {props.recipeCookTime}
          </Typography>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default RecipeDetailTimeSection
