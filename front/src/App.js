import { Route, Routes } from 'react-router-dom';
import { MainNavigation } from './shared';
import LandingPage from './Landing Page/Page/LandingPage';
import AdminLandingPage from './Admin/Pages/AdminLandingPage';
import AdminNutritionalListPage from './Admin/Pages/AdminNutritionalListPage';
import AdminAddNewRecord from './Admin/Pages/AdminAddNewRecord';

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
        <Route
          path="/admin/addnewrecord"
          element={<AdminAddNewRecord />}
        />
      </Routes>
    </div>
  );
}

export default App;
