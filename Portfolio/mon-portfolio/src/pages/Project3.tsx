import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import portfolioCover from "../assets/portfolio/cover.svg";
import journeyImg from "../assets/portfolio/journey.png";
import systemImg from "../assets/portfolio/system.png";
import mobileImg from "../assets/portfolio/mobile.png";

import type { ReactNode } from "react";
import ProjectDropdown from "../components/ProjectDropdown";

function Tag({ children }: { children: ReactNode }) {
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
  children: ReactNode;
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

function Callout({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-gray-50 p-6">
      <p className="text-xs font-semibold tracking-wide text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold text-gray-900">
        {title}
      </p>

      <div className="mt-3 text-gray-700">{children}</div>
    </div>
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

export default function PortfolioCaseStudy() {
  const { lang, t } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    const fromScrollY = location.state?.fromScrollY;

    navigate(`/${lang}`, {
      state: {
        restoreScrollY:
          typeof fromScrollY === "number" ? fromScrollY : null,
      },
    });
  };

  const toc = [
    {
      id: "context",
      label: t.portfolioCaseStudy.sections.context.title,
    },
    {
      id: "storytelling",
      label: t.portfolioCaseStudy.sections.storytelling.title,
    },
    {
      id: "journey",
      label: t.portfolioCaseStudy.sections.journey.title,
    },
    {
      id: "design-system",
      label: t.portfolioCaseStudy.sections.designSystem.title,
    },
    {
      id: "mobile",
      label: t.portfolioCaseStudy.sections.mobile.title,
    },
    {
      id: "outcome",
      label: t.portfolioCaseStudy.sections.outcome.title,
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* TOP BAR */}
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

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-gray-500">
              {t.portfolioCaseStudy.hero.kicker}
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {t.portfolioCaseStudy.hero.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {t.portfolioCaseStudy.hero.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {t.portfolioCaseStudy.hero.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={portfolioCover}
                alt="Portfolio preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-20">
              <p className="text-xs font-semibold tracking-wide text-gray-500">
                SUMMARY
              </p>

              <nav className="mt-4 space-y-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-gray-700 hover:text-gray-900"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* BODY */}
          <div className="lg:col-span-9 space-y-16">
            {/* CONTEXT */}
            <Section
              id="context"
              eyebrow={t.portfolioCaseStudy.sections.context.eyebrow}
              title={t.portfolioCaseStudy.sections.context.title}
            >
              {t.portfolioCaseStudy.sections.context.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

              <div className="grid md:grid-cols-3 gap-4">
                {t.portfolioCaseStudy.sections.context.cards.map(
                  (card: any, index: number) => (
                    <Callout
                      key={index}
                      label="Focus"
                      title={card.title}
                    >
                      {card.text}
                    </Callout>
                  )
                )}
              </div>
            </Section>

            {/* STORYTELLING */}
            <Section
              id="storytelling"
              eyebrow={t.portfolioCaseStudy.sections.storytelling.eyebrow}
              title={t.portfolioCaseStudy.sections.storytelling.title}
            >
              {t.portfolioCaseStudy.sections.storytelling.paragraphs.map(
                (paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                )
              )}

              <div className="rounded-2xl border bg-gray-50 p-8">
                <div className="grid md:grid-cols-5 gap-6 text-center">
                  {t.portfolioCaseStudy.sections.storytelling.steps.map(
                    (step: string, index: number) => (
                      <div key={index}>
                        <div className="h-14 w-14 rounded-full bg-black text-white flex items-center justify-center mx-auto text-sm font-medium">
                          0{index + 1}
                        </div>

                        <p className="mt-4 font-medium text-gray-900">
                          {step}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <p>
                {t.portfolioCaseStudy.sections.storytelling.conclusion}
              </p>
            </Section>

            {/* JOURNEY */}
            <Section
              id="journey"
              eyebrow={t.portfolioCaseStudy.sections.journey.eyebrow}
              title={t.portfolioCaseStudy.sections.journey.title}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  {t.portfolioCaseStudy.sections.journey.paragraphs.map(
                    (paragraph: string, index: number) => (
                      <p key={index} className={index > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    )
                  )}

                  <div className="mt-8 space-y-4">
                    {t.portfolioCaseStudy.sections.journey.cards.map(
                      (card: any, index: number) => (
                        <Callout
                          key={index}
                          label="Choice"
                          title={card.title}
                        >
                          {card.text}
                        </Callout>
                      )
                    )}
                  </div>
                </div>

                <Figure
                  src={journeyImg}
                  alt="Journey section"
                />
              </div>
            </Section>

            {/* DESIGN SYSTEM */}
            <Section
              id="design-system"
              eyebrow={t.portfolioCaseStudy.sections.designSystem.eyebrow}
              title={t.portfolioCaseStudy.sections.designSystem.title}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <Figure
                  src={systemImg}
                  alt="Design system"
                />

                <div className="space-y-6">
                  {t.portfolioCaseStudy.sections.designSystem.items.map(
                    (item: any, index: number) => (
                      <div key={index}>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>

                        <p className="mt-2 text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </Section>

            {/* MOBILE */}
            <Section
              id="mobile"
              eyebrow={t.portfolioCaseStudy.sections.mobile.eyebrow}
              title={t.portfolioCaseStudy.sections.mobile.title}
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  {t.portfolioCaseStudy.sections.mobile.paragraphs.map(
                    (paragraph: string, index: number) => (
                      <p key={index} className={index > 0 ? "mt-4" : ""}>
                        {paragraph}
                      </p>
                    )
                  )}

                  <div className="mt-8">
                    <Callout
                      label={t.portfolioCaseStudy.sections.mobile.takeawayTitle}
                      title={t.portfolioCaseStudy.sections.mobile.takeaway}
                    >
                      <></>
                    </Callout>
                  </div>
                </div>

                <Figure
                  src={mobileImg}
                  alt="Mobile experience"
                />
              </div>
            </Section>

            {/* OUTCOME */}
            <Section
              id="outcome"
              eyebrow={t.portfolioCaseStudy.sections.outcome.eyebrow}
              title={t.portfolioCaseStudy.sections.outcome.title}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {t.portfolioCaseStudy.sections.outcome.items.map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="rounded-2xl border p-5 bg-white"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </Section>
          </div>
        </div>

        {/* FOOTER CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24 pt-12">
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
          </div>
        </section>
      </main>
    </div>
  );
}