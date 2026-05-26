import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";


export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, t, setLang } = useLanguage();
  /*const switchLanguage = () => {
  const newLang = lang === "fr" ? "en" : "fr";

    // enlève /fr ou /en du début de l'URL
    const path = location.pathname.replace(/^\/(fr|en)/, "");

    navigate(`/${newLang}${path}`);
  };*/

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const observerRef = useRef<IntersectionObserver | null>(null);

  const goToAnchor = (id: string) => {
  setMenuOpen(false);

  const isHomePage =
      location.pathname === `/${lang}` ||
      location.pathname === `/${lang}/`;

    if (!isHomePage) {
      navigate(`/${lang}`);

      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);

      return;
    }

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const isHomePage =
      location.pathname === `/${lang}` ||
      location.pathname === `/${lang}/`;

    if (!isHomePage) {
      setActiveSection("");
      observerRef.current?.disconnect();
      observerRef.current = null;
      return;
    }

    observerRef.current?.disconnect();

    const sections = Array.from(
      document.querySelectorAll("section[id]")
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) -
              (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));
    observerRef.current = observer;

    const first = sections.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= 120 && r.bottom >= 120;
    });

    if (first?.id) setActiveSection(first.id);

    return () => observer.disconnect();
  }, [location.pathname, lang]);

  const linkClass = (id: string) =>
  `relative w-24 text-center pb-1 transition ${
    activeSection === id
      ? "text-black font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black"
      : "text-gray-500 hover:text-black"
  }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3">
        {/* Ligne principale */}
        <div className="flex items-center justify-between">
          <Link to={`/${lang}`} className="font-semibold tracking-tight">
            Jérémy Cao
          </Link>

          <nav className="hidden md:flex items-center gap-2 text-sm">
            <button onClick={() => goToAnchor("about")} className={linkClass("about")}>
              {t.nav.about}
            </button>
            <button onClick={() => goToAnchor("parcours")} className={linkClass("parcours")}>
              {t.nav.parcours}
            </button>
            <button onClick={() => goToAnchor("projets")} className={linkClass("projets")}>
              {t.nav.projects}
            </button>
            <button
              onClick={() => goToAnchor("projets-perso")}
              className={linkClass("projets-perso")}
            >
              {t.nav.personal}
            </button>
            <button onClick={() => goToAnchor("contact")} className={linkClass("contact")}>
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center rounded-full border p-1 bg-gray-100">
              <button
                onClick={() => setLang("fr")}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  lang === "fr"
                    ? "bg-black text-white"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                FR
              </button>

              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  lang === "en"
                    ? "bg-black text-white"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => goToAnchor("contact")}
              className="hidden md:block rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-80 transition"
            >
              Me contacter
            </button>

            <button
              className="md:hidden text-2xl leading-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Ouvrir le menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4 text-sm">
            <button onClick={() => goToAnchor("about")} className="text-left">
              {t.nav.about}
            </button>
            <button onClick={() => goToAnchor("parcours")} className="text-left">
              {t.nav.parcours}
            </button>
            <button onClick={() => goToAnchor("projets")} className="text-left">
              {t.nav.projects}
            </button>
            <button onClick={() => goToAnchor("projets-perso")} className="text-left">
              {t.nav.personal}
            </button>
            <button onClick={() => goToAnchor("contact")} className="text-left">
              {t.nav.contact}
            </button>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setLang("fr")}
                className={`px-3 py-1 rounded-full text-sm border ${
                  lang === "fr"
                    ? "bg-black text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                FR
              </button>

              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-sm border ${
                  lang === "en"
                    ? "bg-black text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}