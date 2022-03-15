import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import classes from './AdminNutritionalListPage.module.css';
import { Typography, Box } from '@mui/material';
import { SearchBar } from '../../shared/SearchBar/SearchBar';
import { MainButton } from '../../shared/Button/MainButton';
import NutritionRecordsList from '../Features/NutritionRecordsList';

const AdminNutritionalListPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={classes.headSection}>
        <Typography component="h1" className={sharedClasses.mainTitle}>
          NUTRITIONAL RECORDS LIST
        </Typography>
        <Box className={classes.searchSection}>
          <SearchBar />
        </Box>
        <MainButton>ADD A NEW RECORD</MainButton>
      </Box>
      <NutritionRecordsList />
    </StyledEngineProvider>
  );
};

export default AdminNutritionalListPage;
