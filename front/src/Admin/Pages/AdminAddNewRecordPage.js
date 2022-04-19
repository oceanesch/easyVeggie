import { Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';
import AddNewRecordForm from '../Features/AddNewRecordForm';

const AdminAddNewRecordPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Typography component="h1" className={sharedClasses.mainTitle}>
        ADD A NEW RECORD
      </Typography>
      <AddNewRecordForm />
    </StyledEngineProvider>
  );
};

export default AdminAddNewRecordPage;
