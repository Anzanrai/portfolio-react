import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/resume",
    element: <Resume />
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
