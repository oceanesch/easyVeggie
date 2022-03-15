import { Route, Routes } from 'react-router-dom';
import LandingPage from './Landing Page/Page/LandingPage';
import AdminLandingPage from './Admin/Pages/AdminLandingPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
