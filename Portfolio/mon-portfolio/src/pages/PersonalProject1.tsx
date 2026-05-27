import { useLocation, useNavigate } from "react-router-dom";

import cover from "../assets/personal/wedding/cover.png";
import moodboard from "../assets/personal/wedding/figma-moodboard.png";
import navVariants from "../assets/personal/wedding/navbar-variants.png";
import finalWebflow from "../assets/personal/wedding/final-webflow.png";


import { useLanguage } from "../context/LanguageContext";
import ProjectDropdown from "../components/ProjectDropdown";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {eyebrow ? (
        <p className="text-sm font-medium tracking-wide text-gray-500">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>

      <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="rounded-2xl overflow-hidden border bg-white">
      <img src={src} alt={alt} className="w-full h-auto" />

      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function PersonalProject1() {
  const navigate = useNavigate();
  const location = useLocation();

  const { t, lang } = useLanguage();

  const data = t.weddingPage;

  const handleBack = () => {
    const y = location.state?.fromScrollY;
    const section = location.state?.fromSection;

    navigate(`/${lang}`, {
      state: { restoreScrollY: y, scrollTo: section },
    });
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="text-sm text-gray-500 hover:text-black"
          >
            ← {t.common.back}
          </button>

          <ProjectDropdown />
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">
              {data.hero.kicker}
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {data.hero.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {data.hero.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {data.hero.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {data.hero.cards.role.label}
                </p>

                <p className="mt-1 font-medium">
                  {data.hero.cards.role.value}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {data.hero.cards.format.label}
                </p>

                <p className="mt-1 font-medium">
                  {data.hero.cards.format.value}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {data.hero.cards.deliverables.label}
                </p>

                <p className="mt-1 font-medium">
                  {data.hero.cards.deliverables.value}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={cover}
                alt="Wedding website preview"
                className="w-full h-auto"
              />
            </div>

            <p className="mt-3 text-sm text-gray-600">
              {data.hero.imageCaption}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-20">
              <p className="text-xs font-semibold tracking-wide text-gray-500">
                {data.toc.title}
              </p>

              <nav className="mt-4 space-y-2">
                <a
                  href="#context"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {data.toc.context}
                </a>

                <a
                  href="#da"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {data.toc.da}
                </a>

                <a
                  href="#co-design"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {data.toc.coDesign}
                </a>

                <a
                  href="#nav"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {data.toc.nav}
                </a>

                <a
                  href="#build"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {data.toc.build}
                </a>

                <a
                  href="#result"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {data.toc.result}
                </a>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">
            <Section
              id="context"
              eyebrow={data.context.eyebrow}
              title={data.context.title}
            >
              <p>{data.context.desc}</p>

              <div className="grid md:grid-cols-3 gap-4">
                {data.context.cards.map((card: any) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border bg-gray-50 p-6"
                  >
                    <p className="text-xs font-semibold text-gray-500">
                      {card.label}
                    </p>

                    <p className="mt-2 font-semibold">
                      {card.title}
                    </p>

                    <p className="mt-2 text-gray-700">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="da"
              eyebrow={data.artisticDirection.eyebrow}
              title={data.artisticDirection.title}
            >
              <p>{data.artisticDirection.desc}</p>

              <Figure
                src={moodboard}
                alt="Moodboard"
                caption={data.artisticDirection.figureCaption}
              />
            </Section>

            <Section
              id="co-design"
              eyebrow={data.workshops.eyebrow}
              title={data.workshops.title}
            >
              <p>{data.workshops.desc}</p>

              <ul className="list-disc pl-5 space-y-2">
                {data.workshops.bullets.map((bullet: string) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Section>

            <Section
              id="nav"
              eyebrow={data.navigation.eyebrow}
              title={data.navigation.title}
            >
              <p>{data.navigation.desc}</p>

              <Figure
                src={navVariants}
                alt="Navigation variants"
                caption={data.navigation.figureCaption}
              />

              <div className="rounded-2xl border bg-gray-50 p-6">
                <p className="text-xs font-semibold text-gray-500">
                  {data.navigation.decision.label}
                </p>

                <p className="mt-2 font-semibold">
                  {data.navigation.decision.title}
                </p>

                <p className="mt-2 text-gray-700">
                  {data.navigation.decision.desc}
                </p>
              </div>
            </Section>

            <Section
              id="build"
              eyebrow={data.build.eyebrow}
              title={data.build.title}
            >
              <p>{data.build.desc}</p>

              <ul className="list-disc pl-5 space-y-2">
                {data.build.bullets.map((bullet: string) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <Figure
                src={finalWebflow}
                alt="Final Webflow website"
                caption={data.build.figureCaption}
              />
            </Section>

            <Section
              id="result"
              eyebrow={data.result.eyebrow}
              title={data.result.title}
            >
              <p>{data.result.desc}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://rodolphe-et-alice-mariage.webflow.io/#Home_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
                >
                  {data.result.liveCta}
                </a>
              </div>
            </Section>
          </div>
        </div>
        <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <button
            onClick={() => {
              navigate(`/${lang}`, {
                state: {
                  scrollTo: "projets-perso",
                },
              });
            }}
            className="rounded-2xl border border-gray-300 px-6 py-4 hover:bg-gray-50 transition text-center"
          >
            {t.caseStudyCta.back}
          </button>

          <a
            href={`/${lang}/project-2`}
            className="rounded-2xl bg-black text-white px-6 py-4 hover:opacity-80 transition text-center"
          >
            {t.caseStudyCta.next}
          </a>
        </div>
      </section>
      </main>
    </div>
  );
}