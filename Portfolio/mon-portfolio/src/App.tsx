import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
//import Navbar from "./components/Navbar";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import CarbonCaseStudy from "./pages/CarbonCaseStudy";
import AltenCaseStudy from "./pages/AltenCaseStudy";
import PersonalProject1 from "./pages/PersonalProject1";
import PersonalProject2 from "./pages/PersonalProject2";
import Project3 from "./pages/Project3";
import RenaultLocked from "./pages/RenaultLocked";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Redirection par défaut */}
        <Route path="/" element={<Navigate to="/fr" />} />

        {/* FR */}
        <Route
          path="/fr/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="" element={<Home />} />

                {/* Case studies */}
                <Route path="renault" element={<RenaultLocked />} />
                <Route path="carbon-calculator" element={<CarbonCaseStudy />} />
                <Route path="alten" element={<AltenCaseStudy />} />

                {/* Projets perso */}
                <Route path="project-1" element={<PersonalProject1 />} />
                <Route path="project-2" element={<PersonalProject2 />} />
                <Route path="project-3" element={<Project3 />} />
              </Routes>
            </MainLayout>
          }
        />

        {/* EN */}
        <Route
          path="/en/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="" element={<Home />} />

                {/* mêmes pages */}
                <Route path="renault" element={<RenaultLocked />} />
                <Route path="carbon-calculator" element={<CarbonCaseStudy />} />
                <Route path="alten" element={<AltenCaseStudy />} />

                <Route path="project-1" element={<PersonalProject1 />} />
                <Route path="project-2" element={<PersonalProject2 />} />
                <Route path="project-3" element={<Project3 />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}