import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../../shared/sharedCss.module.css';
import { Typography, Grid } from '@mui/material';
import { SearchBar } from '../../../shared/SearchBar/SearchBar';
import { MainButton } from '../../../shared/Button/MainButton';
import NutritionRecordsList from '../Features/NutritionRecordsList';

const AdminNutritionalListPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS LIST
        </Typography>
        <Grid item className={sharedClasses.searchSection}>
          <SearchBar />
        </Grid>
        <MainButton>ADD A NEW RECORD</MainButton>
      </Grid>
      <NutritionRecordsList />
    </StyledEngineProvider>
  );
};

export default AdminNutritionalListPage;
