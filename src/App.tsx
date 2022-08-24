import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import AboutPage from './components/pages/AboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/projects'} element={<ProjectsPage />} />
          <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}
export default App;
