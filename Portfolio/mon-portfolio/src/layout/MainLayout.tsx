import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { setLang } = useLanguage();

  useEffect(() => {
    if (location.pathname.startsWith("/en")) {
      setLang("en");
    } else {
      setLang("fr");
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}