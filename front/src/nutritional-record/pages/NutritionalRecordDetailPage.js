import { StyledEngineProvider } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import sharedClasses from '../../shared/sharedCss.module.css';
import NutritionalRecordDetailMainSection from '../features/NutritionalRecordDetailMainSection';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNutritionalRecord } from '../../api-client/nutritional-record/nutritional-record.api';

const NutritionalRecordDetailPage = () => {
  const { foodId } = useParams();

  const [foodData, setFoodData] = useState({});

  useEffect(() => {
    getNutritionalRecord(foodId)
      .then((record) => {
        setFoodData(record);
      })
      .catch((error) => console.error(error));
  }, [foodId]);

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Grid item>
          <Typography component="h1" className={sharedClasses.mainTitle}>
            {`NUTRITIONAL RECORD - ${foodData.foodName}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="p" className={sharedClasses.mainText}>
            {foodData.foodDescription}
          </Typography>
        </Grid>
      </Grid>
      <NutritionalRecordDetailMainSection foodData={foodData} />
    </StyledEngineProvider>
  );
};

export default NutritionalRecordDetailPage;
