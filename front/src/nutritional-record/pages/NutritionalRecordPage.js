import { Typography, Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordPage.module.css';
import NutritionalRecordList from '../features/NutritionalRecordList';
import { useParams, useSearchParams } from 'react-router-dom';

const NutritionalRecordsPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  const onChangeHandler = (filters) => {
    // setSearchParams(filters);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS
        </Typography>
      </Grid>
      <Grid container className={classes.cardSection}>
        <NutritionalRecordList
          onChange={onChangeHandler}
          // nutritionalRecordFilters={searchParams}
        />
        {/* <p>coucou {searchParams.foodName}</p> */}
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsPage;
