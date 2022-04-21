import { Typography, Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordPage.module.css';
import SearchSection from '../features/SearchSection';
import NutritionalRecordList from '../features/NutritionalRecordList';

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
        <NutritionalRecordList />
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsPage;
