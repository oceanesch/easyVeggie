import { Typography, Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordsPage.module.css';
import SearchSection from '../Features/SearchSection';
import NutritionalRecordsList from '../Features/NutritionalRecordsList';

const NutritionalRecordsPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS
        </Typography>
        <SearchSection />
      </Grid>
      <Grid container className={classes.cardSection}>
      <NutritionalRecordsList />
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsPage;
