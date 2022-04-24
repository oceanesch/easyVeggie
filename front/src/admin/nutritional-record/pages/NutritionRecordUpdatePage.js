import { Typography } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import sharedClasses from '../../../shared/sharedCss.module.css';
import NutritionRecordUpdate from '../features/NutritionRecordUpdate';

const NutritionRecordUpdatePage = () => {
  const { foodId } = useParams();

  return (
    <StyledEngineProvider injectFirst>
      <Typography component="h1" className={sharedClasses.mainTitle}>
        EDIT RECORD
      </Typography>
      <NutritionRecordUpdate foodId={foodId} />
    </StyledEngineProvider>
  );
};

export default NutritionRecordUpdatePage;
