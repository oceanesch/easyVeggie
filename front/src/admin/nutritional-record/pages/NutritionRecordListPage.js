import { StyledEngineProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import sharedClasses from '../../../shared/sharedCss.module.css';
import { Typography, Grid } from '@mui/material';
import { SearchBar } from '../../../shared/SearchBar/SearchBar';
import { MainButton } from '../../../shared/Button/MainButton';
import NutritionRecordList from '../features/NutritionRecordList';

const NutritionRecordListPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Grid container className={sharedClasses.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS LIST
        </Typography>
        <Grid item className={sharedClasses.searchSection}>
          <SearchBar />
        </Grid>
        <RouterLink to="/admin/addnewrecord" className={sharedClasses.noLink}>
          <MainButton>ADD A NEW RECORD</MainButton>
        </RouterLink>
      </Grid>
      <NutritionRecordList />
    </StyledEngineProvider>
  );
};

export default NutritionRecordListPage;
