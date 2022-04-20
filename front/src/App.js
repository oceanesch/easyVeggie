import { Route, Routes } from 'react-router-dom';
import { MainNavigation } from './shared';
import LandingPage from './Landing Page/Page/LandingPage';
import AdminLandingPage from './Admin/AdminLandingPage';
import AdminNutritionalListPage from './Admin/nutritional-record/Pages/AdminNutritionalListPage';
import AdminAddNewRecordPage from './Admin/nutritional-record/Pages/NutritionRecordCreatePage';
import NutritionalRecordsPage from './Nutritional Record Page/Page/NutritionalRecordsPage';
import NutritionalRecordDetailPage from './Nutritional Record Detail/Page/NutritionalRecordDetailPage';
import NutritionRecordEditPage from './Admin/nutritional-record/Pages/NutritionRecordUpdatePage';

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
          element={<AdminNutritionalListPage />}
        />
        <Route path="/admin/addnewrecord" element={<AdminAddNewRecordPage />} />
        <Route
          path="/admin/editrecord/:foodId"
          element={<NutritionRecordEditPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
