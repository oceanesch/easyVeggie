import { Grid, StyledEngineProvider, Typography } from '@mui/material';
import sharedClasses from '.././../shared/sharedCss.module.css';
import RecipesListSection from '../features/RecipesListSection';
import SearchSection from '../features/SearchSection';

const RecipesListPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          RECIPES
        </Typography>
        <SearchSection />
        <RecipesListSection />
      </Grid>
    </StyledEngineProvider>
  );
};

export default RecipesListPage;
