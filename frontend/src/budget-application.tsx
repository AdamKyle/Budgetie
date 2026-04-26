import { Route, Routes } from 'react-router';

import PublicLayout from './layout/public-layout';
import LandingPage from './pages/landing-page';
import About from './pages/public/about';
import Login from './pages/public/login';
import Register from './pages/public/register';
import Updates from './pages/public/updates';

const BudgetieApplication = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default BudgetieApplication;
