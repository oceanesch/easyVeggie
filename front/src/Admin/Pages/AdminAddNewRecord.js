import { Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import sharedClasses from '../../shared/sharedCss.module.css';

const AdminAddNewRecord = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Typography component="h1" className={sharedClasses.mainTitle}>
        ADD A NEW RECORD
      </Typography>
      <Typography component="h2" className={sharedClasses.subTitle}>
        GENERAL
      </Typography>
      <Typography component="h2" className={sharedClasses.subTitle}>
        NUTRITIONAL VALUES
      </Typography>
      <Typography component="h2" className={sharedClasses.subTitle}>
        TAGS
      </Typography>
    </StyledEngineProvider>
  );
};

export default AdminAddNewRecord;
