import { Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import AddNewRecordForm from '../Features/AddNewRecordForm';

const AdminEditRecordPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Typography component="h1" className={sharedClasses.mainTitle}>
        EDIT RECORD
      </Typography>
      <AddNewRecordForm />
    </StyledEngineProvider>
  );
};

export default AdminEditRecordPage;
