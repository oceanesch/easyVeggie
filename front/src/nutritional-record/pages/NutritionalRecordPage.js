import { Typography, Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './NutritionalRecordPage.module.css';
import SearchSection from '../features/SearchSection';
import NutritionalRecordList from '../features/NutritionalRecordList';
import { useContext } from 'react';
import SearchContext from '../../store/search-context';

const NutritionalRecordsPage = () => {
  const searchCtx = useContext(SearchContext)

  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS
        </Typography>
        <SearchSection />
      </Grid>
      <Grid container className={classes.cardSection}>
        <NutritionalRecordList searchedFood={searchCtx.searchedFood} />
      </Grid>
    </StyledEngineProvider>
  );
};

export default NutritionalRecordsPage;
