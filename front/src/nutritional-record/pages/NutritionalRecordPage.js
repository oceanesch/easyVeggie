import { Typography, Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordPage.module.css';
import SearchSection from '../features/SearchSection';
import NutritionalRecordList from '../features/NutritionalRecordList';
import { useState } from 'react';

const NutritionalRecordsPage = () => {
  const [searchedFood, setSearchedFood] = useState('');

  const searchSubmitHandler = (searchedFood) => {
    setSearchedFood(searchedFood);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS
        </Typography>
        <SearchSection onSearchSubmit={searchSubmitHandler} />
      </Grid>
      <Grid container className={classes.cardSection}>
        <NutritionalRecordList searchedFood={searchedFood} />
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsPage;
