//import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";

import cover from "../assets/personal/quiz/cover.png";
import grid from "../assets/personal/quiz/grid.png";
import question from "../assets/personal/quiz/question.png";
import ProjectNavigation from "../components/ProjectNavigation";

import flowSystem from "../assets/personal/quiz/quiz-flow-system.png";
import flowInteraction from "../assets/personal/quiz/quiz-flow-interaction.png";
import flowStates from "../assets/personal/quiz/quiz-flow-states.png";
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

      <div className="mt-3 text-gray-700">
        {children}
      </div>
    </div>
  );
}

export default function PersonalProject2() {
  const navigate = useNavigate();
  const location = useLocation();

  const { t, lang } = useLanguage();

  const page = t.quizProjectPage;

  const handleBack = () => {
    const y = location.state?.fromScrollY;
    const section = location.state?.fromSection;

    navigate("/", {
      state: {
        restoreScrollY: y,
        scrollTo: section,
      },
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
              {page.hero.kicker}
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              {page.hero.title}
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              {page.hero.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {page.hero.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {page.hero.cards.objective.label}
                </p>

                <p className="mt-1 font-medium">
                  {page.hero.cards.objective.value}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {page.hero.cards.format.label}
                </p>

                <p className="mt-1 font-medium">
                  {page.hero.cards.format.value}
                </p>
              </div>

              <div className="rounded-2xl border p-4">
                <p className="text-xs text-gray-500">
                  {page.hero.cards.deliverables.label}
                </p>

                <p className="mt-1 font-medium">
                  {page.hero.cards.deliverables.value}
                </p>
              </div>
            </div>

            <br />

            <Callout
              label={page.hero.note.label}
              title={page.hero.note.title}
            >
              <p className="text-sm">
                {page.hero.note.desc}
              </p>
            </Callout>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <img
                src={cover}
                alt="Quiz prototype"
                className="w-full h-auto"
              />
            </div>
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
                {page.toc.title}
              </p>

              <nav className="mt-4 space-y-2">
                <a
                  href="#context"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.context}
                </a>

                <a
                  href="#format"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.format}
                </a>

                <a
                  href="#system"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.system}
                </a>

                <a
                  href="#flow"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.flow}
                </a>

                <a
                  href="#states"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.states}
                </a>

                <a
                  href="#screens"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.screens}
                </a>

                <a
                  href="#result"
                  className="block text-sm text-gray-700 hover:text-gray-900"
                >
                  {page.toc.items.result}
                </a>
              </nav>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9 space-y-16">
            {/* CONTEXT */}
            <Section
              id="context"
              eyebrow={page.sections.context.eyebrow}
              title={page.sections.context.title}
            >
              <p>{page.sections.context.desc}</p>

              <div className="grid md:grid-cols-3 gap-4">
                {page.sections.context.callouts.map(
                  (item: any, index: number) => (
                    <Callout
                      key={index}
                      label={item.label}
                      title={item.title}
                    >
                      <p>{item.desc}</p>
                    </Callout>
                  )
                )}
              </div>
            </Section>

            {/* FORMAT */}
            <Section
              id="format"
              eyebrow={page.sections.format.eyebrow}
              title={page.sections.format.title}
            >
              <p>{page.sections.format.desc}</p>

              <ul className="list-disc pl-5 space-y-2">
                {page.sections.format.bullets.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Callout
                label={page.sections.format.callout.label}
                title={page.sections.format.callout.title}
              >
                <p>{page.sections.format.callout.desc}</p>
              </Callout>
            </Section>

            {/* SYSTEM */}
            <Section
              id="system"
              eyebrow={page.sections.system.eyebrow}
              title={page.sections.system.title}
            >
              <p>{page.sections.system.desc}</p>

              <Figure
                src={flowSystem}
                alt="System architecture"
                caption={page.sections.system.figureCaption}
              />
            </Section>

            {/* FLOW */}
            <Section
              id="flow"
              eyebrow={page.sections.flow.eyebrow}
              title={page.sections.flow.title}
            >
              <p>{page.sections.flow.desc}</p>

              <Figure
                src={flowInteraction}
                alt="Interaction flow"
                caption={page.sections.flow.figureCaption}
              />
            </Section>

            {/* STATES */}
            <Section
              id="states"
              eyebrow={page.sections.states.eyebrow}
              title={page.sections.states.title}
            >
              <p>{page.sections.states.desc}</p>

              <Figure
                src={flowStates}
                alt="UI states"
                caption={page.sections.states.figureCaption}
              />
            </Section>

            {/* SCREENS */}
            <Section
              id="screens"
              eyebrow={page.sections.screens.eyebrow}
              title={page.sections.screens.title}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Figure
                  src={grid}
                  alt="Grid screen"
                  caption={page.sections.screens.figures.grid}
                />

                <Figure
                  src={question}
                  alt="Question screen"
                  caption={page.sections.screens.figures.question}
                />
              </div>

              <Callout
                label={page.sections.screens.bonus.label}
                title={page.sections.screens.bonus.title}
              >
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {page.sections.screens.bonus.items.map(
                    (item: string) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </Callout>

              <Callout
                label={page.sections.screens.feedback.label}
                title={page.sections.screens.feedback.title}
              >
                <p className="text-sm">
                  {page.sections.screens.feedback.desc}
                </p>
              </Callout>
            </Section>

            {/* RESULT */}
            <Section
              id="result"
              eyebrow={page.sections.result.eyebrow}
              title={page.sections.result.title}
            >
              <ul className="list-disc pl-5 space-y-2">
                {page.sections.result.bullets.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Callout
                label={page.sections.result.callout.label}
                title={page.sections.result.callout.title}
              >
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {page.sections.result.callout.items.map(
                    (item: string) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </Callout>
            </Section>
          </div>
        </div>
        <br />
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

          <ProjectNavigation />
        </div>
      </section>
      </main>
    </div>
  );
}