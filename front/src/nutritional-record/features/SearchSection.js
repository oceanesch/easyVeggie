import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { MainButton, SearchBar } from '../../shared';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './SearchSection.module.css';
import FoodSelect from '../UI/FoodSelect';
import NutrientSelect from '../UI/NutrientSelect';
import { useContext, useState } from 'react';
import { CancelButton } from '../../shared/Button/CancelButton';
import SearchContext from '../../store/search-context';

const SearchSection = (props) => {
  const [searchedFood, setSearchFood] = useState('');

  const searchCtx = useContext(SearchContext);

  const onChangeHandler = (searchedFood) => {
    setSearchFood(searchedFood);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    searchCtx.onSubmitHandler(searchedFood);
  };

  const resetSearchFormHandler = () => {
    setSearchFood('');
  };

  return (
    <StyledEngineProvider injectFirst>
      <form onSubmit={searchSubmitHandler}>
        <Grid container className={sharedClasses.searchSection}>
          <Grid item className={sharedClasses.searchBar}>
            <SearchBar searchedFood={searchedFood} onChange={onChangeHandler} />
          </Grid>
          <Grid item className={classes.responsiveFilterSectionButton}>
            <MainButton>Filter</MainButton>
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
          <Grid container className={sharedClasses.actionSection}>
            <Grid item>
              <MainButton type="submit">SUBMIT</MainButton>
            </Grid>
            <Grid item>
              <CancelButton onClick={resetSearchFormHandler}>
                RESET
              </CancelButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </StyledEngineProvider>
  );
};

export default SearchSection;
