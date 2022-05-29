import { Route, Routes } from 'react-router-dom';
import { MainNavigation } from './shared';
import LandingPage from './landing/page/LandingPage';
import AdminLandingPage from './admin/landing-page/pages/LandingPage';
import NutritionRecordListPage from './admin/nutritional-record/pages/NutritionRecordListPage';
import NutritionRecordCreatePage from './admin/nutritional-record/pages/NutritionRecordCreatePage';
import NutritionalRecordPage from './nutritional-record/pages/NutritionalRecordPage';
import NutritionalRecordDetailPage from './nutritional-record/pages/NutritionalRecordDetailPage';
import NutritionRecordUpdatePage from './admin/nutritional-record/pages/NutritionRecordUpdatePage';
import NotFoundPage from './not-found/NotFoundPage';
import RecipesListPage from './recipes/page/RecipesListPage';

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
        <Route path="/nutritionalrecords" element={<NutritionalRecordPage />} />
        <Route path="/recipes" element={<RecipesListPage />} />
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route
          path="/admin/nutritionalrecordslist"
          element={<NutritionRecordListPage />}
        />
        <Route
          path="/admin/addnewrecord"
          element={<NutritionRecordCreatePage />}
        />
        <Route
          path="/admin/editrecord/:foodId"
          element={<NutritionRecordUpdatePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
