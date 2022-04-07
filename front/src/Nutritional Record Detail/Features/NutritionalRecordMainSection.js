import { Divider, Grid, Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordMainSection.module.css';
import NutritionalRecordArray from '../UI/NutritionalRecordArray';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNutritionalRecord } from '../../api-client/nutritional-record/nutritional-record.api';

const NutritionalRecordMainSection = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={classes.foodDetailMainSection}>
        <Grid item>
          <img
            alt={props.foodData.foodName}
            src={props.foodData.foodImage}
            className={classes.foodDetailImage}
          />
        </Grid>
        <Grid item>
          <Typography component="h5" className={classes.foodDetailArrayTitle}>
            {` NUTRITION FOR: ${props.foodData.foodQuantity}`}
          </Typography>
          <Typography component="p" className={sharedClasses.mainText}>
            {`Calories: ${props.foodData.calories}`}
          </Typography>
          <Divider />
          <NutritionalRecordArray nutriValue={props.foodData} />
        </Grid>
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordMainSection;
