import { Grid, StyledEngineProvider } from '@mui/material';
import RecipeCard from '../UI/RecipeCard';
import classes from './RecipeListSection.module.css';

const RecipesListSection = () => {
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
      <Grid container className={classes.recipeListSection}>
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
    </StyledEngineProvider>
  );
};

export default RecipesListSection;
