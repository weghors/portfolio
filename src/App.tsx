import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Ecommerce from '@/pages/Ecommerce';
import SocialDesign from '@/pages/SocialDesign';
import TaskManager from '@/pages/TaskManager';
import FitnessApp from '@/pages/FitnessApp';
import BrandDesign from '@/pages/BrandDesign';
import Dashboard from '@/pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/social-design" element={<SocialDesign />} />
        <Route path="/brand-design" element={<BrandDesign />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task-manager" element={<TaskManager />} />
        <Route path="/fitness" element={<FitnessApp />} />
      </Routes>
    </BrowserRouter>
  );
}
