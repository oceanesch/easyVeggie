import { Grid, StyledEngineProvider } from '@mui/material';
import { Footer } from '../../shared';
import RecipeDetailCookingDirection from '../features/RecipeDetailCookingDirection';
import RecipeDetailHeadSection from '../features/RecipeDetailHeadSection';
import RecipeDetailIngredientSection from '../features/RecipeDetailIngredientSection';
import classes from './RecipeDetailPage.module.css';

const RecipeDetailPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <RecipeDetailHeadSection />
      <Grid container className={classes.recipeDetailMainSection}>
        <Grid item>
          <RecipeDetailIngredientSection />
        </Grid>
        <Grid item>
          <RecipeDetailCookingDirection />
        </Grid>
      </Grid>
      <Footer />
    </StyledEngineProvider>
  );
};

export default RecipeDetailPage;
