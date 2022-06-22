import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { MainButton, SearchBar } from '../../shared';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './SearchSection.module.css';
import FoodSelect from '../UI/FoodSelect';
import NutrientSelect from '../UI/NutrientSelect';
import { useState } from 'react';
import { CancelButton } from '../../shared/Button/CancelButton';

const NutritionalRecordFilters = (props) => {
  const [openFilterSection, setOpenFilterSection] = useState(false);

  const onChangeHandler = (searchedNutritionalRecordString) => {
    props.onChange({ foodName: searchedNutritionalRecordString });
  };

  const toggleFilterSectionHandler = () => {
    setOpenFilterSection(!openFilterSection);
  };

  return (
    <StyledEngineProvider injectFirst>
      <form>
        <Grid container className={sharedClasses.searchSection}>
          <Grid item className={sharedClasses.searchBar}>
            <SearchBar
              // searchedNutritionalRecordString={
              //   props.nutritionalRecordFilters.foodName
              // }
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item className={classes.responsiveFilterSectionButton}>
            <MainButton onClick={toggleFilterSectionHandler}>Filter</MainButton>
          </Grid>
          <Grid
            container
            className={`${sharedClasses.filterSection} ${classes.filterSection}`}
          >
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
          {openFilterSection && (
            <Grid
              container
              className={`${sharedClasses.filterSection} ${classes.responsiveFilterSection}`}
            >
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
          )}
          <Grid container className={sharedClasses.actionSection}>
            <Grid item>
              <MainButton type="submit">SUBMIT</MainButton>
            </Grid>
            <Grid item>
              <CancelButton>RESET</CancelButton>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordFilters;
