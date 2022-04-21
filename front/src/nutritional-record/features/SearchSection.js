import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { MainButton, SearchBar } from '../../shared';
import sharedClasses from '../../shared/sharedCss.module.css';
import FoodSelect from '../UI/FoodSelect';
import NutrientSelect from '../UI/NutrientSelect';
import { useState } from 'react';

const SearchSection = (props) => {
  const [searchedFood, setSearchFood] = useState('');

  const onChangeHandler = (searchedFood) => {
    setSearchFood(searchedFood);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    props.onSearchSubmit(searchedFood);
  };

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={searchSubmitHandler}>
        <Grid container className={sharedClasses.searchSection}>
          <Grid item className={sharedClasses.searchBar}>
            <SearchBar onChange={onChangeHandler} />
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
          <Grid item>
            <MainButton type="submit">SUBMIT</MainButton>
          </Grid>
        </Grid>
      </form>
    </StyledEngineProvider>
  );
};

export default SearchSection;
