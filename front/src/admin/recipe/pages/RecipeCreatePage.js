import { Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../../shared/sharedCss.module.css';
import RecipeCreate from '../features/RecipeCreate';

const RecipeCreatePage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Typography component="h1" className={sharedClasses.mainTitle}>
        ADD A NEW RECIPE
      </Typography>
      <RecipeCreate />
    </StyledEngineProvider>
  );
};

export default RecipeCreatePage;
