import { Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../../shared/sharedCss.module.css';
import NutritionRecordCreate from '../Features/NutritionRecordCreate';

const AdminAddNewRecordPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Typography component="h1" className={sharedClasses.mainTitle}>
        ADD A NEW RECORD
      </Typography>
      <NutritionRecordCreate />
    </StyledEngineProvider>
  );
};

export default AdminAddNewRecordPage;
