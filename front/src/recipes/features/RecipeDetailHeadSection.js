import { Grid, StyledEngineProvider, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './RecipeDetailHeadSection.module.css';
import { TagCard } from '../../shared';
import RecipeDetailTimeSection from '../UI/RecipeDetailTimeSection';

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
          <Grid container className={classes.recipeDetailGeneralInfoSection}>
            <Grid item>
              <Typography component="h1" className={sharedClasses.mainTitle}>
                {DUMMY_RECIPE_DETAIL.recipeTitle}
              </Typography>
            </Grid>
            <Grid item className={classes.recipeDetailBox}>
              <Grid container className={classes.recipeDetailTagSection}>
                {DUMMY_RECIPE_DETAIL.recipeTags.map((tag, index) => {
                  return (
                    <Grid item key={index}>
                      <TagCard tagName={tag} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item>
              <Typography component="p" className={sharedClasses.mainText}>
                {DUMMY_RECIPE_DETAIL.recipeAbstract}
              </Typography>
            </Grid>
            <Grid item className={classes.recipeDetailBox}>
              <RecipeDetailTimeSection
                recipeServings={DUMMY_RECIPE_DETAIL.recipeServings}
                recipeTotalTime={DUMMY_RECIPE_DETAIL.recipeTotalTime}
                recipeCookTime={DUMMY_RECIPE_DETAIL.recipeCookTime}
                recipePrepTime={DUMMY_RECIPE_DETAIL.recipePrepTime}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default RecipeDetailHeadSection;
