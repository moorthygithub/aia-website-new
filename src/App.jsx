import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Navbar";

// import About from "./component/About";
// import Blogs from "./component/Blogs";
import AboutPage from "./pages/About/About";
import CAMS from "./pages/Courses/CAMS";
import CFECurriculam from "./pages/Courses/CFECurriculam";
import CIAChallenge from "./pages/Courses/CIAChallenge";
import CIACurriculam from "./pages/Courses/CIACurriculam";
import FreeResources from "./pages/FreeResources/CFEFreeResources";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import OurPassout from "./pages/OurPassout/OurPassout";

import Enrool from "./pages/Enrool/Enrool";
import Contact from "./pages/contact/contact";
import BlogDetails from "./pages/Blog/blog-details";

export default function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Layout>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/cfe-curriculum" element={<CFECurriculam />} />
            <Route path="/cia-curriculum" element={<CIACurriculam />} />
            <Route
              path="/cia-challenge-curriculum"
              element={<CIAChallenge />}
            />
            <Route path="/cams" element={<CAMS />} />
            <Route path="/cfe-free-resources" element={<FreeResources />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/passed-out" element={<OurPassout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll-now" element={<Enrool />} />
          </Routes>
        </main>
      </Layout>
    </div>
  );
}
