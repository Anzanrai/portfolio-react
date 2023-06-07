import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import React from "react";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/about-me",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

function App() {

  return (<>
    <RouterProvider router={router}/>
  </>
    
  )
}

export default App
