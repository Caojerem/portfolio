import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import RenaultCaseStudy from "./pages/RenaultCaseStudy";
import CarbonCaseStudy from "./pages/CarbonCaseStudy";
import AltenCaseStudy from "./pages/AltenCaseStudy";
import PersonalProject1 from "./pages/PersonalProject1";
import PersonalProject2 from "./pages/PersonalProject2";
import RenaultLocked from "./pages/RenaultLocked";

const mode = import.meta.env.VITE_PORTFOLIO_MODE; // "public" | "private"
const isPrivate = mode === "private";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Case studies */}
        <Route path="/renault" element={isPrivate ? <RenaultCaseStudy /> : <RenaultLocked />} />
        <Route path="/carbon-calculator" element={<CarbonCaseStudy />} />
        <Route path="/alten" element={<AltenCaseStudy />} />

        {/* Projets personnels */}
        <Route path="/project-1" element={<PersonalProject1 />} />
        <Route path="/project-2" element={<PersonalProject2 />} />
      </Routes>
    </>
  );
}