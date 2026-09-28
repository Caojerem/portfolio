import { Link } from "react-router-dom";
import profile from "../assets/profile-extented.jpg";
import JourneySection from "../components/JourneySection";
import { useLanguage } from "../context/LanguageContext";
import { journeyPage } from "../i18n/journeyPage";

// Only real documents become download links.
const documents = import.meta.glob("/public/cv/*.pdf", { eager: true, query: "?url", import: "default" });

export default function Journey() {
  const { lang, t } = useLanguage();
  const copy = journeyPage[lang];
  const filename = [`Jeremy-Cao-CV-${lang}.pdf`, "Jeremy-Cao-CV.pdf"].find((name) => `/public/cv/${name}` in documents);
  const cvUrl = filename ? `${import.meta.env.BASE_URL}cv/${filename}` : null;
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 text-gray-900 sm:px-6 md:py-20">
      <header className="mb-12 grid items-center gap-8 md:mb-20 md:grid-cols-[minmax(0,1fr)_240px] md:gap-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{t.journey.kicker}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{t.journey.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{t.journey.subtitle}</p>
          <a href="#cv" className="mt-6 inline-flex min-h-11 items-center gap-3 underline underline-offset-4">{copy.cv} <span aria-hidden="true">↓</span></a>
        </div>
        <figure className="mx-auto w-40 text-center md:w-full">
          <img
            src={profile}
            alt={lang === "fr" ? "Portrait de Jérémy Cao" : "Portrait of Jérémy Cao"}
            className="aspect-square w-full rounded-full object-cover object-center"
          />
          <figcaption className="mt-3 text-sm text-gray-500">Jérémy Cao</figcaption>
        </figure>
      </header>
      <JourneySection vertical />
      <section id="cv" aria-labelledby="cv-title" className="mt-20 rounded-[28px] border border-gray-200 bg-gray-50 p-6 sm:p-10 md:mt-28">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Curriculum vitæ</p>
            <h2 id="cv-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.cv}</h2>
            <p className="mt-5 font-medium">Jérémy Cao · UX/UI & Product Designer</p>
            <p className="mt-3 max-w-xl leading-relaxed text-gray-600">{copy.description}</p>
          </div>
          {cvUrl ? <div className="flex flex-col gap-3">
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-black px-6 py-3 text-white hover:bg-gray-800">{copy.view} <span className="ml-3" aria-hidden="true">↗</span></a>
            <a href={cvUrl} download={filename} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 hover:bg-gray-100">{copy.download} <span className="ml-3" aria-hidden="true">↓</span></a>
            <span className="text-center text-xs text-gray-500">PDF</span>
          </div> : <p className="max-w-xs text-sm text-gray-500">{copy.unavailable}</p>}
        </div>
      </section>
      <footer className="mt-12 flex flex-wrap gap-6">
        <Link to={`/${lang}#projets`} className="inline-flex min-h-11 items-center underline underline-offset-4">{copy.projects}</Link>
        <Link to={`/${lang}#contact`} className="inline-flex min-h-11 items-center underline underline-offset-4">{copy.contact} <span className="ml-2" aria-hidden="true">↗</span></Link>
      </footer>
    </main>
  );
}
