import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { SearchBar } from '../../shared';
import sharedClasses from '../../shared/sharedCss.module.css';
import FoodSelect from '../UI/FoodSelect';
import NutrientSelect from '../UI/NutrientSelect';

const SearchSection = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid item className={sharedClasses.searchSection}>
        <SearchBar />
      </Grid>
      <Grid container className={sharedClasses.filterSection}>
        <Grid item>
          <Typography component="h2" className={sharedClasses.subTitle}>
            FILTER BY CATEGORY OF FOOD
          </Typography>
          <FoodSelect />
        </Grid>
        <Grid item>
          <Typography component="h2" className={sharedClasses.subTitle}>
            FILTER BY NUTRIENT
          </Typography>
          <NutrientSelect />
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default SearchSection;
