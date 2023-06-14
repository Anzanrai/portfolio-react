import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import * as React from 'react';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/projects',
//     element: <Projects />,
//   },
//   {
//     path: '/about-me',
//     element: <About />,
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//   },
//   {
//     path: '/admin',
//     element: <Admin />,
//   },
// ]);

function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
      
    </>
  );
}

export default App;
