import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const observerRef = useRef<IntersectionObserver | null>(null);

  const goToAnchor = (id: string) => {
    if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
        return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

  useEffect(() => {
    // Si on n'est pas sur la Home, on n'observe rien (et on clear l'état)
    if (location.pathname !== "/") {
      setActiveSection("");
      observerRef.current?.disconnect();
      observerRef.current = null;
      return;
    }

    // On est sur la Home => (re)attache l'observer
    observerRef.current?.disconnect();

    const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prend la section la plus “visible”
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        // Ajuste selon ta navbar (90px) + comportement scroll
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));
    observerRef.current = observer;

    // Initialise l'état (utile au refresh)
    const first = sections.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= 120 && r.bottom >= 120;
    });
    if (first?.id) setActiveSection(first.id);

    return () => observer.disconnect();
  }, [location.pathname]);

  const linkClass = (id: string) =>
    `relative pb-1 transition ${
      activeSection === id
        ? "text-black font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          Jérémy Cao
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => goToAnchor("about")} className={linkClass("about")}>
            À propos
          </button>
          <button onClick={() => goToAnchor("projets")} className={linkClass("projets")}>
            Projets
          </button>
          <button
            onClick={() => goToAnchor("projets-perso")}
            className={linkClass("projets-perso")}
          >
            Projets perso
          </button>
          <button onClick={() => goToAnchor("contact")} className={linkClass("contact")}>
            Contact
          </button>
        </nav>

        <button
          onClick={() => goToAnchor("contact")}
          className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-80 transition"
        >
          Me contacter
        </button>
        
        {/* Mobile button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        
        {/* menu mobile : ici, juste sous la ligne principale */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4">
            <button onClick={() => setMenuOpen(false)}>À propos</button>
            <button onClick={() => setMenuOpen(false)}>Projets</button>
            <button onClick={() => setMenuOpen(false)}>Projets perso</button>
            <button onClick={() => setMenuOpen(false)}>Contact</button>
          </div>
        )}  
      </div>
    </header>
  );
}
