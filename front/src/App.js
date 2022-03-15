import { Route, Routes } from 'react-router-dom';
import LandingPage from './Landing Page/Page/LandingPage';
import AdminLandingPage from './Admin/Pages/AdminLandingPage';
import AdminNutritionalListPage from './Admin/Pages/AdminNutritionalListPage';
import { MainNavigation } from './shared';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route
          path="/admin/nutritionalrecordslist"
          element={<AdminNutritionalListPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
