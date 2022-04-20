import { Route, Routes } from 'react-router-dom';
import { MainNavigation } from './shared';
import LandingPage from './Landing Page/Page/LandingPage';
import AdminLandingPage from './admin/landing-page/pages/LandingPage';
import NutritionRecordListPage from './admin/nutritional-record/pages/NutritionRecordListPage';
import NutritionRecordCreatePage from './admin/nutritional-record/pages/NutritionRecordCreatePage'
import NutritionalRecordsPage from './Nutritional Record Page/Page/NutritionalRecordsPage';
import NutritionalRecordDetailPage from './Nutritional Record Detail/Page/NutritionalRecordDetailPage';
import NutritionRecordUpdatePage from './admin/nutritional-record/pages/NutritionRecordUpdatePage';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/nutritionalrecords/:foodId"
          element={<NutritionalRecordDetailPage />}
        />
        <Route
          path="/nutritionalrecords"
          element={<NutritionalRecordsPage />}
        />

        <Route path="/admin" element={<AdminLandingPage />} />
        <Route
          path="/admin/nutritionalrecordslist"
          element={<NutritionRecordListPage />}
        />
        <Route path="/admin/addnewrecord" element={<NutritionRecordCreatePage />} />
        <Route
          path="/admin/editrecord/:foodId"
          element={<NutritionRecordUpdatePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
