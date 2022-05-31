import { StyledEngineProvider } from '@mui/material';
import RecipeDetailHeadSection from '../features/RecipeDetailHeadSection';
import RecipeDetailIngredientSection from '../features/RecipeDetailIngredientSection';

const RecipeDetailPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <RecipeDetailHeadSection />
      <RecipeDetailIngredientSection />
    </StyledEngineProvider>
  );
};

export default RecipeDetailPage;
