import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectDropdown() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const { lang } = useLanguage();

  const currentProject = projects.find((project) =>
    location.pathname.includes(project.slug)
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-72 inline-flex items-center justify-between rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 transition"
      >
        <span>
          {currentProject?.label || "Projects"}
        </span>

        <span
          className={`transition ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl border bg-white shadow-xl overflow-hidden z-50">
          {projects.map((project) => {
            const active = location.pathname.includes(project.slug);

            return (
              <Link
                key={project.slug}
                to={`/${lang}/${project.slug}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm transition ${
                  active
                    ? "bg-black text-white"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {project.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}