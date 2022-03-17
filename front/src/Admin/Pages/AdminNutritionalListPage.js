import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './AdminNutritionalListPage.module.css';
import { Typography, Grid } from '@mui/material';
import { SearchBar } from '../../shared/SearchBar/SearchBar';
import { MainButton } from '../../shared/Button/MainButton';
import NutritionRecordsList from '../Features/NutritionRecordsList';

const AdminNutritionalListPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid className={classes.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS LIST
        </Typography>
        <Grid className={classes.searchSection}>
          <SearchBar />
        </Grid>
        <MainButton>ADD A NEW RECORD</MainButton>
      </Grid>
      <NutritionRecordsList />
    </StyledEngineProvider>
  );
};

export default AdminNutritionalListPage;
