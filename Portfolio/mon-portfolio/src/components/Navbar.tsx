import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { journeyPage } from "../i18n/journeyPage";

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const copy = journeyPage[lang];
  const journey = `/${lang}/${lang === "fr" ? "parcours" : "journey"}`;
  const links = [
    { to: `/${lang}#projets`, label: t.nav.projects },
    { to: journey, label: t.nav.parcours },
    { to: `${journey}#cv`, label: "CV" },
    { to: `/${lang}#contact`, label: t.nav.contact },
  ];
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    const element = header.current;
    if (!element) return;
    const updateHeight = () => document.documentElement.style.setProperty("--site-header-height", element.getBoundingClientRect().height + "px");
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => { observer.disconnect(); document.documentElement.style.removeProperty("--site-header-height"); };
  }, []);
  const languageButtons = () => <div className="flex items-center gap-1" aria-label={copy.language}>
    {(["fr", "en"] as const).map((value) => <button key={value} type="button" aria-pressed={lang === value}
      onClick={() => { setLang(value); setMenuOpen(false); }}
      className={`min-h-11 min-w-11 rounded-full px-3 text-sm ${lang === value ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100"}`}>{value.toUpperCase()}</button>)}
  </div>;
  const navigationLinks = () => links.map(({ to, label }) => <Link key={to} to={to}
    onClick={() => setMenuOpen(false)} aria-current={`${location.pathname}${location.hash}` === to ? "location" : undefined}
    className="inline-flex min-h-11 items-center py-2 text-sm text-gray-600 hover:text-black aria-[current=location]:font-semibold aria-[current=location]:text-black">{label}</Link>);
  return <header ref={header} className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6" onKeyDown={(event) => {
      if (event.key === "Escape" && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
    }}>
      <div className="flex items-center justify-between gap-4">
        <Link to={`/${lang}`} onClick={() => setMenuOpen(false)} className="font-semibold tracking-tight">Jérémy Cao</Link>
        <nav aria-label={copy.navigation} className="hidden items-center gap-6 md:flex">{navigationLinks()}</nav>
        <div className="hidden md:block">{languageButtons()}</div>
        <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation"
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu} onClick={() => setMenuOpen(!menuOpen)}
          className="min-h-11 min-w-11 rounded-xl border border-gray-200 text-xl md:hidden">{menuOpen ? "×" : "☰"}</button>
      </div>
      <nav id="mobile-navigation" aria-label={copy.navigation} hidden={!menuOpen} className="border-t border-gray-200 pt-3 md:hidden">
        <div className="flex flex-col gap-1">{navigationLinks()}</div>
        <div className="mt-3">{languageButtons()}</div>
      </nav>
    </div>
  </header>;
}
