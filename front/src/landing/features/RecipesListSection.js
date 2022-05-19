import { Grid, StyledEngineProvider, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './RecipesListSection.module.css';
import RecipeCard from '../UI/RecipeCard';
import { MainButton } from '../../shared/Button/MainButton';
import { Link as RouterLink } from 'react-router-dom';

const RecipesListSection = () => {
  // Component will get the recipe's data by fetching it to the DB
  const DUMMY_RECIPES_LIST = [
    {
      key: 'recipe 1',
      recipeTitle: 'Vegan Blueberry Cheesecake',
      recipeMainImage: '/images/landing_page_recipe_image_1.jpg',
    },
    {
      key: 'recipe 2',
      recipeTitle: 'Golden Fall Salad',
      recipeMainImage: '/images/landing_page_recipe_image_2.jpg',
    },
    {
      key: 'recipe 3',
      recipeTitle: 'Roasted Summer Vegetables Quiche',
      recipeMainImage: '/images/landing_page_recipe_image_3.jpg',
    },
    {
      key: 'recipe 4',
      recipeTitle: 'Protein Packed Breakfast Sandwich',
      recipeMainImage: '/images/landing_page_recipe_image_4.jpg',
    },
    {
      key: 'recipe 5',
      recipeTitle: 'Vegan French Toast',
      recipeMainImage: '/images/landing_page_recipe_image_5.jpg',
    },
  ];

  return (
    <StyledEngineProvider injectFirst>
      <Grid container>
        <Grid item className={classes.recipesListHeadSection}>
          <Typography component="h1" className={sharedClasses.mainTitle}>
            LATEST RECIPES
          </Typography>
        </Grid>
        <Grid container className={classes.recipesListCardSection}>
          {DUMMY_RECIPES_LIST.map((recipe) => {
            return (
              <Grid item key={recipe.key}>
                <RecipeCard
                  recipeTitle={recipe.recipeTitle}
                  recipeMainImage={recipe.recipeMainImage}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid container className={classes.recipesListButton}>
          <RouterLink to="/recipes" className={sharedClasses.noLink}>
            <MainButton>More</MainButton>
          </RouterLink>
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default RecipesListSection;
