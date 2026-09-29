import { useLanguage } from "../context/LanguageContext";
import initialPlan from "../assets/portfolio/system.png";
import oldJourney from "../assets/portfolio/journey.png";
import oldMobile from "../assets/portfolio/mobile.png";

type Section = "context" | "storytelling" | "journey" | "designSystem" | "mobile";
type Evidence = { src: string; label: string; caption: string };
const current = (name: string) => `${import.meta.env.BASE_URL}portfolio-evolution/${name}.png`;

export default function PortfolioEvidence({ section }: { section: Section }) {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const groups: Record<Section, Evidence[]> = {
    context: [
      { src: initialPlan, label: fr ? "Avant · maquette initiale" : "Before · initial sketch", caption: fr ? "Présentation, parcours, démarche et projets réunis dans une page longue. Ce visuel est une maquette dessinée, pas une capture du site." : "Introduction, background, approach and projects combined in one long page. This is a layout sketch, not a screenshot." },
      { src: current("desktop-projects"), label: fr ? "Après · accès aux projets" : "After · project selection", caption: fr ? "Après l’overlay, les cartes bureau conservent descriptions et accès aux études de cas." : "After the overlay, desktop cards retain descriptions and links to case studies." },
    ],
    storytelling: [
      { src: current("desktop-intro"), label: fr ? "Aujourd’hui · introduction" : "Today · introduction", caption: fr ? "Une entrée temporaire : portrait circulaire, fond clair avec contours et action explicite vers les projets." : "A temporary entry screen: circular portrait, a light background with outlines and an explicit action to reach projects." },
    ],
    journey: [
      { src: oldJourney, label: fr ? "Avant · fresque horizontale" : "Before · horizontal timeline", caption: fr ? "Une étape à la fois, avec cartes flottantes, points d’arrêt et flèches." : "One stage at a time, with floating cards, stopping points and arrows." },
      { src: current("journey-page"), label: fr ? "Après · page Parcours" : "After · Journey page", caption: fr ? "Début de la page dédiée : portrait et fresque verticale. Les accès au CV sont réunis sur cette page." : "Top of the dedicated page: portrait and vertical timeline. CV links are grouped on this page." },
    ],
    designSystem: [
      { src: current("mobile-grid"), label: fr ? "Aujourd’hui · cartes mobiles" : "Today · mobile cards", caption: fr ? "Deux colonnes, images 4:3, badges Pro/Perso, bordures et trois lignes réservées aux titres. Toute la carte est cliquable." : "Two columns, 4:3 images, Pro/Personal badges, borders and three lines for titles. The entire card is clickable." },
    ],
    mobile: [
      { src: oldMobile, label: fr ? "Avant · accueil mobile" : "Before · mobile homepage", caption: fr ? "Le titre et l’introduction occupaient l’essentiel du premier écran ; les projets étaient plus bas." : "The headline and introduction took up most of the first screen; projects were further down." },
      { src: current("mobile-intro"), label: fr ? "Après · introduction séparée" : "After · separate introduction", caption: fr ? "Un overlay qui se ferme pour laisser place aux projets, sans réapparaître à chaque retour." : "An overlay that closes to reveal projects, without reopening on every return." },
      { src: current("mobile-grid"), label: fr ? "Après · choisir un projet" : "After · choosing a project", caption: fr ? "Une grille inspirée d’Airbnb avec vignettes et filtres, plutôt qu’une succession de fiches détaillées." : "An Airbnb-inspired grid with thumbnails and filters, rather than a sequence of detailed cards." },
      { src: current("mobile-story"), label: fr ? "Après · lire par étapes" : "After · reading in steps", caption: fr ? "Exemple GoodPlanet : retour en haut, progression cliquable et flèches précédent/suivant en bas." : "GoodPlanet example: back at the top, clickable progress and previous/next arrows at the bottom." },
    ],
  };
  return (
    <div className="mt-8 space-y-3">
      <div className={`grid items-start gap-5 ${groups[section].length > 1 ? "md:grid-cols-2" : ""}`}>
        {groups[section].map(item => (
          <figure key={item.label} className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <p className="border-b border-gray-200 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-600">{item.label}</p>
            <a href={item.src} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 p-3 focus-visible:outline-2" aria-label={`${fr ? "Agrandir" : "Enlarge"} : ${item.label}`}>
              <img src={item.src} alt={item.caption} loading="lazy" className={`mx-auto h-auto w-full ${section === "mobile" || section === "designSystem" ? "max-w-[390px]" : ""}`} />
            </a>
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-gray-600">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="text-xs leading-relaxed text-gray-500">{fr ? "Archives conservées ; captures actuelles du site local en français, septembre 2026. Les formats peuvent différer. Appuyer pour agrandir." : "Archives preserved; current screenshots of the local site in French, September 2026. Formats may differ. Select to enlarge."}</p>
    </div>
  );
}
