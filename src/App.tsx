import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Homepage } from './pages/Homepage/Homepage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { AppoinmentPage } from './pages/AppoinmentPage/AppoinmentPage';
import ProjectsPage from './pages/ProjectsPages/ProjectsPage';
import ExterPage from './pages/ServPages/ExterPage';
import HomAEPage from './pages/ServPages/HomAEPage';
import InterPage from './pages/ServPages/InterPage';
import RoofingPage from './pages/ServPages/RoofingPage';
import TestimonialsPage from './pages/ProjectsPages/TestimonialsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/interior" element={<InterPage />} />
          <Route path="/exterior" element={<ExterPage />} />
          <Route path="/additions" element={<HomAEPage />} />
          <Route path="/roofing" element={<RoofingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
