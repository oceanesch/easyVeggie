import { Grid, StyledEngineProvider, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './RecipesListSection.module.css';
import RecipeCard from '../UI/RecipeCard';

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
      <Grid container className={classes.recipesListSection}>
        <Grid item>
          <Typography component="h1" className={sharedClasses.mainTitle}>
            LATEST RECIPES
          </Typography>
        </Grid>
        <Grid item>
          <RecipeCard
            key={DUMMY_RECIPES_LIST[0].key}
            recipeTitle={DUMMY_RECIPES_LIST[0].recipeTitle}
            recipeMainImage={DUMMY_RECIPES_LIST[0].recipeMainImage}
          />
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default RecipesListSection;
