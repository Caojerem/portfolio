import { createContext, useContext, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations } from "../i18n/translations";

type Lang = "fr" | "en";
type LanguageValue = { lang: Lang; setLang: (lang: Lang) => void; t: typeof translations[Lang] };
const LanguageContext = createContext<LanguageValue | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang: Lang = /^\/en(?:\/|$)/.test(location.pathname) ? "en" : "fr";
  const setLang = (next: Lang) => {
    let path = location.pathname.replace(/^\/(fr|en)(?=\/|$)/, "");
    if (/^\/(parcours|journey)\/?$/.test(path)) path = next === "fr" ? "/parcours" : "/journey";
    navigate(`/${next}${path}${location.search}${location.hash}`, { state: location.state });
  };
  return <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LanguageContext.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider is required");
  return context;
};
