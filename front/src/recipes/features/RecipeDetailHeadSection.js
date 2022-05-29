import { Box, Grid, StyledEngineProvider, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './RecipeDetailHeadSection.module.css';
import { TagCard } from '../../shared';

const DUMMY_RECIPE_DETAIL = {
  recipeTitle: 'Summer Tomato Vegan Quiche',
  recipeTags: ['MAIN DISH', '30 MINUTES', 'SOY FREE'],
  recipeAbstract:
    'When blended, the tofu creates the perfect consistency for this quiche and the turmeric creates a beautiful golden colour. This tofu quiche is hearty, filling and can be enjoyed hot or cold!',
  recipeServings: '4',
  recipeTotalTime: '1hr10min',
  recipePrepTime: '15min',
  recipeCookTime: '55min',
};

const RecipeDetailHeadSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.recipeDetailHeadSection}>
        <Grid item className={classes.recipeDetailImageBox}>
          <img
            alt="recipe"
            src="/images/landing_page_recipe_image_3.jpg"
            className={classes.recipeDetailImage}
          />
        </Grid>
        <Grid item className={classes.recipeDetailGeneralInfoBox}>
          <Grid container>
            <Grid item>
              <Typography component="h1" className={sharedClasses.mainTitle}>
                {DUMMY_RECIPE_DETAIL.recipeTitle}
              </Typography>
            </Grid>
            <Grid item>
              {DUMMY_RECIPE_DETAIL.recipeTags.map((tag) => {
                return <TagCard tagName={tag} />;
              })}
            </Grid>
            <Grid item>
              <Typography component="p" className={sharedClasses.mainText}>
                {DUMMY_RECIPE_DETAIL.recipeAbstract}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Typography component="h5" className={sharedClasses.subTitle}>
                    Servings
                  </Typography>
                  <Box
                    className={`${classes.servingBox} ${sharedClasses.mainText}`}
                  >
                    {DUMMY_RECIPE_DETAIL.recipeServings}
                  </Box>
                </Grid>
                <Grid item>
                  <Typography component="h5" className={sharedClasses.subTitle}>
                    Total time
                  </Typography>
                  <Typography component="h6" className={sharedClasses.mainText}>
                    {DUMMY_RECIPE_DETAIL.recipeTotalTime}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="h5" className={sharedClasses.subTitle}>
                    Prep time
                  </Typography>
                  <Typography component="h6" className={sharedClasses.mainText}>
                    {DUMMY_RECIPE_DETAIL.recipePrepTime}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="h5" className={sharedClasses.subTitle}>
                    Cook time
                  </Typography>
                  <Typography component="h6" className={sharedClasses.mainText}>
                    {DUMMY_RECIPE_DETAIL.recipeCookTime}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default RecipeDetailHeadSection;
