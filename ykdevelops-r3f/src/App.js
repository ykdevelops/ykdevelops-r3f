import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import CanvasR3F from './components/CanvasR3F';
import About from './components/About';
import Resume from './components/Resume.js';
import Projects from './components/Projects';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <CanvasR3F />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);
function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
