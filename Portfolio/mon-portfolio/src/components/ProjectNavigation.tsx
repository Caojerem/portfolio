import { Link, useLocation } from "react-router-dom";

import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectNavigation() {
  const location = useLocation();
  const { lang, t } = useLanguage();

  const currentIndex = projects.findIndex((project) =>
    location.pathname.includes(project.slug)
  );

  const nextProject =
    currentIndex >= 0
      ? projects[(currentIndex + 1) % projects.length]
      : null;

  if (!nextProject) return null;

  return (
    <div className="flex justify-end">
      <Link
        to={`/${lang}/${nextProject.slug}`}
        className="inline-flex items-center rounded-xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
      >
        {t.caseStudyCta.next}
      </Link>
    </div>
  );
}