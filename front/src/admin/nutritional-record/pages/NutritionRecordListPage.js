import { StyledEngineProvider } from '@mui/material/styles';
import NutritionRecordList from '../features/NutritionRecordList';

const NutritionRecordListPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <NutritionRecordList />
    </StyledEngineProvider>
  );
};

export default NutritionRecordListPage;
