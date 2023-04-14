import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import CanvasR3F from './components/Canvas/CanvasR3F';
import About from './components/About';
import Resume from './components/Resume.js';
import Projects from './components/Projects';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';
import LoaderMain from './components/LoaderMain';

function App() {
  return (
    <React.StrictMode>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/studio" element={<CanvasR3F />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
            <Route element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}

export default App;