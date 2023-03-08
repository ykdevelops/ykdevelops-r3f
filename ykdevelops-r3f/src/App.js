import React from "react";
import Navbar from './components/Navbar';
import CanvasR3F from './components/CanvasR3F';
import About from './components/About';
import Resume from './components/Resume.js';
import Projects from './components/Projects';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CanvasR3F />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/resume",
    element: <Resume />,
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <NotFound />,
  },
  {
    path: "/comingSoon",
    element: <ComingSoon />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router}>

      </RouterProvider>
    </React.StrictMode>
  );
}

export default App;
