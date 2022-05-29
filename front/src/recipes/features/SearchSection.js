import { Grid, StyledEngineProvider, Typography } from '@mui/material';
import { SearchBar } from '../../shared';
import AllergenSelect from '../UI/AllergenSelect';
import CookingTimeSelect from '../UI/CookingTimeSelect';
import RecipeTypeSelect from '../UI/RecipeTypeSelect';
import sharedClasses from '../../shared/sharedCss.module.css';

const SearchSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <SearchBar />
      <Grid container className={sharedClasses.filterSection}>
        <Grid item>
          <Typography component="h2" className={sharedClasses.subTitle}>
            FILTER BY TYPE OF RECIPE
          </Typography>
          <RecipeTypeSelect />
        </Grid>
        <Grid item>
          <Typography component="h2" className={sharedClasses.subTitle}>
            FILTER BY ALLERGEN
          </Typography>
          <AllergenSelect />
        </Grid>
        <Grid item>
          <Typography component="h2" className={sharedClasses.subTitle}>
            FILTER BY TYPE COOKING TIME
          </Typography>
          <CookingTimeSelect />
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default SearchSection;
