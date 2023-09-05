import React from "react";
// react-router-dom
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import PageNotFound from "./pages/PageNotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails";
import CareersError from './pages/careers/CareersError'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        {" "}
        {/* localhost:3000/help */}
        <Route path="faq" element={<Faq />} /> {/* localhost:3000/help/faq */}
        <Route path="contact" element={<Contact />} action={contactAction} /> {/* localhost:3000/help/contact */}
      </Route>
      <Route 
      path="carrers" 
      element={<CareersLayout />}
      errorElement={<CareersError />}
      >
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
        />
        <Route 
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
