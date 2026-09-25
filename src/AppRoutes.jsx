import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CLATUG from './pages/CLATUG';
import AILETUG from './pages/AILETUG';
import CLATPG from './pages/CLATPG';
import AILETPG from './pages/AILETPG';
import Approach from './pages/Approach';
import FacultyPage from './pages/Faculty';
import ResultsPage from './pages/Results';
import ResourcesPage from './pages/Resources';
import FaqPage from './pages/FAQ';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Route table. Extracted from App so it can be mounted under any router
 * (BrowserRouter in the browser, MemoryRouter in tests/SSR).
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/clat-ug" element={<CLATUG />} />
      <Route path="/courses/ailet-ug" element={<AILETUG />} />
      <Route path="/courses/clat-pg" element={<CLATPG />} />
      <Route path="/courses/ailet-pg" element={<AILETPG />} />
      <Route path="/approach" element={<Approach />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}